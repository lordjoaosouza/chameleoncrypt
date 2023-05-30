import AdmZip from 'adm-zip'
import fs from 'fs'
import { encryptZipFile, decryptZipFile } from './zip'
import path from 'path'

export async function encryptFile(inputPath, password) {
  const stats = fs.statSync(inputPath)
  const isDirectory = stats.isDirectory()

  const zip = new AdmZip()
  const zipFilePath = `${inputPath}.zip`

  if (isDirectory) {
    zip.addLocalFolder(inputPath)
  } else {
    const fileData = fs.readFileSync(inputPath)
    const relativeFilePath = inputPath.split('/').pop()
    zip.addFile(relativeFilePath, fileData)
  }

  zip.writeZip(zipFilePath)

  encryptZipFile(zipFilePath, password)
}

export async function decryptFile(inputPath, password) {
  const stats = fs.statSync(inputPath)
  const isDirectory = stats.isDirectory()

  let decryptedFolder
  if (isDirectory) {
    decryptedFolder = inputPath.replace('.chameleon', '')
    const zip = new AdmZip(inputPath)
    zip.extractAllTo(decryptedFolder, true)
  } else {
    const decryptedFilePath = decryptZipFile(inputPath, password)
    decryptedFolder = path.dirname(inputPath)
    const zip = new AdmZip(decryptedFilePath)
    zip.extractAllTo(decryptedFolder, true)
    fs.unlinkSync(decryptedFilePath)
  }

  return decryptedFolder
}

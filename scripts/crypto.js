import AdmZip from 'adm-zip'
import fs from 'fs'
import { encryptZipFile, decryptZipFile } from './zip'

export async function encryptFile(folderPath, password) {
  const zipFilePath = `${folderPath}.zip`

  const zip = new AdmZip()
  zip.addLocalFolder(folderPath)
  zip.writeZip(zipFilePath)

  encryptZipFile(zipFilePath, password)
}

export async function decryptFile(encryptedFolderPath, password) {
  const encryptedFilePath = `${encryptedFolderPath}.chameleon`

  const decryptedFilePath = decryptZipFile(encryptedFilePath, password)

  const decryptedFolder = decryptedFilePath.replace('.zip', '')

  const zip = new AdmZip(decryptedFilePath)
  zip.extractAllTo(decryptedFolder, true)

  fs.unlinkSync(decryptedFilePath)
}

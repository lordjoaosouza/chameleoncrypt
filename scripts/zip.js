import AdmZip from 'adm-zip'
import fs from 'fs'
import crypto from 'crypto'
import path from 'path'

export function encryptZipFile(inputPath, password) {
  const zip = new AdmZip()

  const stats = fs.statSync(inputPath)
  const isDirectory = stats.isDirectory()

  const key = crypto.createHash('sha256').update(password).digest('hex')

  const outputFilePath = `${inputPath}.chameleon`

  const encryptedZip = new AdmZip()

  if (isDirectory) {
    zip.addLocalFolder(inputPath)
  } else {
    const fileData = fs.readFileSync(inputPath)
    zip.addFile(path.basename(inputPath), fileData)
  }

  zip.getEntries().forEach((entry) => {
    if (!entry.isDirectory) {
      const data = entry.getData()
      const cipher = crypto.createCipher('aes-256-cbc', key)
      const encryptedData = Buffer.concat([cipher.update(data), cipher.final()])

      encryptedZip.addFile(entry.entryName, encryptedData)
    } else {
      encryptedZip.addFile(entry.entryName, entry.getData())
    }
  })

  encryptedZip.writeZip(outputFilePath)

  fs.unlinkSync(inputPath)
}

export function decryptZipFile(inputPath, password) {
  const encryptedZip = new AdmZip(inputPath)

  const decryptedZip = new AdmZip()

  const key = crypto.createHash('sha256').update(password).digest('hex')

  const outputFilePath = inputPath.replace('.chameleon', '') + '.zip'

  encryptedZip.getEntries().forEach((entry) => {
    if (!entry.isDirectory) {
      const encryptedData = entry.getData()
      const decipher = crypto.createDecipher('aes-256-cbc', key)
      const decryptedData = Buffer.concat([decipher.update(encryptedData), decipher.final()])

      decryptedZip.addFile(entry.entryName, decryptedData)
    } else {
      decryptedZip.addFile(entry.entryName, entry.getData())
    }
  })

  decryptedZip.writeZip(outputFilePath)

  fs.unlinkSync(inputPath)

  return outputFilePath
}

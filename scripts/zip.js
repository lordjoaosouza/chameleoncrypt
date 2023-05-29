import AdmZip from 'adm-zip'
import fs from 'fs'
import crypto from 'crypto'

export function encryptZipFile(filePath, password) {
  const zip = new AdmZip(filePath)

  const key = crypto.createHash('sha256').update(password).digest('hex')

  const encryptedFilePath = filePath.replace('.zip', '') + '.chameleon'

  const encryptedZip = new AdmZip()

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

  encryptedZip.writeZip(encryptedFilePath)

  fs.unlinkSync(filePath)
}

export function decryptZipFile(filePath, password) {
  const encryptedZip = new AdmZip(filePath)
  const decryptedZip = new AdmZip()

  const key = crypto.createHash('sha256').update(password).digest('hex')

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

  const decryptedFilePath = filePath.replace('.chameleon', '') + '.zip'
  decryptedZip.writeZip(decryptedFilePath)

  fs.unlinkSync(filePath)

  return decryptedFilePath
}

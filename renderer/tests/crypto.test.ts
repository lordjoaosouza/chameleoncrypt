import { expect, test, beforeAll, afterAll, afterEach } from '@jest/globals'
import { decryptZipFile, encryptZipFile } from '../scripts/crypto-zip'
import fs from 'fs'
import path from 'path'
import AdmZip from 'adm-zip'

const projectPath = path.resolve(__dirname, '..')
const filePath = path.join(projectPath, 'tests', 'testFolder', 'testFile')
const filePathCompared = path.join(projectPath, 'tests', 'testFolder', 'compared')
const password = 'password'
const originalArray = fs.readFileSync(filePath)

beforeAll(() => {
  encryptZipFile(filePath, password)
  decryptZipFile(filePath + '.encrypted.zip', password)

  fs.renameSync(filePath + '.encrypted.zip', filePathCompared + '/testFile.encrypted.zip')
  fs.renameSync(filePath + '.decrypted.zip', filePathCompared + '/testFile.decrypted.zip')
})

afterAll(() => {
  fs.unlinkSync(filePathCompared + '/testFile.encrypted.zip')
  fs.unlinkSync(filePathCompared + '/testFile.decrypted.zip')
})

afterEach(() => {
  fs.unlinkSync(filePathCompared + '/testFile')
})

test('Encryption test', () => {
  const comparedZip = new AdmZip(filePathCompared + '/testFile.encrypted.zip')
  comparedZip.extractAllTo(filePathCompared, true)

  const finalArray = fs.readFileSync(filePathCompared + '/testFile')

  expect(originalArray).not.toEqual(finalArray)
})

test('Decryption test', () => {
  const comparedZip = new AdmZip(filePathCompared + '/testFile.decrypted.zip')
  comparedZip.extractAllTo(filePathCompared, true)

  const finalArray = fs.readFileSync(filePathCompared + '/testFile')

  expect(originalArray).toEqual(finalArray)
})

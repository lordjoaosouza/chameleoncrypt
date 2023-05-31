import { expect, test } from '@jest/globals'
import axios from 'axios'

test('Home page integrity test', async () => {
  const response = await axios.get('http://localhost:8888/home')
  expect(response.status).toBe(200)
})

test('Encryption page integrity test', async () => {
  const response = await axios.get('http://localhost:8888/encrypt')
  expect(response.status).toBe(200)
})

test('Decryption page integrity test', async () => {
  const response = await axios.get('http://localhost:8888/decrypt')
  expect(response.status).toBe(200)
})

test('Passwords Vault page integrity test', async () => {
  const response = await axios.get('http://localhost:8888/passwords-vault')
  expect(response.status).toBe(200)
})

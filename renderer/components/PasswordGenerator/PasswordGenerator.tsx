import React, { useState } from 'react'
import { Container, Password, Button } from './style'

const LENGTH = 200
const USE_UPPERCASE = true
const USE_LOWERCASE = true
const USE_NUMBERS = true
const USE_SPECIAL = true

function generatePassword() {
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const numbers = '0123456789'
  const specialChars = '!@#$%^&*'

  let password = ''

  while (password.length < LENGTH) {
    if (USE_UPPERCASE && password.length < LENGTH && Math.random() < 0.5) {
      const randomIndex = Math.floor(Math.random() * uppercaseLetters.length)
      password += uppercaseLetters[randomIndex]
    }

    if (USE_LOWERCASE && password.length < LENGTH && Math.random() < 0.5) {
      const randomIndex = Math.floor(Math.random() * lowercaseLetters.length)
      password += lowercaseLetters[randomIndex]
    }

    if (USE_NUMBERS && password.length < LENGTH && Math.random() < 0.5) {
      const randomIndex = Math.floor(Math.random() * numbers.length)
      password += numbers[randomIndex]
    }

    if (USE_SPECIAL && password.length < LENGTH && Math.random() < 0.5) {
      const randomIndex = Math.floor(Math.random() * specialChars.length)
      password += specialChars[randomIndex]
    }
  }

  return password
}

export default function PasswordGenerator() {
  const [password, setPassword] = useState(generatePassword())

  const generateNewPassword = () => {
    setPassword(generatePassword())
  }

  return (
    <Container>
      <Password>{password}</Password>
      <Button onClick={generateNewPassword}>Gerar nova senha</Button>
    </Container>
  )
}

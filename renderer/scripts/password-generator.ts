export default function generatePassword(length, uppercase, lowercase, numbers, special) {
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const numbersStr = '0123456789'
  const specialChars = '!@#$%^&*'

  let password = ''

  while (password.length < length) {
    if (uppercase && password.length < length && Math.random() < 0.5) {
      const randomIndex = Math.floor(Math.random() * uppercaseLetters.length)
      password += uppercaseLetters[randomIndex]
    }

    if (lowercase && password.length < length && Math.random() < 0.5) {
      const randomIndex = Math.floor(Math.random() * lowercaseLetters.length)
      password += lowercaseLetters[randomIndex]
    }

    if (numbers && password.length < length && Math.random() < 0.5) {
      const randomIndex = Math.floor(Math.random() * numbersStr.length)
      password += numbersStr[randomIndex]
    }

    if (special && password.length < length && Math.random() < 0.5) {
      const randomIndex = Math.floor(Math.random() * specialChars.length)
      password += specialChars[randomIndex]
    }
  }

  return password
}

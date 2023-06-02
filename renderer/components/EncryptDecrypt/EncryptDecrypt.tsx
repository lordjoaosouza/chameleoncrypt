import React, { useState } from 'react'
import {
  Container,
  KeyContainer,
  PasswordContainer,
  PasswordTitle,
  Password,
  ShowPassword,
  EncryptDecryptButton,
} from './style'
import { FaEyeSlash, FaEye } from 'react-icons/fa'
import { HiLockClosed, HiLockOpen } from 'react-icons/hi'
import InputPath from '../InputPath/InputPath'
import { encryptZipFile, decryptZipFile } from '../../scripts/crypto-zip'
import ErrorPopup from '../PopUp/PopUp'

interface EncryptDecryptProps {
  title: string
  actionTitle: string
  icon: string
  buttonText: string
}

export default function EncryptDecrypt({
  title,
  actionTitle,
  icon,
  buttonText,
}: EncryptDecryptProps) {
  const [show, setShow] = useState(false)
  const [password, setPassword] = useState('')
  const [path, setPath] = useState('')
  const [showPopup, setShowPopup] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleClick = () => {
    setShow(!show)
  }

  const handleEncryptDecrypt = () => {
    if (password === '') {
      setErrorMessage('Password error')
      setShowPopup(true)
      return
    }

    if (actionTitle === 'criptografia') {
      try {
        encryptZipFile(path, password)
      } catch (err) {
        setErrorMessage(err.message)
        setShowPopup(true)
        console.log(err.message) // remove later
      }
    } else {
      try {
        decryptZipFile(path, password)
      } catch (err) {
        setErrorMessage(err.message)
        setShowPopup(true)
        console.log(err.message) // remove later
      }
    }
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handlePathChange = (newPath: string) => {
    setPath(newPath)
  }

  return (
    <Container>
      <KeyContainer>
        <PasswordTitle>{title} seus arquivos!</PasswordTitle>
        <PasswordContainer>
          <Password
            type={show ? 'text' : 'password'}
            placeholder={`Senha para ${actionTitle}`}
            value={password}
            onChange={handlePasswordChange}
          />
          <ShowPassword onClick={handleClick}>{show ? <FaEyeSlash /> : <FaEye />}</ShowPassword>
        </PasswordContainer>
        <EncryptDecryptButton onClick={handleEncryptDecrypt}>
          {icon === 'HiLockClosed' ? <HiLockClosed /> : <HiLockOpen />} {buttonText}
        </EncryptDecryptButton>
      </KeyContainer>
      <InputPath buttonText={buttonText} onPathChange={handlePathChange} />
      {showPopup && <ErrorPopup message={errorMessage} onClose={handleClosePopup} />}
    </Container>
  )
}

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
import { ErrorPopup, EncryptDecryptPopUp, DonePopUp } from '../PopUp/PopUp'

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
  const [showEncryptDecryptPopUp, setShowEncryptDecryptPopUp] = useState(false)
  const [encryptDecryptMessage, setEncryptDecryptMessage] = useState('')
  const [donePopUpMessage, setDonePopUpMessage] = useState('')
  const [showDonePopUp, setShowDonePopUp] = useState(false)

  const handleClick = () => {
    setShow(!show)
  }

  const handleEncryptDecrypt = () => {
    if (password === '') {
      setErrorMessage('Password error')
      setShowPopup(true)
      return
    } else if (path === '') {
      setErrorMessage('Empty path')
      setShowPopup(true)
      return
    }

    if (actionTitle === 'encrypt') {
      setEncryptDecryptMessage('Encrypting')
      setShowEncryptDecryptPopUp(true)

      setTimeout(() => {
        try {
          encryptZipFile(path, password)
          setShowEncryptDecryptPopUp(false)
          setDonePopUpMessage('Encryption done')
          setShowDonePopUp(true)
        } catch (err) {
          setShowEncryptDecryptPopUp(false)
          setErrorMessage(err.message)
          setShowPopup(true)
        }
      }, 0)
    } else {
      setEncryptDecryptMessage('Decrypting')
      setShowEncryptDecryptPopUp(true)

      setTimeout(() => {
        try {
          decryptZipFile(path, password)
          setShowEncryptDecryptPopUp(false)
          setDonePopUpMessage('Decryption done')
          setShowDonePopUp(true)
        } catch (err) {
          setShowEncryptDecryptPopUp(false)
          setErrorMessage(err.message)
          setShowPopup(true)
        }
      }, 0)
    }
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
        <PasswordTitle>{title} your data</PasswordTitle>
        <PasswordContainer>
          <Password
            type={show ? 'text' : 'password'}
            placeholder={`Password to ${actionTitle}`}
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
      {showPopup && <ErrorPopup message={errorMessage} onClose={() => setShowPopup(false)} />}
      {showEncryptDecryptPopUp && <EncryptDecryptPopUp message={encryptDecryptMessage} />}
      {showDonePopUp && (
        <DonePopUp message={donePopUpMessage} onClose={() => setShowDonePopUp(false)} />
      )}
    </Container>
  )
}

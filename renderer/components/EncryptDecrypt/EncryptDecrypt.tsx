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

  const handleClick = () => {
    setShow(!show)
  }

  const handleEncryptDecrypt = () => {
    if (actionTitle === 'criptografia') {
      encryptZipFile(path, password)
    } else {
      decryptZipFile(path, password)
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
      <InputPath onPathChange={handlePathChange} />
    </Container>
  )
}

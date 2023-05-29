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
import DragDrop from '../DragDrop/DragDrop'

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

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <Container>
      <KeyContainer>
        <PasswordTitle>{title} seus arquivos!</PasswordTitle>
        <PasswordContainer>
          <Password type={show ? 'text' : 'password'} placeholder={`Senha para ${actionTitle}`} />
          <ShowPassword onClick={handleClick}>{show ? <FaEyeSlash /> : <FaEye />}</ShowPassword>
        </PasswordContainer>
        <EncryptDecryptButton>
          {icon === 'HiLockClosed' ? <HiLockClosed /> : <HiLockOpen />} {buttonText}
        </EncryptDecryptButton>
      </KeyContainer>
      <DragDrop />
    </Container>
  )
}

import React from 'react'
import { Container, PopUp, Title, Button } from './style'

interface PopUpProps {
  message: string
  onClose?: () => void
}

export function ErrorPopup({ message, onClose }: PopUpProps) {
  const messages = {
    'Invalid filename': 'Arquivo não encontrado no diretório',
    'Password error': 'Senha não pode ser vazia',
    'Empty path': 'O path não pode ser vazio',
  }

  let finalMessage = messages[message] || message

  if (message.includes('no such file or directory')) {
    finalMessage = 'Arquivo ou diretório não encontrado'
  } else if(message.includes('illegal operation on a directory, read')) {
    finalMessage = 'O arquivo não pode ser um diretório'
  } else if (message.includes('Cipher functions:OPENSSL_internal:BAD_DECRYPT')) {
    finalMessage = 'Senha para descriptografia incorreta'
  } else if (message.includes('Invalid or unsupported zip format')) {
    finalMessage = 'O arquivo não foi criptografado previamente'
  }

  return (
    <Container>
      <PopUp>
        <Title>{finalMessage}!</Title>
        <Button onClick={onClose}>Fechar</Button>
      </PopUp>
    </Container>
  )
}

export function EncryptDecryptPopUp({ message }: PopUpProps) {
  return (
    <Container>
      <PopUp>
        <Title>{message}...</Title>
      </PopUp>
    </Container>
  )
}

export function DonePopUp({ message, onClose }: PopUpProps) {
  return (
    <Container>
      <PopUp>
        <Title>{message}!</Title>
        <Button onClick={onClose}>Fechar</Button>
      </PopUp>
    </Container>
  )
}

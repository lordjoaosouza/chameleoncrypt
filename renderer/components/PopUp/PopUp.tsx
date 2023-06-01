import React from 'react'
import { Container, PopUp, Title, Button } from './style'

interface ErrorPopupProps {
  message: string
  onClose: () => void
}

const messages = {
  'Invalid filename': 'Arquivo não encontrado no diretório',
  'Password error': 'Senha não pode ser vazia',
}

export default function ErrorPopup({ message, onClose }: ErrorPopupProps) {
  let finalMessage = ''

  if (message.includes('no such file or directory')) {
    finalMessage = 'Arquivo ou diretório não encontrado'
  } else if (message.includes('Cipher functions:OPENSSL_internal:BAD_DECRYPT')) {
    finalMessage = 'Senha para descriptografia incorreta'
  } else if (message.includes('Invalid or unsupported zip format')) {
    finalMessage = 'O arquivo não foi criptografado'
  } else {
    finalMessage = messages[message]
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

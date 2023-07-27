import React from 'react'
import { Container, PopUp, Title, Button } from './style'

interface PopUpProps {
  message: string
  onClose?: () => void
}

export function ErrorPopup({ message, onClose }: PopUpProps) {
  const messages = {
    'Invalid filename': 'File do not found in this path',
    'Password error': 'Password must not be empty',
    'Empty path': 'Path must not be empty',
  }

  let finalMessage = messages[message] || message

  if (message.includes('no such file or directory')) {
    finalMessage = 'No such file or directory'
  } else if (message.includes('illegal operation on a directory, read')) {
    finalMessage = 'File must not be a directory'
  } else if (message.includes('Cipher functions:OPENSSL_internal:BAD_DECRYPT')) {
    finalMessage = 'Decryption password is wrong'
  } else if (message.includes('Invalid or unsupported zip format')) {
    finalMessage = 'File was not encrypted before'
  }

  return (
    <Container>
      <PopUp>
        <Title>{finalMessage}!</Title>
        <Button onClick={onClose}>Close</Button>
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
        <Button onClick={onClose}>Close</Button>
      </PopUp>
    </Container>
  )
}

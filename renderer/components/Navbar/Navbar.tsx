import { Container, Logo, Buttons, Button } from './style'
import { HiLockClosed, HiLockOpen } from 'react-icons/hi'
import { MdPassword } from 'react-icons/md'

export default function Navbar() {
  return (
    <Container>
      <a href='home'>
        <Logo src='logo.svg' />
      </a>
      <Buttons>
        <Button href='encryption'>
          <HiLockOpen />
          Criptografar
        </Button>
        <Button href='decryption'>
          <HiLockClosed />
          Descriptografar
        </Button>
        <Button href='password-vault'>
          <MdPassword />
          Cofre de Senhas
        </Button>
      </Buttons>
    </Container>
  )
}

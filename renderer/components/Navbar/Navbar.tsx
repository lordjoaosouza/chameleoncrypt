import { Container, Logo, Buttons, Button } from './style'
import { HiLockClosed, HiLockOpen } from 'react-icons/hi'
import { MdPassword } from 'react-icons/md'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()

  const handlePageClick = (page) => {
    router.push(`/${page}`)
  }

  return (
    <Container>
      <a onClick={() => handlePageClick('home')}>
        <Logo src='logo.svg' />
      </a>
      <Buttons>
        <Button onClick={() => handlePageClick('encrypt')}>
          <HiLockOpen />
          Criptografar
        </Button>
        <Button onClick={() => handlePageClick('decrypt')}>
          <HiLockClosed />
          Descriptografar
        </Button>
        <Button onClick={() => handlePageClick('password-vault')}>
          <MdPassword />
          Gerador de Senhas
        </Button>
      </Buttons>
    </Container>
  )
}

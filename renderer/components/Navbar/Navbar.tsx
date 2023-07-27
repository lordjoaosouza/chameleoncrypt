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
          Encrypt
        </Button>
        <Button onClick={() => handlePageClick('decrypt')}>
          <HiLockClosed />
          Decrypt
        </Button>
        <Button onClick={() => handlePageClick('password-vault')}>
          <MdPassword />
          Password Vault
        </Button>
      </Buttons>
    </Container>
  )
}

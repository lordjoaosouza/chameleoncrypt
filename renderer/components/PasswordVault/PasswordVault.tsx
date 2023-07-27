import PasswordGenerator from '../PasswordGenerator/PasswordGenerator'
import { Container, ComingSoon, Icon, Text } from './style'

export default function PasswordVault() {
  return (
    <Container>
      <PasswordGenerator />
      <ComingSoon>
        <Icon />
        <Text>Password vault coming soon!</Text>
      </ComingSoon>
    </Container>
  )
}

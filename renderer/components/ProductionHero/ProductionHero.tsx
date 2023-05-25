import { Container, Info, InfoContainer, Image } from './style'

export default function ProductionHero() {
  return (
    <Container>
      <InfoContainer>
        <Info>Página em produção!</Info>
        <Image src='production.svg' alt='production' />
      </InfoContainer>
    </Container>
  )
}

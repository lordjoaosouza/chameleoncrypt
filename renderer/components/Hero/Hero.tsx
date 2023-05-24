import {
  Container,
  Info,
  InfoContainer,
  Image,
  UpdatesContainer,
  UpdatesTitle,
  UpdatesInfoContainer,
  UpdatesInfo,
  UpdatesTitleContainer,
} from './style'
import updatesInfos from '../../data/updates.json'

export default function Hero() {
  return (
    <Container>
      <InfoContainer>
        <Info>Comece a proteger suas informações!</Info>
        <Image src='illustration.svg' alt='illustration' />
      </InfoContainer>
      <UpdatesContainer>
        <UpdatesTitleContainer>
          <UpdatesTitle>Últimas atualizações</UpdatesTitle>
        </UpdatesTitleContainer>
        <UpdatesInfoContainer>
          {updatesInfos.map((update, index) => (
            <UpdatesInfo key={index}>
              {update.date} - {update.action}
            </UpdatesInfo>
          ))}
        </UpdatesInfoContainer>
      </UpdatesContainer>
    </Container>
  )
}

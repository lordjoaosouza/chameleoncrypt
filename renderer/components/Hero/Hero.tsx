import {
  Container,
  Info,
  InfoContainer,
  Image,
  UpdatesContainer,
  UpdatesTitle,
  UpdatesInfoContainer,
  UpdatesInfo,
  UptatesTitleContainer,
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
        <UptatesTitleContainer>
          <UpdatesTitle>Últimas atualizações</UpdatesTitle>
        </UptatesTitleContainer>
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

import React, { useState, useEffect } from 'react'
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
// import { checkLogs } from '../../scripts/insert-log'

export default function Hero() {
  const [updatesTitle, setUpdatesTitle] = useState('Últimas atualizações:')
  const [emptyUpdates, setEmptyUpdates] = useState(false)
  const [updatesInfos, setUpdatesInfos] = useState([])

  useEffect(() => {
    // const logs = checkLogs()
    const logs = []  // remove later
    setUpdatesInfos(logs)

    if (logs.length === 0) {
      setUpdatesTitle('Nenhuma atualização!')
      setEmptyUpdates(true)
    }
  }, [])

  return (
    <Container>
      <InfoContainer>
        <Info>Comece a proteger suas informações!</Info>
        <Image src='hero.svg' alt='hero' />
      </InfoContainer>
      <UpdatesContainer>
        <UpdatesTitleContainer>
          <UpdatesTitle>{updatesTitle}</UpdatesTitle>
        </UpdatesTitleContainer>
        {!emptyUpdates && (
          <UpdatesInfoContainer>
            {updatesInfos.map((update, index) => (
              <UpdatesInfo key={index}>
                {update.date}, {update.time} - {update.message}
              </UpdatesInfo>
            ))}
          </UpdatesInfoContainer>
        )}
      </UpdatesContainer>
    </Container>
  )
}

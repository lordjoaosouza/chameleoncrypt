import { Container, SelectContainer, Title, SelectTitle, Path, PathContainer } from './style'
import { AiOutlineArrowDown } from 'react-icons/ai'
import React, { useState } from 'react'

interface InputPathProps {
  onPathChange: (path: string) => void
}

export default function InputPath({ onPathChange }: InputPathProps) {
  const [, setPath] = useState('')

  const handlePathChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPath(e.target.value)
    onPathChange(e.target.value)
  }

  return (
    <Container>
      <Title>Seus arquivos:</Title>
      <SelectContainer>
        <SelectTitle>
          Digite o path da pasta ou arquivo <AiOutlineArrowDown />
        </SelectTitle>
        <PathContainer>
          <Path onChange={handlePathChange} />
        </PathContainer>
      </SelectContainer>
    </Container>
  )
}

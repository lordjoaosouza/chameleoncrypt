import { Container, SelectContainer, Title, SelectTitle, Path, PathContainer } from './style'
import { AiOutlineArrowDown } from 'react-icons/ai'
import React, { useState } from 'react'

interface InputPathProps {
  buttonText: string
  onPathChange: (path: string) => void
}

export default function InputPath({ buttonText, onPathChange }: InputPathProps) {
  const [path, setPath] = useState('')

  const handlePathChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPath(e.target.value)
    onPathChange(e.target.value)
  }

  return (
    <Container>
      <Title>Choose what to {buttonText.toLowerCase()}</Title>
      <SelectContainer>
        <SelectTitle>
          File or folder:
          <AiOutlineArrowDown />
        </SelectTitle>
        <PathContainer>
          <Path
            placeholder={'E.g.: /home/user/Downloads'}
            value={path}
            onChange={handlePathChange}
          />
        </PathContainer>
      </SelectContainer>
    </Container>
  )
}

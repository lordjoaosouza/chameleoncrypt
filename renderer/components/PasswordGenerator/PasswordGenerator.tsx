import React, { useState, useEffect } from 'react'
import {
  Title,
  Container,
  PasswordContainer,
  Password,
  CopyIcon,
  Button,
  OptionsContainer,
  SliderContainer,
  SliderStyled,
  SliderValue,
  ParamertersContainer,
  ParameterContainer,
  ParameterLabel,
  Parameter,
} from './style'
import { IoCopy } from 'react-icons/io5'
import generatePassword from '../../scripts/password-generator'

export default function PasswordGenerator() {
  const [sliderValue, setSliderValue] = useState(64)
  const [useUppercase, setUseUppercase] = useState(true)
  const [useLowercase, setUseLowercase] = useState(true)
  const [useNumbers, setUseNumbers] = useState(true)
  const [useSpecial, setUseSpecial] = useState(true)
  const [password, setPassword] = useState('')

  useEffect(() => {
    setPassword(generatePassword(sliderValue, useUppercase, useLowercase, useNumbers, useSpecial))
  }, [sliderValue, useUppercase, useLowercase, useNumbers, useSpecial])

  const generateNewPassword = () => {
    setPassword(generatePassword(sliderValue, useUppercase, useLowercase, useNumbers, useSpecial))
  }

  const handleSliderChange = (event: { target: { value: string } }) => {
    setSliderValue(parseInt(event.target.value))
  }

  const handleUppercaseChange = () => {
    if (useLowercase || useNumbers || useSpecial) {
      setUseUppercase(!useUppercase)
    } else {
      setUseUppercase(true)
    }
  }

  const handleLowercaseChange = () => {
    if (useUppercase || useNumbers || useSpecial) {
      setUseLowercase(!useLowercase)
    } else {
      setUseLowercase(true)
    }
  }

  const handleNumbersChange = () => {
    if (useUppercase || useLowercase || useSpecial) {
      setUseNumbers(!useNumbers)
    } else {
      setUseNumbers(true)
    }
  }

  const handleSpecialChange = () => {
    if (useUppercase || useLowercase || useNumbers) {
      setUseSpecial(!useSpecial)
    } else {
      setUseSpecial(true)
    }
  }

  const copyPassword = () => {
    navigator.clipboard.writeText(password)
  }

  return (
    <Container>
      <Title>Gerador de senhas</Title>
      <PasswordContainer>
        <Password>{password}</Password>
        <CopyIcon onClick={copyPassword}>
          <IoCopy />
        </CopyIcon>
      </PasswordContainer>
      <Button onClick={generateNewPassword}>Gerar nova senha</Button>

      <OptionsContainer>
        <SliderContainer>
          <SliderStyled min={8} max={256} value={sliderValue} onChange={handleSliderChange} />
          <SliderValue>{sliderValue} caracteres</SliderValue>
        </SliderContainer>
        <ParamertersContainer>
          <ParameterContainer>
            <ParameterLabel>Maiúsculas</ParameterLabel>
            <Parameter checked={useUppercase} onChange={handleUppercaseChange} />
          </ParameterContainer>
          <ParameterContainer>
            <ParameterLabel>Minúsculas</ParameterLabel>
            <Parameter checked={useLowercase} onChange={handleLowercaseChange} />
          </ParameterContainer>
          <ParameterContainer>
            <ParameterLabel>Números</ParameterLabel>
            <Parameter checked={useNumbers} onChange={handleNumbersChange} />
          </ParameterContainer>
          <ParameterContainer>
            <ParameterLabel>Especiais</ParameterLabel>
            <Parameter checked={useSpecial} onChange={handleSpecialChange} />
          </ParameterContainer>
        </ParamertersContainer>
      </OptionsContainer>
    </Container>
  )
}

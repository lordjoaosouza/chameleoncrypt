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
  ParameterError,
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
  const [error, setError] = useState(false)

  useEffect(() => {
    setPassword(generatePassword(sliderValue, useUppercase, useLowercase, useNumbers, useSpecial))
  }, [sliderValue, useUppercase, useLowercase, useNumbers, useSpecial])

  const generateNewPassword = () => {
    setPassword(generatePassword(sliderValue, useUppercase, useLowercase, useNumbers, useSpecial))
  }

  const handleSliderChange = (event) => {
    setSliderValue(parseInt(event.target.value))
  }

  const handleUppercaseChange = () => {
    if (useLowercase || useNumbers || useSpecial) {
      setUseUppercase(!useUppercase)
      setError(false)
    } else {
      setUseUppercase(true)
      setError(true)
    }
  }

  const handleLowercaseChange = () => {
    if (useUppercase || useNumbers || useSpecial) {
      setUseLowercase(!useLowercase)
      setError(false)
    } else {
      setUseLowercase(true)
      setError(true)
    }
  }

  const handleNumbersChange = () => {
    if (useUppercase || useLowercase || useSpecial) {
      setUseNumbers(!useNumbers)
      setError(false)
    } else {
      setUseNumbers(true)
      setError(true)
    }
  }

  const handleSpecialChange = () => {
    if (useUppercase || useLowercase || useNumbers) {
      setUseSpecial(!useSpecial)
      setError(false)
    } else {
      setUseSpecial(true)
      setError(true)
    }
  }

  const copyPassword = () => {
    navigator.clipboard.writeText(password)
  }

  return (
    <Container>
      <Title>Password generator</Title>
      <PasswordContainer>
        <Password>{password}</Password>
        <CopyIcon onClick={copyPassword}>
          <IoCopy />
        </CopyIcon>
      </PasswordContainer>
      <Button onClick={generateNewPassword}>Generate new password</Button>

      <OptionsContainer>
        <SliderContainer>
          <SliderStyled min={8} max={256} value={sliderValue} onChange={handleSliderChange} />
          <SliderValue>{sliderValue} characters</SliderValue>
        </SliderContainer>
        <ParamertersContainer>
          <ParameterContainer>
            <ParameterLabel>Uppers</ParameterLabel>
            <Parameter checked={useUppercase} onChange={handleUppercaseChange} />
          </ParameterContainer>
          <ParameterContainer>
            <ParameterLabel>Lowers</ParameterLabel>
            <Parameter checked={useLowercase} onChange={handleLowercaseChange} />
          </ParameterContainer>
          <ParameterContainer>
            <ParameterLabel>Numbers</ParameterLabel>
            <Parameter checked={useNumbers} onChange={handleNumbersChange} />
          </ParameterContainer>
          <ParameterContainer>
            <ParameterLabel>Specials</ParameterLabel>
            <Parameter checked={useSpecial} onChange={handleSpecialChange} />
          </ParameterContainer>
        </ParamertersContainer>
        {error && <ParameterError>At least one parameter must be selected!</ParameterError>}
      </OptionsContainer>
    </Container>
  )
}

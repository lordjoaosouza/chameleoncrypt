import styled from 'styled-components'
import { Slider, Switch } from '@mui/material'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2d033b;
  padding: 2rem;
  gap: 1rem;
  width: 25rem;
  height: 25rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    scale: 1.05;
    transition: 0.25s;
  }
`

export const Title = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 1.5rem;
  font-weight: lighter;
  margin-bottom: 1rem;

  &:hover {
    scale: 1.05;
    transition: 0.25s;
  }
`

export const PasswordContainer = styled.div`
  display: flex;
  color: #fff;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    scale: 1.05;
    transition: 0.25s;
  }
`

export const Password = styled.p`
  text-align: center;
  color: #fff;
  font-size: 0.8rem;
  max-width: 15rem;
  font-weight: lighter;
  overflow: auto;
  padding: 0.25rem;
  user-select: text;

  &::-webkit-scrollbar {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #810ca8;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #aa10de;
  }
  &::-webkit-scrollbar-track {
    background-color: #1e0127;
  }
`

export const CopyIcon = styled.a`
  cursor: pointer;

  &:hover {
    scale: 1.05;
    transition: 0.25s;
  }
`

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-decoration: none;
  font-size: 0.8rem;
  border-radius: 0.25rem;
  background-color: #810ca8;
  width: 9rem;
  height: 2rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: #aa10de;
    scale: 1.05;
    transition: 0.25s;
    transform-origin: center;
  }
`

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`

export const SliderContainer = styled.div`
  width: 13.5rem;
  display: flex;
  flex-direction: column;

  &:hover {
    scale: 1.05;
    transition: 0.25s;
  }
`

export const SliderStyled = styled(Slider)`
  & .MuiSlider-track {
    color: #810ca8;
    height: 6px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  & .MuiSlider-rail {
    color: #810ca8;
    height: 6px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  & .MuiSlider-thumb {
    color: #810ca8;
    width: 15px;
    height: 15px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

    &:hover,
    &:focus,
    &:active {
      box-shadow: none;
      color: #aa10de;
    }
  }
`

export const SliderValue = styled.div`
  text-align: center;
  color: #fff;
  font-size: 0.8rem;
`

export const ParamertersContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 1rem;
`

export const ParameterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;

  &:hover {
    scale: 1.05;
    transition: 0.25s;
  }
`

export const ParameterLabel = styled.p`
  text-align: center;
  color: #fff;
  font-size: 0.7rem;
`

export const Parameter = styled(Switch)`
  & .MuiSwitch-thumb {
    color: #810ca8 !important;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1) !important;
  }

  & .MuiSwitch-track {
    background-color: #aa10de !important;
  }

  & .MuiSwitch-input:checked + .MuiSwitch-thumb {
    color: #aa10de !important;
  }
`

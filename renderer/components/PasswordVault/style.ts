import styled from 'styled-components'
import { RxUpdate } from 'react-icons/rx'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5rem;
  gap: 2rem;
`

export const ComingSoon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  gap: 0.5rem;
  color: white;
`

export const Icon = styled(RxUpdate)`
  font-size: 0.8rem;
`

export const Text = styled.h1`
  font-size: 0.8rem;
  font-weight: normal;
`

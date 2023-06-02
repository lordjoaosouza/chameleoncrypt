import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5rem 2rem;
  color: #fff;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Info = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;

  &:hover {
    scale: 1.05;
    transition: 0.25s;
  }
`

export const Image = styled.img`
  width: 25rem;
  height: 25rem;

  &:hover {
    scale: 1.05;
    transition: 0.25s;
  }
`

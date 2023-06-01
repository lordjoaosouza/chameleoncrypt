import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  width: 28rem;
  height: 20rem;
  background-color: #2d033b;
  border-radius: 0.25rem;
  &:hover {
    scale: 1.05;
    transition: 0.25s;
  }
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`

export const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: lighter;
  margin-bottom: 0.6rem;
  &:hover {
    scale: 1.05;
    transition: 0.25s;
  }
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SelectTitle = styled.p`
  display: flex;
  font-size: 0.8rem;
  font-weight: lighter;
  margin-bottom: 0.6rem;
  align-items: center;
  gap: 0.25rem;
  &:hover {
    scale: 1.05;
    transition: 0.25s;
  }
`

export const PathContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #810ca8;
  border-radius: 0.25rem;
  width: 20rem;
  height: 2.5rem;
  padding: 1rem;

  &:hover {
    border: 1px solid #ad10e2;
  }

  &:focus {
    border: 1px solid #ad10e2;
  }

  &:hover {
    scale: 1.05;
    transition: 0.25s;
  }
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`

export const Path = styled.input`
  border: none;
  font-size: 0.8rem;
  font-weight: lighter;
  background-color: #2d033b;
  outline: none;
  color: #fff;
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 1rem;

  &::placeholder {
    color: #452c5a;
  }

  &:hover {
    scale: 1.05;
    transition: 0.25s;
  }
`

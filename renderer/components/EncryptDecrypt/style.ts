import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  margin: 5rem 2rem;
  color: #fff;
`

export const KeyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const PasswordTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: lighter;
  max-width: 18rem;
  text-align: center;

  &:hover {
    scale: 1.05;
    transition: 0.25s;
  }
`

export const PasswordContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #810ca8;
  border-radius: 0.25rem;
  width: 18rem;
  height: 2.5rem;
  padding: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

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
`

export const Password = styled.input`
  border: none;
  font-size: 0.8rem;
  font-weight: lighter;
  background-color: #240330;
  outline: none;
  color: #fff;
  text-align: center;
  width: 78%;
  height: 100%;
  padding: 1rem;

  &::placeholder {
    color: #39244a;
  }

  &:hover {
    scale: 1.05;
    transition: 0.25s;
  }
`

export const ShowPassword = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  color: #fff;
  text-decoration: none;
  font-size: 0.8rem;
  border-radius: 0.25rem;
  background-color: #810ca8;
  width: 2.5rem;
  height: 2rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: #aa10de;
    scale: 1.05;
    transition: 0.25s;
  }
`

export const EncryptDecryptButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  color: #fff;
  text-decoration: none;
  font-size: 0.8rem;
  border-radius: 0.25rem;
  background-color: #810ca8;
  width: 18rem;
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

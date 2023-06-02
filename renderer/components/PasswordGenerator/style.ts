import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2d033b;
  padding: 2rem;
  gap: 1rem;
  width: 25rem;

  &:hover {
    scale: 1.05;
    transition: 0.25s;
  }
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`

export const Password = styled.p`
  text-align: center;
  color: #fff;
  font-size: 0.8rem;
  max-width: 15rem;
  font-weight: lighter;
  &:hover {
    scale: 1.05;
    transition: 0.25s;
  }

  overflow: auto;
  padding: 0.25rem;

  &::-webkit-scrollbar {
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

  --webkit-user-select: text;
  --ms-user-select: text;
  user-select: text;
`

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  color: #fff;
  text-decoration: none;
  font-size: 0.8rem;
  border-radius: 0.25rem;
  background-color: #810ca8;
  width: 9rem;
  height: 2rem;
  &:hover {
    background-color: #aa10de;
    scale: 1.05;
    transition: 0.25s;
    transform-origin: center;
  }
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`

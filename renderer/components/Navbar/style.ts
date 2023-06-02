import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  background-color: #1e0127;
  padding: 0 2rem;
`

export const Logo = styled.img`
  width: 4rem;
  height: 4rem;
  cursor: pointer;

  &:hover {
    scale: 1.05;
    transition: 0.25s;
  }
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
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
  width: 8.5rem;
  height: 2.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: #aa10de;
    scale: 1.05;
    transition: 0.25s;
  }
`

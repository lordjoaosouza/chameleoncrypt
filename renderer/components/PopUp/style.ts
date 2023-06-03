import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PopUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: #250331;
  padding: 3rem 6rem;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    scale: 1.05;
    transition: 0.25s;
  }
`

export const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: lighter;
  margin-bottom: 0.6rem;

  &:hover {
    scale: 1.05;
    transition: 0.25s;
  }
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
  width: 5rem;
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

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;
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
  width: 18rem;
  height: 18rem;
  margin-top: 4rem;

  &:hover {
    scale: 1.05;
    transition: 0.25s;
  }
`

export const UpdatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2d033b;
  width: 25rem;
  height: 15rem;
  overflow: auto;
  position: relative;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    scale: 1.05;
    transition: 0.25s;
  }
`

export const UpdatesTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5rem;
  background-color: #2d033b;
`

export const UpdatesTitle = styled.h2`
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    scale: 1.05;
    transition: 0.25s;
  }
`

export const UpdatesInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 0.25rem;
  margin-bottom: 1.5rem;
  overflow: auto;
  padding: 0 1rem;

  &::-webkit-scrollbar {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    width: 6px;
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

export const UpdatesInfo = styled.p`
  font-size: 0.7rem;
  font-weight: normal;

  &:hover {
    scale: 1.05;
    transition: 0.25s;
    transform-origin: left;
  }
`

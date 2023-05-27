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
  width: 20rem;
  height: 20rem;
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
  background-color: #2d033b;
  width: 25rem;
  height: 15rem;
  overflow: auto;
  &::-webkit-scrollbar {
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

  &:hover {
    scale: 1.05;
    transition: 0.25s;
  }
  position: relative;
`

export const UpdatesTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  padding: 1.5rem;
  top: 0;
  width: 100%;
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
`

export const UpdatesInfo = styled.p`
  font-size: 0.7rem;
  font-weight: normal;
`

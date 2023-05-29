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

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SelectTitle = styled.p`
  font-size: 0.8rem;
  font-weight: lighter;
  margin-bottom: 0.6rem;
  &:hover {
    scale: 1.05;
    transition: 0.25s;
  }
`

export const SelectButton = styled.a`
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
  &:hover {
    background-color: #aa10de;
    scale: 1.05;
    transition: 0.25s;
  }
`

export const SelectedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  font-weight: lighter;
  gap: 0.5rem;
`

export const SelectedTitle = styled.p`
  font-size: 0.6rem;
  &:hover {
    scale: 1.05;
    transition: 0.25s;
  }
`
export const FilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: top;
  gap: 0.25rem;
  width: 20rem;
  height: 5rem;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 6px;
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

export const File = styled.li`
  font-size: 0.5rem;
  &:hover {
    scale: 1.05;
    transition: 0.25s;
    transform-origin: left;
  }
`

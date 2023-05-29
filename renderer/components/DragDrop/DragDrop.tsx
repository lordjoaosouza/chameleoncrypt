import React, { useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import {
  Container,
  SelectContainer,
  SelectedContainer,
  FilesContainer,
  File,
  Title,
  SelectTitle,
  SelectButton,
  SelectedTitle,
} from './style'
import { BsFileArrowUpFill } from 'react-icons/bs'

export default function DragDrop() {
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    noClick: true,
    noKeyboard: true,
  })

  const [hasFiles, setHasFiles] = useState(false)

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      setHasFiles(true)
    } else {
      setHasFiles(false)
    }
  }, [acceptedFiles])

  const files = acceptedFiles.map((file) => (
    <File key={file.name}>
      {file.name} - {file.size} bytes
    </File>
  ))

  return (
    <Container>
      <Title>Seus arquivos:</Title>
      <SelectContainer {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <SelectTitle>Solte e arraste ou</SelectTitle>
        <SelectButton onClick={open}>
          <BsFileArrowUpFill /> Selecione
        </SelectButton>
      </SelectContainer>

      {hasFiles && (
        <SelectedContainer>
          <SelectedTitle>Arquivo(s) selecionado(s):</SelectedTitle>
          <FilesContainer>{files}</FilesContainer>
        </SelectedContainer>
      )}
    </Container>
  )
}

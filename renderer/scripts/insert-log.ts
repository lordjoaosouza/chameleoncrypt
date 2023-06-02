import fs from 'fs'
import path from 'path'

interface Log {
  date: string
  time: string
  message: string
}

const logPath = ''
const updatesFilePath = path.join(logPath, 'updates.json')

export function checkLogs(): Log[] {
  if (!fs.existsSync(logPath)) {
    fs.mkdirSync(logPath)
    fs.writeFileSync(updatesFilePath, '[]')
  }

  const logs = fs.readFileSync(updatesFilePath, 'utf-8')
  return JSON.parse(logs) as Log[]
}

export default function insertLog(message: string) {
  const log: Log = {
    date: new Date().toLocaleDateString('pt-BR'),
    time: new Date().toLocaleTimeString('pt-BR').replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, '$1$3'),
    message,
  }

  const logs = checkLogs()
  logs.push(log)
  fs.writeFileSync(updatesFilePath, JSON.stringify(logs))
}

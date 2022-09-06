import { WebSocketServer } from 'ws'

const PORT = 8080

const start = () => {
  const wss = new WebSocketServer({
    port: PORT
  })

  wss.on('connection', ws => {
    ws.on('message', data => {
      console.log(`received data: ${data}`)
    })
  })
}

start()
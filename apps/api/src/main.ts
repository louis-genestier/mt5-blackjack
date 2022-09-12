import express from 'express'
import { Server } from 'socket.io'
import * as http from 'http'

const PORT = 8080

const app = express()
const server = http.createServer(app)
const io = new Server(server)

io.on('connection', () => {
  console.log('a user connected')
})

server.listen(PORT, () => console.log(`Server listening on *:${PORT}`))

export type RoomStatus = "waiting" | "playing" | "finished"

export interface User {
  username: string
}

export interface Room {
  users: User[],
  status: RoomStatus
}
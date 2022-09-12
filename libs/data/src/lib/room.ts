import { User } from "./player"

export type RoomStatus = "waiting" | "playing" | "finished"

export interface Room {
    users: User[],
    status: RoomStatus
}
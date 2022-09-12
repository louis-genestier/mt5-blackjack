import { User } from "./player"
import { Room } from "./room"

export type PayloadAction = "join" | "start"

interface BasePayload {
  action: PayloadAction,
  room: Room
}

export interface JoinPayload extends BasePayload {
  user: User
}
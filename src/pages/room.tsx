import { Navigate, useParams } from 'react-router-dom'

type RoomParams = {
  roomId: string
}

export const Room = () => {
  const { roomId } = useParams() as RoomParams

  // biome-ignore lint/suspicious/noConsole: only dev
  console.log({ roomId })

  if (!roomId) {
    return <Navigate replace to="/" />
  }

  return <div>Room Details {roomId}</div>
}

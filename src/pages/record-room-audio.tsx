import { useRef, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const isRecordingSupported =
  !!navigator.mediaDevices &&
  typeof navigator.mediaDevices.getUserMedia === 'function' &&
  typeof window.MediaRecorder === 'function'

type RoomParams = {
  roomId: string
}

export const RecordRoomAudio = () => {
  const params = useParams<RoomParams>()
  const [isRecording, setIsRecording] = useState(false)
  const recorder = useRef<MediaRecorder | null>(null)

  const startRecording = async () => {
    if (!isRecordingSupported) {
      return
    }
    setIsRecording(true)

    const audio = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44_100,
      },
    })

    recorder.current = new MediaRecorder(audio, {
      mimeType: 'audio/webm',
      audioBitsPerSecond: 64_000,
    })

    recorder.current.ondataavailable = (e) => {
      if (e.data.size > 0) {
        uploadAudio(e.data)
      }
    }

    recorder.current.onstart = () => {
      // biome-ignore lint/suspicious/noConsole: only dev
      console.log('Gravação iniciada')
    }

    recorder.current.onstop = () => {
      // biome-ignore lint/suspicious/noConsole: only dev
      console.log('Gravação Encerrada/Pausada')
    }

    recorder.current.start()
  }

  const stopRecording = () => {
    setIsRecording(false)

    if (recorder.current && recorder.current.state !== 'inactive') {
      recorder.current.stop()
    }
  }

  const uploadAudio = async (audio: Blob) => {
    const formData = new FormData()

    formData.append('file', audio, 'audio.webm')

    const response = await fetch(`http://localhost:3333/rooms/${params.roomId}/audio`, {
      method: 'POST',
      body: formData
    })

    const result = await response.json()

    return result
  }

  if (!params.roomId) {
    return <Navigate replace to="/" />
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-3 ">
      {isRecording ? (
        <div className="flex flex-col items-center gap-2">
          <Button onClick={stopRecording}>Pausar Audio</Button>
          <p>Gravando...</p>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <Button onClick={startRecording}>Gravar Audio</Button>
          <p>Pausado...</p>
        </div>
      )}
    </div>
  )
}

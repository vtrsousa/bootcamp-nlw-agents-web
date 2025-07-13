import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { CreateQuestionResponse } from './types/create-question-response'
import type { CreateQuestionRequest } from './types/create-question-resquest'

export const useCreateQustion = (roomId: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: CreateQuestionRequest) => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`,
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      )

      const result: CreateQuestionResponse = await response.json()

      return result
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-rooms', roomId] })
    },
  })
}

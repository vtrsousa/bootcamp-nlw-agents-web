import { useRoomQuestions } from "@/http/use-room-question"
import { QuestionItem } from "./question-item"

interface QuestionListProps {
  roomId: string
}

export const QuestionList = (props: QuestionListProps) => {

  const { data } = useRoomQuestions(props.roomId)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-2xl text-foreground">
          Perguntas & Respostas
        </h2>
      </div>

      {data?.map(q => {
        return (
          <QuestionItem
            key={q.id}
            question={q}
          />
        )
      })}
    </div>
  )
}
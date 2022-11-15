import { FormEvent, useState } from "react"
import { v4 } from 'uuid'
import { useAppDispatch } from "../../redux/hook"
import { add_task } from "../../redux/slices/tasks"
import {
  Button,
  Form,
  InputText,
  Textarea,
  Title
} from "./styles"

export const FormTask: React.FC = () => {
  const [task, setTask] = useState({
    id: '',
    title: '',
    description: '',
    completed: false,
  })
  const DISPATCH = useAppDispatch()

  const HANDLE_CHANGED = (e: FormEvent) => {
    setTask({
      ...task,
      id: v4(),
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value
    })
  }

  const HANDLE_SUBMIT = (e: FormEvent) => {
    e.preventDefault()

    DISPATCH(add_task(task))

    setTask({
      id: '',
      title: '',
      description: '',
      completed: false,
    })
  }

  return (
    <>
      <Title>Formulario</Title>
      <Form onSubmit={HANDLE_SUBMIT}>
        <InputText
          onChange={HANDLE_CHANGED}
          name="title"
          type="text"
          placeholder="Title of the Task"
          required
          value={task.title}
        />
        <Textarea
          onChange={HANDLE_CHANGED}
          name="description"
          cols={30}
          rows={10}
          placeholder="Description of the Task"
          required
          value={task.description}
        />
        <Button type="submit">Crear</Button>
      </Form>
    </>
  )
}

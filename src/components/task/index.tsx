import { FormEvent, useState } from "react";
import { TTask } from "../../assets/types";
import { useAppDispatch } from "../../redux/hook";
import { edit_task, remove_task } from "../../redux/slices/tasks";

import {
  Button,
  ButtonForm,
  ContainerButton,
  Description,
  Form,
  InputText,
  Li,
  Textarea,
  Title,
  Back
} from "./styles";

export const Task: React.FC<TTask> = ({
  id,
  title,
  description,
  completed
}) => {
  const [viewEdit, setViewEdit] = useState(false)

  const [task, setTask] = useState({
    id,
    title,
    description,
    completed,
  })
  const DISPATCH = useAppDispatch()

  const HANDLE_CHANGED = (e: FormEvent) => {
    setTask({
      ...task,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value
    })
  }

  const HANDLE_SUBMIT = (e: FormEvent) => {
    e.preventDefault()

    DISPATCH(edit_task(task))

    setViewEdit(false)
  }

  return (
    <Li isCompleted={task.completed}>
      {viewEdit ? (
        <>
          <Back
            aria-label="Back, Task"
            onClick={() => setViewEdit(false)}
          >Volver</Back>
          <Form onSubmit={HANDLE_SUBMIT}>
            <InputText
              onChange={HANDLE_CHANGED}
              name="title"
              type="text"
              placeholder={task.title}
            />
            <Textarea
              onChange={HANDLE_CHANGED}
              name="description"
              cols={20}
              rows={5}
              placeholder={task.description}
              />
            <ButtonForm type="submit">Confirmar</ButtonForm>
          </Form>
        </>
      ): (
        <>
          <Title>{task.title}</Title>
          <Description>{task.description}</Description>
          <ContainerButton>
            <Button
              isEdit
              aria-label="Edit Task"
              onClick={() => setViewEdit(true)}
            >Editar</Button>
            <Button aria-label="Remove Task" onClick={() => DISPATCH(remove_task(task.id))}>Borrar</Button>
          </ContainerButton>
        </>
      )}
    </Li>
  )
}

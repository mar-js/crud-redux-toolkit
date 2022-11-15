import { useAppSelector } from "../../redux/hook"

import { Task } from "../task"

import { TasksContainer, Title } from "./styles"

export const Tasks: React.FC = () => {
  const TASKS = useAppSelector(state => state.tasks)

  return (
    <>
      {TASKS.length > 0 && (
        <>
        <Title>Tareas</Title>
        <TasksContainer>
          {TASKS.map(({id, title, description, completed}) => (
            <Task
              key={id}
              id={id}
              title={title}
              description={description}
              completed={completed}
            />
          ))}
        </TasksContainer>
        </>
      )}
    </>
  )
}

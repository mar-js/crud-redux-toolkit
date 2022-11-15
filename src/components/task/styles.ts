import styled from 'styled-components'

export const Li = styled.li<{ isCompleted: boolean }>`
  min-width: 30rem;
  list-style: none;
  padding: 1rem 2rem;
  background-color: ${({ isCompleted }) => isCompleted ? '#5fd757' : '#ffffff'};
  color: ${({ isCompleted }) => isCompleted ? '#ffffff' : '#333333'};
  margin: 2rem;
  border-radius: 1rem;
  border: .1rem solid var(--color-black-opacity);
`

export const Back = styled.button`
  cursor: pointer;
  padding: .5rem 1rem;
  background-color: var(--color-black);
  color: var(--color-white);
  outline: none;
  border: none;
  border: .5rem;
  margin-bottom: 1rem;
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const InputText = styled.input`
  width: 100%;
  padding: 1rem 2rem;
  margin-bottom: .5rem;
  border-radius: 1rem;
  border: .1rem solid var(--color-black-opacity);
`

export const Textarea = styled.textarea`
  width: 100%;
  padding: 1rem 2rem;
  margin-bottom: .5rem;
  border-radius: 1rem;
  border: .1rem solid var(--color-black-opacity);
`

export const ButtonForm = styled.button`
  cursor: pointer;
  width: 100%;
  font-weight: var(500);
  border-radius: 1rem;
  padding: .5rem 1rem;
  background-color: var(--color-orange);
  color: var(--color-white);
  border: none;


  &:hover {
    outline: .1rem solid var(--color-orange);
    background-color: var(--color-white);
    color: var(--color-orange);
  }
`

export const Title = styled.h3`
  font-size: 2rem;
  text-transform: uppercase;
`

export const Description = styled.p`
  font-size: 1.5rem;
`

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5rem 0;
`

export const Button = styled.button<{ isEdit?: boolean }>`
  cursor: pointer;
  background-color: var(--color-white);
  border: .1rem solid var(--color-white);
  outline: none;
  color: ${({ isEdit }) => isEdit ? '#5fd757' : '#ff4242'};
  padding: .5rem 1rem;

  &:hover {
    background-color: var(--color-black-opacity);
    color: var(--color-white);
  }
`

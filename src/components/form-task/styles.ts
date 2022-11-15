import styled from 'styled-components'

export const Title = styled.h2`
  font-size: 2.5rem;
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 3rem;
`

export const InputText = styled.input`
  min-width: 30rem;
  padding: 1rem 2rem;
  margin-bottom: .5rem;
  border-radius: 1rem;
  border: .1rem solid var(--color-black-opacity);
`

export const Textarea = styled.textarea`
  min-width: 30rem;
  padding: 1rem 2rem;
  margin-bottom: .5rem;
  border-radius: 1rem;
  border: .1rem solid var(--color-black-opacity);
`

export const Button = styled.button`
  cursor: pointer;
  padding: .5rem 1rem;
  outline: none;
  border: none;
  background-color: var(--color-black);
  color: var(--color-white);
  font-size: 1.5rem;
  text-transform: uppercase;

  &:hover {
    filter: invert(100);
  }
`

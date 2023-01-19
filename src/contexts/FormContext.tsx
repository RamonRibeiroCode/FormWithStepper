import type { Dispatch, ReactNode, SetStateAction } from 'react'
import { createContext, useState, useContext } from 'react'

interface FormContextValue {
  name: string
  setName: Dispatch<SetStateAction<string>>
  lastName: string
  setLastName: Dispatch<SetStateAction<string>>
}

interface FormProviderProps {
  children: ReactNode
}

const FormContext = createContext<FormContextValue>({} as FormContextValue)

export const FormProvider = ({ children }: FormProviderProps) => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')

  return (
    <FormContext.Provider value={{ name, setName, lastName, setLastName }}>
      {children}
    </FormContext.Provider>
  )
}

export const useForm = () => {
  const context = useContext(FormContext)

  if (!context) {
    throw new Error('useForm must be used within a FormProvider')
  }

  return context
}

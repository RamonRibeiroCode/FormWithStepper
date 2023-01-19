import { useForm } from '../contexts/FormContext'
import { useStepper } from '../contexts/StepperContext'

function LastStep() {
  const { goToPreviousStep } = useStepper()
  const { name, lastName } = useForm()

  return (
    <div>
      <h1>
        {name} {lastName}
      </h1>
      <button onClick={goToPreviousStep}>Back</button>
    </div>
  )
}

export default LastStep

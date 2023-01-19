import { useForm } from '../contexts/FormContext'
import { useStepper } from '../contexts/StepperContext'

function SecondStep() {
  const { step, goToPreviousStep, goToNextStep } = useStepper()
  const { lastName, setLastName } = useForm()

  return (
    <div>
      <h1>{step + 1}</h1>

      <div>
        <button onClick={goToPreviousStep}>Back</button>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
        />

        <button onClick={goToNextStep}>Next</button>
      </div>
    </div>
  )
}

export default SecondStep

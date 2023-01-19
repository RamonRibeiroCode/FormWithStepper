import { useForm } from '../contexts/FormContext'
import { useStepper } from '../contexts/StepperContext'

function FirstStep() {
  const { step, goToNextStep } = useStepper()
  const { name, setName, setLastName } = useForm()

  const handleFirstStep = () => {
    // Fetch any data which do you want, and set to the form which is in the next step

    if (name === 'Rogerin') {
      setLastName('Vieira')
    } else {
      setLastName('Anonimo')
    }

    goToNextStep()
  }

  return (
    <div>
      <h1>{step + 1}</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />

      <button onClick={handleFirstStep}>Next</button>
    </div>
  )
}

export default FirstStep

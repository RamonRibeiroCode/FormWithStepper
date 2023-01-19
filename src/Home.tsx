import FirstStep from './components/FirstStep'
import LastStep from './components/LastStep'
import SecondStep from './components/SecondStep'
import Stepper from './components/Stepper'
import { FormProvider } from './contexts/FormContext'
import { StepperProvider } from './contexts/StepperContext'

function Home() {
  return (
    <FormProvider>
      <StepperProvider>
        <Stepper>
          <FirstStep />
          <SecondStep />
          <LastStep />
        </Stepper>
      </StepperProvider>
    </FormProvider>
  )
}

export default Home

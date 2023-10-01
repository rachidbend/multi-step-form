import './App.css';
import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import { BrowserRouter } from 'react-router-dom';

import ThankYou from './components/thank-you/ThankYou';
import PersonalInfoForm from './components/parsonal-info/PersonalInfoForm';
import SelectPlanForm from './components/select-plan/SelectPlanForm';
import PickAddOnsForm from './components/pick-add-ons/PickAddOnsForm';
import Summary from './components/summary/Summary';
import { FormProvider } from './context/FormContext';

function App() {
  return (
    <FormProvider>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<HomePage />}>
            <Route path="info" element={<PersonalInfoForm />} />
            <Route path="plan" element={<SelectPlanForm />} />
            <Route path="add-ons" element={<PickAddOnsForm />} />
            <Route path="summary" element={<Summary />} />
            <Route path="thank-you" element={<ThankYou />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FormProvider>
  );
}

export default App;

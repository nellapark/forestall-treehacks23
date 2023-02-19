import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Landing from './components/landing.js'
import Patients from './components/patients.js'
import SinglePatient from './components/singlepatient.js'
import Practitioners from './components/practitioners.js'
import Notes from './components/notes.js'
import Mistakes from './components/mistakes.js'
import Report from './components/report.js'
import Analytics from './components/analytics.js'

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<Landing />} />
    <Route path="patients" element={<Patients />} />
    <Route path="patients/:patient_id" element={<SinglePatient />} />
    <Route path="practitioners" element={<Practitioners />} />
    <Route path="notes" element={<Notes />} />
    <Route path="mistakes" element={<Mistakes />} />
    <Route path="report" element={<Report />} />
    <Route path="analytics" element={<Analytics />} />
  </>
  ));

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

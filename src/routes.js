import { getAll, createPatient, update, deletePatient } from './patient.controller.js'
import { getAllClinicals, createClinicals } from './clinicals.controller.js'

function clinicalRoutes (router){
  router.get('/patients', getAll);
  router.post('/patients', createPatient);
  router.put('/patients/:id', update);
  router.delete('/patients/:id', deletePatient);


  router.get('/clinicals/:patientId', getAllClinicals);
  router.post('/clinicals', createClinicals);
}

export default clinicalRoutes;
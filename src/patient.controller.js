import dao from './patient.dao.js'

  async function getAll (req, res) {
    try {
      const patients = await dao.get({});
      res.send(patients);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async function createPatient (req, res) {
    try {
      const patient = req.body;
      const createdPatient = await dao.create(patient);
      res.send(createdPatient);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async function update (req, res) {
    try {
      const patient = {
        "age": req.body.age
      };
      await dao.update({_id: req.params.id}, {$set: patient});
      res.send("Patient updated");
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async function deletePatient(req, res) {  
    try {
      await dao.delete({_id: req.params.id});
      res.send("Patient deleted");
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

export { 
  getAll,
  createPatient,
  update,
  deletePatient
};

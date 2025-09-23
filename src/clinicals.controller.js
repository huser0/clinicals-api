import dao from './clinicals.dao.js'
import { ObjectId } from 'mongodb'

export async function getAllClinicals (req, res) {
  try {
    const clinicals = await dao.get({patient: new ObjectId(req.params.patientId)});
    res.send(clinicals);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function createClinicals (req, res) {
  try {
    const clinicals = req.body;
    const createdClinicals = await dao.create(clinicals);
    res.send(createdClinicals);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

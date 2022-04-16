import express from 'express'
import * as diarioServices from '../services/diarioService'
import toNewElementoDiario from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
    const diario = diarioServices.getElementsNotSensitive()
    return (diario !== null && diario !== undefined) ?
        res.send(diario)
        :
        res.sendStatus(404)
})

router.get('/:id', (req, res) => {
    const diario = diarioServices.findById(Number(req.params.id))
    return (diario !== null && diario !== undefined) ?
        res.send(diario)
        :
        res.sendStatus(404)
})

router.post('/', (req, res) => {
    try {
        const newElementoDiario = toNewElementoDiario(req.body)
        const addElementoDiario = diarioServices.addElement(newElementoDiario)
            res.json(addElementoDiario)
    } catch (e) {
        res.status(400).send(e.message)
    }
   
})

export default router
import express from 'express'

import _routerDiario from './routes/diario'

const app = express()

app.use(express.json())

const PORT = 8101

app.get('/', (_req, res) => {
    res.send('Inicio Nodejs - typescript - express')
})

app.use('/api/diario', _routerDiario)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
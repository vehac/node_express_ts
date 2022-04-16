import { ElementoDiario, ElementoDiarioNoSensitivo, newElementoDiario } from '../types'
import dataDiario from './diario.json'

const diario: ElementoDiario[] = dataDiario as ElementoDiario[]

export const getElements = (): ElementoDiario[] => diario

export const findById = (id: number): ElementoDiarioNoSensitivo | undefined => {
    const elemento = diario.find(d => d.id === id)
    if(elemento !== null && elemento !== undefined) {
        const {comment, ...restOfDiario } = elemento
        return restOfDiario
    }
    return undefined
}

export const getElementsNotSensitive = (): ElementoDiarioNoSensitivo[] => {
    return diario.map(({id, emotion, visibility, date}) => {
        return {
            id, emotion, visibility, date
        }
    })
}

export const addElement = (newElementoDiario: newElementoDiario): ElementoDiario => {
    const newDiario = {
        id : Math.max(...diario.map(d => d.id)) + 1,
        ...newElementoDiario
    }
    diario.push(newDiario)
    return newDiario
}

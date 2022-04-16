import { Emotion, Visibility} from './emums' 

export interface ElementoDiario {
    id: number
    emotion: Emotion
    visibility: Visibility
    comment: string
    date: string
}

//export type ElementoDiarioNoSensitivo = Pick<ElementoDiario, 'id' | 'emotion' | 'visibility' | 'date'>
export type ElementoDiarioNoSensitivo = Omit<ElementoDiario, 'comment'>
export type newElementoDiario = Omit<ElementoDiario, 'id'>

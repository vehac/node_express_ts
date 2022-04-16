import { newElementoDiario } from './types';
import { Emotion, Visibility} from './emums' 

const parseComment = (commetFromRequest : any): string => {
    if(!isString(commetFromRequest)) {
        throw new Error('Parámetro comment incorrecto')
    }
    return commetFromRequest
}

const parseDate = (dateFromRequest: any): string => {
    if(!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Parámetro date incorrecto')
    }
    return dateFromRequest
}

const parseEmotion = (emotionFromRequest: any): Emotion => {
    if(!isString(emotionFromRequest) || !isEmotion(emotionFromRequest)) {
        throw new Error('Parámetro emotion incorrecto')
    }
    return emotionFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
    if(!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('Parámetro visibility incorrecto')
    }
    return visibilityFromRequest
}

const isVisibility = (varVisiblity: any): boolean => {
    return Object.values(Visibility).includes(varVisiblity)
}

const isEmotion = (varEmotion: any): boolean => {
    return Object.values(Emotion).includes(varEmotion)
}

const isDate = (varDate: string): boolean => {
    return Boolean(Date.parse(varDate))
}

const isString = (varString: string): boolean => {
    //|| varString instanceof String
    return typeof varString === 'string' 
}

const toNewElementoDiario = (object: any): newElementoDiario => {
    const newDiario: newElementoDiario= {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        emotion: parseEmotion(object.emotion),
        visibility: parseVisibility(object.visibility)
    }
    return newDiario
}

export default toNewElementoDiario
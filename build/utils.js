"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const emums_1 = require("./emums");
const parseComment = (commetFromRequest) => {
    if (!isString(commetFromRequest)) {
        throw new Error('Parámetro comment incorrecto');
    }
    return commetFromRequest;
};
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Parámetro date incorrecto');
    }
    return dateFromRequest;
};
const parseEmotion = (emotionFromRequest) => {
    if (!isString(emotionFromRequest) || !isEmotion(emotionFromRequest)) {
        throw new Error('Parámetro emotion incorrecto');
    }
    return emotionFromRequest;
};
const parseVisibility = (visibilityFromRequest) => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('Parámetro visibility incorrecto');
    }
    return visibilityFromRequest;
};
const isVisibility = (varVisiblity) => {
    return Object.values(emums_1.Visibility).includes(varVisiblity);
};
const isEmotion = (varEmotion) => {
    return Object.values(emums_1.Emotion).includes(varEmotion);
};
const isDate = (varDate) => {
    return Boolean(Date.parse(varDate));
};
const isString = (varString) => {
    //|| varString instanceof String
    return typeof varString === 'string';
};
const toNewElementoDiario = (object) => {
    const newDiario = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        emotion: parseEmotion(object.emotion),
        visibility: parseVisibility(object.visibility)
    };
    return newDiario;
};
exports.default = toNewElementoDiario;

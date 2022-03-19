import { NextPage } from "next";

export type AuthPattern = {
    requireAuth: boolean
    requireEmptyToken: boolean
}

export type NextPageWithAuth<P = {}, IP = P> = NextPage<P, IP> & {
    authPattern?: AuthPattern
};

export type CategoryModel = {
    id : number
    name : string
}

export type OptionsModel = {
    id: number,
    answer: string
}

export type QuestionModel = {
    id: number,
    title: string,
    options: OptionsModel[]
}

export type AdminQuestionModel = {
    id: number,
    title: string,
    options: AdminOptionsModel[]
}

export type AdminOptionsModel = {
    id : number ,
    answer : string ,
    state : boolean
}

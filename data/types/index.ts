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
    total_questions : number
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
    category_name : string,
    options: AdminOptionsModel[]
}

export type AdminOptionsModel = {
    id : number ,
    answer : string ,
    state : boolean
}

export type ExamModel = {
    id : number ,
    title : string ,
    examinee_email : string,
    password : string,
    slug : string,
    description : { String : string  },
    expired_at : string,
    created_at : string,
    active : boolean
}
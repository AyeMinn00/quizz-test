export type LoginRequest = {
    email: string
    password: string
}

export type RegisterRequest = {
    email: string
    password: string
}

export type CreateCategoryRequest = {
    name: string
}

export type Option = {
    answer: string
    state: boolean
}

export type CreateQuestionRequest = {
    title: string
    category_id: number
    options: Option[]
}

export type CreateExamCategory = {
    category_id : number
    factorial : number
}

export type CreateExamRequest = {
    title: string
    examinee_email: string
    description: string
    active_day: number
    categories : CreateExamCategory[]
    number_of_questions: number
}
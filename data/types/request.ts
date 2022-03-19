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
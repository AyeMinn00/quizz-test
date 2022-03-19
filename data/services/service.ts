import {CreateCategoryRequest, CreateQuestionRequest, LoginRequest, RegisterRequest} from "../types/request"
import apiService from "./apiService"
import tokenService from "./tokenService"

class Service {

    async login(data: LoginRequest) {
        const response = await apiService.login(data)
        tokenService.setToken(response.data.token)
        return response.data
    }

    async register(data: RegisterRequest) {
        const response = await apiService.register(data)
        return response.data
    }

    async getCategories() {
        const response = await apiService.getCategories()
        return response.data
    }

    async createCategory(data: CreateCategoryRequest) {
        const response = await apiService.createCategory(data)
        return response.data
    }

    async getQuestionsByCategories(category: string) {
        const response = await apiService.getQuestionByCategories(category)
        return response.data
    }

    async createQuestion(data: CreateQuestionRequest) {
        return await apiService.createQuestion(data)
    }

    async getQuestion() {
        const response = await apiService.getQuestion()
        return response.data
    }

    async getQuestionWithAnswer() {
        const response = await apiService.getQuestionWithAnswer()
        return response.data
    }

}

const appService = new Service()

export default appService
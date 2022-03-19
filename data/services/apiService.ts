
import {CATEGORIES_URL, LOGIN_URL, QUESTION_URL, QUESTION_WITH_ANSWER_URL, REGISTER_URL} from '../../constants/api.urls'
import {CreateCategoryRequest, CreateQuestionRequest, LoginRequest, RegisterRequest} from '../types/request'
import client from './httpClient'


class APIService {

    login(data: LoginRequest) {
        return client.post(LOGIN_URL, data)
    }

    register(data: RegisterRequest) {
        return client.post(REGISTER_URL, data)
    }

    createCategory(data : CreateCategoryRequest){
        return client.post(CATEGORIES_URL , data)
    }

    getCategories() {
        return client.get(CATEGORIES_URL)
    }

    getQuestion(){
        return client.get(QUESTION_URL)
    }

    createQuestion(data : CreateQuestionRequest){
        return client.post(QUESTION_URL , data)
    }

    getQuestionByCategories(categoryId: string ) {
        return client.get(QUESTION_URL, { params: { category: categoryId } })
    }

    getQuestionWithAnswer(){
        return client.get(QUESTION_WITH_ANSWER_URL)
    }

}

const apiService = new APIService()
export default apiService
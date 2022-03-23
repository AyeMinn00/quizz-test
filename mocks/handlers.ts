import {rest} from 'msw'
import {CATEGORIES_URL, LOGIN_URL, QUESTION_URL, QUESTION_WITH_ANSWER_URL} from '../constants/api.urls'
import {categories, loginResponse, questions} from './data'

const url = process.env.NEXT_PUBLIC_API_URL

export const handlers = [

    rest.get(`${url}${CATEGORIES_URL}`,
        (req, res, ctx) => {
            // return res(ctx.json([]))
            return res(ctx.status(500))
        }),

    rest.get(`${url}${QUESTION_URL}`,
        (req, res, ctx) => {
            const categoryId = req.url.searchParams.get('category')
            const q = questions.filter(item =>
                item.category_id === Number(categoryId)
            )
            return res(ctx.json(q))
        }),

    rest.get(`${url}${QUESTION_WITH_ANSWER_URL}`,
        (req, res, ctx) => {
            return res(ctx.json(questions))
        }),

    rest.post(`${url}${LOGIN_URL}`,
        (req, res, ctx) => {
            return res(ctx.json(loginResponse))
        })

]
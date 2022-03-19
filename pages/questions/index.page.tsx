import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { ContainerComponent } from "../../components/Container";
import appService from "../../data/services/service";
import {NextPageWithAuth, OptionsModel, QuestionModel} from "../../data/types";
import { isNumeric } from "../../utils/util";

type QuestionsPageProps = {
    questions: QuestionModel[]
}

const QuestionsPage: NextPageWithAuth<QuestionsPageProps> = ({ questions }) => {

    return (
        <ContainerComponent>
            <div>
                {
                    questions.map((item: QuestionModel) => (
                        <div key={item.id}>
                            <h4>{item.title}</h4>
                            <ul>
                                {
                                    item.options.map((op: OptionsModel) => (
                                        <li key={op.id}>
                                            <span>{op.answer} </span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </ContainerComponent>
    )

}

interface IParams extends ParsedUrlQuery {
    category: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { query } = context
    const { category } = query as IParams

    if (category == undefined || !isNumeric(category)) {
        return {
            notFound: true
        }
    } else {

        const res = await appService.getQuestionsByCategories(category)
        return {
            props: {
                questions: res
            }
        }

    }

}


export default QuestionsPage
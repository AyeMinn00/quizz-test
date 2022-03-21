import {GetServerSideProps} from "next";
import {ParsedUrlQuery} from "querystring";
import {ContainerComponent} from "../../components/Container";
import appService from "../../data/services/service";
import {NextPageWithAuth, QuestionModel} from "../../data/types";
import {isNumeric} from "../../utils/util";
import {Box} from "@mui/system";
import {QuestionItem} from "./QuestionItem";
import {Grid} from "@mui/material";

type QuestionsPageProps = {
    questions: QuestionModel[]
}

const QuestionsPage: NextPageWithAuth<QuestionsPageProps> = ({questions}) => {

    return (
        <ContainerComponent>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Grid container
                      spacing={3}
                      sx={{
                          maxWidth: 'lg',
                      }}>
                    {
                        questions.map((item: QuestionModel) => (
                            <Grid item xs={12} key={item.id}>
                                <QuestionItem question={item} key={item.id}/>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </ContainerComponent>
    )

}

interface IParams extends ParsedUrlQuery {
    category: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {query} = context
    const {category} = query as IParams

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
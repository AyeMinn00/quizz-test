import {FetchQuestion} from "./FetchQuestion";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";
import {QuestionList} from "./QuestionList";
import {Box} from "@mui/system";

export const QuestionListComponent = () => {
    return (
        <Box maxWidth="lg">
            <FetchQuestion>
                {
                    ({loading, questions}) => (
                        <>
                            {
                                loading ? <LoadingComponent/> : <QuestionList questions={questions}/>
                            }
                        </>
                    )
                }
            </FetchQuestion>
        </Box>
    )
}
import {FetchQuestion} from "./FetchQuestion";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";
import {QuestionList} from "./QuestionList";

export const QuestionListComponent = () => {
    return (
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
    )
}
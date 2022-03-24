import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";
import {QuestionList} from "./QuestionList";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {getQuestionsWithAnswer, questionWithAnswerSelector} from "../../../features/question";
import {useEffect} from "react";

export const QuestionListComponent = () => {

    const dispatch = useAppDispatch()
    const {data, loading, error} = useAppSelector(questionWithAnswerSelector)

    useEffect(() => {
        dispatch(getQuestionsWithAnswer())
    }, [])

    return (
        <>
            {
                loading ?
                    <LoadingComponent/>
                    : <QuestionList questions={data}/>
            }
        </>
    )
}
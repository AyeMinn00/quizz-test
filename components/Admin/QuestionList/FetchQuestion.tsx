import React, {useEffect} from "react";
import {AdminQuestionModel} from "../../../data/types";
import appService from "../../../data/services/service";


export const FetchQuestion = ({children}: { children: (props: any) => JSX.Element }) => {

    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState()
    const [questions, setQuestions] = React.useState<AdminQuestionModel[]>([])

    useEffect(() => {
        getQuestions()
    }, [])

    const getQuestions = () => {
        setLoading(true)
        appService.getQuestionWithAnswer()
            .then(response => {
                setQuestions(response)
            }).catch(err => {
            setError(err)
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <React.Fragment>
            {
                children({loading, error, questions})
            }
        </React.Fragment>
    )

}
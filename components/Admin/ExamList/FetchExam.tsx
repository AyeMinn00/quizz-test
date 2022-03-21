import React, {useEffect} from "react";
import {ExamModel} from "../../../data/types";
import appService from "../../../data/services/service";

export const FetchExam = ({children}: { children: (props: any) => JSX.Element }) => {

    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState()
    const [exams, setExams] = React.useState<ExamModel[]>([])

    useEffect(() => {
        getExams()
    }, [])

    const getExams = () => {
        setLoading(true)
        appService.getExam()
            .then(response => {
                setExams(response)
            }).catch(err => {
                console.log(err)
            setError(err)
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <React.Fragment>
            {
                children({loading, error, exams})
            }
        </React.Fragment>
    )
}
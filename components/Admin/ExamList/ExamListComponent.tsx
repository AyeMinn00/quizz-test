import {FetchExam} from "./FetchExam";
import {ExamList} from "./ExamList";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";

export const ExamListComponent = () => {

    return (
        <FetchExam>
            {
                ({loading, exams}) => (
                    <>
                        {loading ? <LoadingComponent/> : <ExamList exams={exams}/>}
                    </>
                )
            }
        </FetchExam>
    )
}
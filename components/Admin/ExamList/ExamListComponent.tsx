import {FetchExam} from "./FetchExam";
import {ExamList} from "./ExamList";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";
import {Box} from "@mui/system";

export const ExamListComponent = () => {

    return (
        <Box maxWidth="lg">
            <FetchExam>
                {
                    ({loading, exams}) => (
                        <>
                            {loading ? <LoadingComponent/> : <ExamList exams={exams}/>}
                        </>
                    )
                }
            </FetchExam>
        </Box>
    )
}
import {AdminQuestionModel} from "../../../data/types";
import {QuestionItem} from "./QuestionItem";
import {Stack} from "@mui/material";


export const QuestionList = ({questions}: { questions: AdminQuestionModel[] }) => {

    return (
        <Stack spacing={3} overflow={"auto"}>
            {
                questions.map((q: AdminQuestionModel) => (
                    <QuestionItem question={q} key={q.id}/>
                ))
            }
        </Stack>
    )
}
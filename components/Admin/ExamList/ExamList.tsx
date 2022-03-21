import {ExamModel} from "../../../data/types";
import {ExamItem} from "./ExamItem";
import {Stack} from "@mui/material";

export const ExamList = ({exams}: { exams: ExamModel[] }) => {

    return (
        <Stack spacing={3}>
            {
                exams.map((exam: ExamModel) => (
                    <ExamItem exam={exam} key={exam.id}/>
                ))
            }
        </Stack>
    )
}
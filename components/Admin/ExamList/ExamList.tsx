import {ExamModel} from "../../../data/types";
import {Paper, Stack} from "@mui/material";
import {ExamItem} from "./ExamItem";

export const ExamList = ({exams}: { exams: ExamModel[] }) => {

    return (
        <Paper sx={{
            p: {xs: 2, sm: 3, md: 4},
        }}>
            <Stack spacing={0}>
                {
                    exams.map((exam: ExamModel, index: number) =>
                        (
                            <div key={exam.id}>
                                <ExamItem exam={exam}/>
                                {
                                    index !== (exams.length - 1) ?
                                        <hr
                                            style={{
                                                marginTop: '16px',
                                                marginBottom: '16px',
                                                border: '1px solid #eee'
                                            }}/>
                                        : null
                                }
                            </div>
                        )
                    )
                }
            </Stack>
        </Paper>
    )
}
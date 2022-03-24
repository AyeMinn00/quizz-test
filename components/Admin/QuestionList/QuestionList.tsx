import {AdminQuestionModel} from "../../../data/types";
import {QuestionItem} from "./QuestionItem";
import {Box, Paper, Stack} from "@mui/material";
import {EmptyQuestion} from "./EmptyQuestion";


export const QuestionList = ({questions}: { questions: AdminQuestionModel[] }) => {

    return (
        <>
            {
                questions.length > 0
                    ?
                    <Box sx={{pb: {xs: 2, sm: 3, md: 4},}}>
                        <Paper sx={{
                            p: {xs: 2, sm: 3, md: 4},
                        }}>
                            <Stack spacing={0}>
                                {
                                    questions.map((q: AdminQuestionModel, index: number) => (
                                        <div key={q.id}>
                                            <QuestionItem question={q}/>
                                            {
                                                index !== (questions.length - 1) ?
                                                    <hr
                                                        style={{
                                                            marginTop: '20px',
                                                            marginBottom: '20px',
                                                            border: '1px solid #eee'
                                                        }}/>
                                                    : null
                                            }
                                        </div>
                                    ))
                                }
                            </Stack>
                        </Paper>
                    </Box>
                    : <EmptyQuestion/>
            }
        </>
    )
}
import {AdminQuestionModel} from "../../../data/types";
import {Stack, Typography} from "@mui/material";
import {OptionList} from "./OptionList";


export const QuestionItem = ({question}: { question: AdminQuestionModel }) => {

    return (
        <Stack spacing={1}>
            <Typography variant="h6" style={{ wordWrap: "break-word" }}>
                {question.title}
            </Typography>
            <OptionList options={question.options}/>
        </Stack>
    )

}
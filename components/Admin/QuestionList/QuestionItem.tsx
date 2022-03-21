import {AdminQuestionModel} from "../../../data/types";
import {Stack, Typography} from "@mui/material";
import {OptionList} from "./OptionList";
import CategoryIcon from '@mui/icons-material/Category';
import { grey } from '@mui/material/colors';

export const QuestionItem = ({question}: { question: AdminQuestionModel }) => {

    return (
        <Stack spacing={1}>
            <Typography variant="subtitle1" fontSize="18px"
                        fontWeight="medium"
                        // style={{ wordWrap: "break-word" }}
            >
                {question.title}
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
                <CategoryIcon sx={{ color: grey[400] }}/>
                <Typography variant="subtitle1" fontSize="14px" fontWeight="medium"
                            // style={{ wordWrap: "break-word" }}
                >
                    {question.category_name}
                </Typography>
            </Stack>
            <OptionList options={question.options}/>
        </Stack>
    )

}
import {NextPageWithAuth} from "../../../data/types";
import MainComponent from "../../../components/Admin/Main/MainComponent";
import {QuestionListComponent} from "../../../components/Admin/QuestionList/QuestionListComponent";
import {Box} from "@mui/system";


const Questions: NextPageWithAuth = () => {

    return (
        <MainComponent>
            <Box sx={{
                m: 3,
            }}>
                <QuestionListComponent/>
            </Box>
        </MainComponent>
    )
}

Questions.authPattern = {requireAuth: true, requireEmptyToken: false}

export default Questions
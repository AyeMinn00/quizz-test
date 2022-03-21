import {NextPageWithAuth} from "../../../data/types";
import MainComponent from "../../../components/Admin/Main/MainComponent";
import {ExamListComponent} from "../../../components/Admin/ExamList/ExamListComponent";
import {Box} from "@mui/system";

const Exams: NextPageWithAuth = () => {

    return (
        <MainComponent>
            <Box sx={{
                m: 3,
            }}>
                <ExamListComponent/>
            </Box>
        </MainComponent>
    )
}

Exams.authPattern = {requireAuth: true, requireEmptyToken: false}

export default Exams
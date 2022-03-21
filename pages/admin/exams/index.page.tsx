import {NextPageWithAuth} from "../../../data/types";
import MainComponent from "../../../components/Admin/Main/MainComponent";
import {ExamListComponent} from "../../../components/Admin/ExamList/ExamListComponent";

const Exams: NextPageWithAuth = () => {

    return (
        <MainComponent>
            <ExamListComponent/>
        </MainComponent>
    )
}

Exams.authPattern = {requireAuth: true, requireEmptyToken: false}

export default Exams
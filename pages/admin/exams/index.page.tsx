import {NextPageWithAuth} from "../../../data/types";
import MainComponent from "../../../components/Admin/Main/MainComponent";
import {Exam} from "../../../components/Admin/Exam";


const Exams: NextPageWithAuth = () => {

    return (
        <MainComponent>
            <Exam/>
        </MainComponent>
    )
}

Exams.authPattern = {requireAuth: false, requireEmptyToken: false}

export default Exams
import {NextPageWithAuth} from "../../../data/types";
import MainComponent from "../../../components/Admin/Main/MainComponent";
import {QuestionListComponent} from "../../../components/Admin/QuestionList/QuestionListComponent";


const Questions: NextPageWithAuth = () => {

    return (
        <MainComponent>
            <QuestionListComponent/>
        </MainComponent>
    )
}

Questions.authPattern = {requireAuth: false, requireEmptyToken: false}

export default Questions
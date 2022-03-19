import {NextPageWithAuth} from "../../../data/types";
import MainComponent from "../../../components/Admin/Main/MainComponent";
import {CategoryTableComponent} from "../../../components/Admin/CategoryTable/CategoryTableComponent";


const Categories: NextPageWithAuth = () => {

    return (
        <MainComponent>
            <CategoryTableComponent/>
        </MainComponent>
    )
}

Categories.authPattern = {requireAuth: true, requireEmptyToken: false}

export default Categories
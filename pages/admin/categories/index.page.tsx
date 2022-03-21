import {NextPageWithAuth} from "../../../data/types";
import MainComponent from "../../../components/Admin/Main/MainComponent";
import {CategoryTableComponent} from "../../../components/Admin/CategoryTable/CategoryTableComponent";
import {Box} from "@mui/system";


const Categories: NextPageWithAuth = () => {

    return (
        <MainComponent>
            <Box sx={{m: 3}}>
                <CategoryTableComponent/>
            </Box>
        </MainComponent>
    )
}

Categories.authPattern = {requireAuth: true, requireEmptyToken: false}

export default Categories
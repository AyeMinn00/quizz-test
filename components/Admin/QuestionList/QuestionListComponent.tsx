import {FetchQuestion} from "./FetchQuestion";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";
import {QuestionList} from "./QuestionList";
import {Grid} from "@mui/material";

export const QuestionListComponent = () => {
    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={12}>
                <FetchQuestion>
                    {
                        ({loading, questions}) => (
                            <>
                                {
                                    loading ? <LoadingComponent/> : <QuestionList questions={questions}/>
                                }
                            </>
                        )
                    }
                </FetchQuestion>
            </Grid>
        </Grid>
    )
}
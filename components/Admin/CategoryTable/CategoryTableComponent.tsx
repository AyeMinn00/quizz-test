import React from "react";
import {FetchCategory} from "./FetchCategory";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";
import {Categories} from "./Categories";
import {Box} from "@mui/system";

export const CategoryTableComponent = () => {

    return (
        <Box sx={{
            maxWidth : "lg",
        }}>
            <FetchCategory>
                {
                    ({loading, categories}) => (
                        <>
                            {loading && <LoadingComponent/>}
                            {categories.length && <Categories categories={categories}/>}
                        </>
                    )
                }
            </FetchCategory>
        </Box>
    )

}




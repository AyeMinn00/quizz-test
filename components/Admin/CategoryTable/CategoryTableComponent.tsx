import React from "react";
import {FetchCategory} from "./FetchCategory";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";
import {Categories} from "./Categories";

export const CategoryTableComponent = () => {

    return (
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
    )

}



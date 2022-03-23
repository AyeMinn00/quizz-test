import React from "react";
import {FetchCategory} from "./FetchCategory";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";
import {Categories} from "./Categories";

export const CategoryTableComponent = () => {

    return (
        <FetchCategory>
            {
                ({loading, error , data}) => {
                    console.log("@ FetchCategory , loading is " , loading)
                    console.log("@ FetchCategory , categories is " , data)
                    return (
                        <>
                            {
                                loading ?
                                    <LoadingComponent/>
                                    : <Categories categories={data}/>}
                        </>
                    )
                }
            }
        </FetchCategory>
    )

}




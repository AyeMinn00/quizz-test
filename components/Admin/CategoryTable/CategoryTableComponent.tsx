import React, {useEffect} from "react";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";
import {Categories} from "./Categories";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {categorySelector, getCategories} from "../../../features/category";

export const CategoryTableComponent = () => {

    const dispatch = useAppDispatch()
    const {data, loading, error} = useAppSelector(categorySelector)

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    return (
        <>
            {
                loading ?
                    <LoadingComponent/>
                    : <Categories categories={data}/>
            }
        </>
    )

}




import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {categorySelector, getCategories} from "../../../features/category";

export const FetchCategory = ({children}: { children: (props: any) => JSX.Element }) => {

    const dispatch = useAppDispatch()
    const {data, loading, error} = useAppSelector(categorySelector)

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    return (
        <React.Fragment>
            {
                children({loading, error, data})
            }
        </React.Fragment>
    )

}
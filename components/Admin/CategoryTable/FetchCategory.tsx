import React, {useEffect} from "react";
import {CategoryModel} from "../../../data/types";
import appService from "../../../data/services/service";

export const FetchCategory = ({children}: { children: (props : any) => JSX.Element }) => {

    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState()
    const [categories, setCategories] = React.useState<CategoryModel[]>([])

    useEffect(() => {
        getCategories()
    }, [])

    const getCategories = () => {
        setLoading(true)
        appService.getCategories()
            .then(response => {
                setCategories(response)
            }).catch(err => {
            setError(err)
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <React.Fragment>
            {
                children({ loading , error , categories})
            }
        </React.Fragment>
    )

}
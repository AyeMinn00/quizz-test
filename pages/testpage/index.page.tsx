import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {categorySelector, getCategories} from "../../features/category";
import {Categories} from "../../components/Admin/CategoryTable/Categories";

const TestPage: React.FC = () => {
    const dispatch = useAppDispatch()
    const {data, loading, error} = useAppSelector(categorySelector)

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    if (loading) return <span>loading..</span>

    if (data.length > 0) return <Categories categories={data}/>

    return (
        <>
            <h1>Test Page</h1>
            {
                data
            }
            {error && <span>{error}</span>}
        </>
    )
}

export default TestPage
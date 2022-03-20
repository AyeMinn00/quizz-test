import React, {useEffect} from "react";
import {CategoryModel} from "../../../data/types";
import appService from "../../../data/services/service";
import {FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";

export interface SelectCategoryProps {
    inputError: boolean
    onLoading: (result: boolean) => void
    setCategory: (id: number) => void
}

export const SelectCategory = (props: SelectCategoryProps) => {

    const {onLoading, setCategory, inputError} = props
    const [categories, setCategories] = React.useState<CategoryModel[]>([])
    const [selectedCategoryId, setSelectedCategoryId] = React.useState('')    // default number ( invalid )

    useEffect(() => {
        getCategories()
    }, [])

    const getCategories = () => {
        onLoading(true)
        appService.getCategories()
            .then((response: any) => {
                setCategories(response)
                onLoading(false)
            }).catch((err: Error) => {
        })
    }

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedCategoryId(event.target.value as string);
        setCategory(Number(event.target.value))
    }

    return (
        <FormControl size="small"
                     error={inputError}>
            <InputLabel>Category</InputLabel>
            <Select
                label="Category"
                value={selectedCategoryId}
                onChange={handleChange}
                size="small">
                {
                    categories.map((item: CategoryModel) => (
                        <MenuItem value={item.id} key={item.id} sx={{overflowX: 'auto'}}>{item.name}</MenuItem>
                    ))
                }
            </Select>
            { inputError && <FormHelperText>Select a Category</FormHelperText> }
        </FormControl>
    )

}
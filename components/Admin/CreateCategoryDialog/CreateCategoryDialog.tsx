import * as yup from 'yup'
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {CreateCategoryRequest} from "../../../data/types/request";
import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import {Button, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {closeCategoryDialog, selectCategoryDialogOpen} from "../../../features/category_dialog/categoryDialogSlice";
import {createCategory} from "../../../features/category";


interface CreateCategoryFormInput {
    name: string
}

const schema = yup.object().shape({
    name: yup.string().required("Enter Category Name").min(1).max(100)
})

export const CreateCategoryDialog = () => {

    const dispatch = useAppDispatch()
    const openCategoryDialog = useAppSelector(selectCategoryDialogOpen)

    const {register, handleSubmit, formState} = useForm<CreateCategoryFormInput>({
        resolver: yupResolver(schema),
        mode: "onChange"
    })
    const {errors} = formState;

    const onFormSubmit: SubmitHandler<CreateCategoryFormInput> = (data) => {
        let request: CreateCategoryRequest = {
            name: data.name
        }
        uploadCategory(request)
    }

    const uploadCategory = (data: CreateCategoryRequest) => {
        dispatch(createCategory(data))
    }

    const handleClose = () => {
        dispatch(closeCategoryDialog())
    }

    return <div>
        <Dialog open={openCategoryDialog} onClose={handleClose} fullWidth
                sx={{
                    minWidth: 'md'
                }}>
            <DialogTitle>Create Category</DialogTitle>
            <IconButton sx={{
                position: 'absolute',
                right: 24,
                top: 16,
                color: (theme) => theme.palette.grey[500],
            }} onClick={handleClose}>
                <CloseIcon/>
            </IconButton>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Category Name"
                    fullWidth
                    variant="outlined"
                    {...register("name")}
                    error={!!errors.name}
                    helperText={
                        errors.name ? errors.name.message : ""
                    }
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit(onFormSubmit)}>Create</Button>
            </DialogActions>
        </Dialog>
    </div>
}
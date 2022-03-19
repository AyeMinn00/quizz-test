import * as yup from 'yup'
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import appService from "../../../data/services/service";
import React from "react";
import {CreateQuestionRequest} from "../../../data/types/request";
import DialogTitle from "@mui/material/DialogTitle";
import {Button, IconButton, Stack} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";

export interface CreateQuestionDialogProps {
    open: boolean,
    onClose: (result: boolean) => void
}

const schema = yup.object().shape({
    title: yup.string().required("Enter Title"),
    category_id: yup.number().required("Enter category"),
    // options: yup.array().required("Enter options").min(3)
})

export const CreateQuestionDialog = (props: CreateQuestionDialogProps) => {

    const {open, onClose} = props
    const {register, handleSubmit, formState} = useForm<CreateQuestionRequest>({
        resolver: yupResolver(schema),
        mode: "onChange"
    })
    const {errors} = formState;
    console.log((errors))

    const onFormSubmit: SubmitHandler<CreateQuestionRequest> = (data) => {
        console.log("create question")
        createQuestion(data)
    }

    const createQuestion = (data: CreateQuestionRequest) => {
        appService.createQuestion(data)
            .then((response: any) => {

            }).catch((err: Error) => {

        })
    }

    const handleClose = () => {
        onClose(false)
    }

    return <Dialog open={open} onClose={handleClose} fullWidth
                   sx={{
                       minWidth: 'md'
                   }}>
        <DialogTitle>Create Question</DialogTitle>
        <IconButton sx={{
            position: 'absolute',
            right: 24,
            top: 16,
            color: (theme) => theme.palette.grey[500],
        }} onClick={handleClose}>
            <CloseIcon/>
        </IconButton>
        <DialogContent>
            <Stack spacing={2}>
                <TextField
                    id="title"
                    label="Title"
                    fullWidth
                    variant="outlined"
                    {...register("title")}
                    error={!!errors.title}
                    helperText={
                        errors.title ? errors.title.message : ""
                    }
                />
                <TextField
                    id="category_id"
                    label="Category"
                    fullWidth
                    variant="outlined"
                    {...register("category_id")}
                    error={!!errors.category_id}
                    helperText={
                        errors.category_id ? errors.category_id.message : ""
                    }
                />
            </Stack>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit(onFormSubmit)}>Create</Button>
        </DialogActions>
    </Dialog>
}
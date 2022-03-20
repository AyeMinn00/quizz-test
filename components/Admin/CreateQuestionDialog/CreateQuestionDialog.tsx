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
import {SelectCategory} from "./SelectCategory";

export interface CreateQuestionDialogProps {
    open: boolean,
    onClose: (result: boolean) => void
}

const schema = yup.object().shape({
    title: yup.string().required("Enter Title"),
    correctOption: yup.string().required("Enter Correct Option"),
    incorrectOption1: yup.string().required("Enter Incorrect Option"),
    incorrectOption2: yup.string().required("Enter Incorrect Option"),
    incorrectOption3: yup.string().required("Enter Incorrect Option"),
})


interface CreateQuestionInput {
    title: string
    correctOption: string
    incorrectOption1: string
    incorrectOption2: string
    incorrectOption3: string
}

export const CreateQuestionDialog = (props: CreateQuestionDialogProps) => {

    const {open, onClose} = props
    const [categoryId, setCategoryId] = React.useState<number | undefined>()
    const [noCategoryError, setNoCategoryError] = React.useState(false)
    const {register, handleSubmit, formState, reset} = useForm<CreateQuestionInput>({
        resolver: yupResolver(schema),
        mode: "onChange"
    })
    const {errors} = formState;

    const onFormSubmit: SubmitHandler<CreateQuestionInput> = (data) => {
        if (categoryId !== undefined) {
            setNoCategoryError(false)
            const request = {
                title: data.title,
                category_id: categoryId,
                options: [
                    {answer: data.correctOption, state : true},
                    {answer: data.incorrectOption1, state : false},
                    {answer: data.incorrectOption2, state : false},
                    {answer: data.incorrectOption3, state : false},
                ]
            }
            createQuestion(request)
        } else {
            setNoCategoryError(true)
        }
    }

    const createQuestion = (data: CreateQuestionRequest) => {
        appService.createQuestion(data)
            .then((response: any) => {

            }).catch((err: Error) => {

        }).finally(() => {
            reset({
                title: "",
                correctOption : "",
                incorrectOption1 : "",
                incorrectOption2 : "",
                incorrectOption3 : "",
            })
        })
    }

    const handleClose = () => {
        onClose(false)
        setCategoryId(undefined)
        reset({
            title: "",
            correctOption : "",
            incorrectOption1 : "",
            incorrectOption2 : "",
            incorrectOption3 : "",
        })
    }

    const onLoading = (result: boolean) => {
        // setLoading(result)
    }

    const setCategory = (id: number) => {
        setCategoryId(id)
        setNoCategoryError(false)
    }

    const dataUi = <Stack spacing={2}>
        <TextField
            id="title"
            label="Title"
            fullWidth
            size="small"
            variant="outlined"
            {...register("title")}
            error={!!errors.title}
            helperText={
                errors.title ? errors.title.message : ""
            }
        />

        <SelectCategory onLoading={onLoading} setCategory={setCategory} inputError={noCategoryError}/>

        <TextField
            id="option"
            label="Correct Option"
            fullWidth
            size="small"
            variant="outlined"
            {...register("correctOption")}
            error={!!errors.correctOption}
            helperText={
                errors.correctOption ? errors.correctOption.message : ""
            }
        />

        <TextField
            id="incorrectOption1"
            label="Incorrect Option"
            fullWidth
            size="small"
            variant="outlined"
            {...register("incorrectOption1")}
            error={!!errors.incorrectOption1}
            helperText={
                errors.incorrectOption1 ? errors.incorrectOption1.message : ""
            }
        />

        <TextField
            id="incorrectOption2"
            label="Incorrect Option"
            fullWidth
            size="small"
            variant="outlined"
            {...register("incorrectOption2")}
            error={!!errors.incorrectOption2}
            helperText={
                errors.incorrectOption2 ? errors.incorrectOption2.message : ""
            }
        />

        <TextField
            id="incorrectOption3"
            label="Incorrect Option"
            fullWidth
            size="small"
            variant="outlined"
            {...register("incorrectOption3")}
            error={!!errors.incorrectOption3}
            helperText={
                errors.incorrectOption3 ? errors.incorrectOption3.message : ""
            }
        />

    </Stack>

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

            {
                dataUi
            }

        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit(onFormSubmit)}>Create</Button>
        </DialogActions>
    </Dialog>
}
import * as yup from 'yup'
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {CreateExamRequest} from "../../../data/types/request";
import appService from "../../../data/services/service";
import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import {Button, IconButton, Stack} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import {SelectCategory} from "../CreateQuestionDialog/SelectCategory";

export interface CreateExamDialogProps {
    open: boolean,
    onClose: (result: boolean) => void
}

interface CreateExamFormInput {
    title: string
    email: string
    description: string
    activeDay: number
    noQuestion: number
}

const schema = yup.object().shape({
    title: yup.string().required("Enter Exam Title").min(1).max(1000),
    email: yup.string().email().required("Enter email"),
    description: yup.string(),
    activeDay: yup.number().min(1).required("Enter active day"),
    noQuestion: yup.number().min(1).required("Enter Total number of questions")
})

export const CreateExamDialog = (props: CreateExamDialogProps) => {

    const {open, onClose} = props
    const [categoryId, setCategoryId] = React.useState<number | undefined>()
    const [noCategoryError, setNoCategoryError] = React.useState(false)
    const {register, handleSubmit, formState} = useForm<CreateExamFormInput>({
        resolver: yupResolver(schema),
        mode: "onChange"
    })
    const {errors} = formState

    const onFormSubmit: SubmitHandler<CreateExamFormInput> = (data) => {
        if (categoryId === undefined) {
            setNoCategoryError(true)
        } else {
            setNoCategoryError(false)
            const request: CreateExamRequest = {
                title: data.title,
                examinee_email: data.email,
                description: data.description,
                active_day: data.activeDay,
                categories: [
                    {
                        category_id: categoryId,
                        factorial: 1
                    }
                ],
                number_of_questions: data.noQuestion
            }
            createExam(request)
        }
    }

    const createExam = (data: CreateExamRequest) => {
        console.log(JSON.stringify(data))
        appService.createExam(data)
            .then((response: any) => {

            })
            .catch((err: Error) => {

            })
    }

    const handleClose = () => {
        onClose(false)
        setCategoryId(undefined)
    }

    const setCategory = (id: number) => {
        setCategoryId(id)
        setNoCategoryError(false)
    }

    const onLoading = (result: boolean) => {
        // setLoading(result)
    }

    const dataUi = <Stack spacing={1}>
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

        <SelectCategory inputError={noCategoryError} onLoading={onLoading} setCategory={setCategory}/>

        <TextField
            id="email"
            label="email"
            fullWidth
            size="small"
            variant="outlined"
            {...register("email")}
            error={!!errors.email}
            helperText={
                errors.email ? errors.email.message : ""
            }
        />

        <TextField
            id="description"
            label="Description"
            fullWidth
            size="small"
            variant="outlined"
            {...register("description")}
            error={!!errors.description}
            helperText={
                errors.description ? errors.description.message : ""
            }
        />

        <TextField
            id="activeDay"
            label="Active Day"
            fullWidth
            size="small"
            variant="outlined"
            {...register("activeDay")}
            error={!!errors.activeDay}
            helperText={
                errors.activeDay ? errors.activeDay.message : ""
            }
        />

        <TextField
            id="noQuestions"
            label="Number of Questions"
            fullWidth
            size="small"
            variant="outlined"
            {...register("noQuestion")}
            error={!!errors.noQuestion}
            helperText={
                errors.noQuestion ? errors.noQuestion.message : ""
            }
        />

    </Stack>

    return <Dialog open={open} onClose={handleClose} fullWidth
                   sx={{
                       minWidth: 'md'
                   }}>
        <DialogTitle>Create Exam</DialogTitle>
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
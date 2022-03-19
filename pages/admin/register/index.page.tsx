import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import * as yup from 'yup';
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { RegisterRequest } from "../../../data/types/request";
import appService from "../../../data/services/service";


interface RegisterFormInput {
    email: string
    password: string
    confirmedPassword: string
}

const schema = yup.object().shape({
    email: yup.string().required("Enter email").email("Invalid Email Format"),
    password: yup.string().required("Enter password").min(8, "Password length should be greater than 7"),
    confirmedPassword: yup.string().required("Enter confirmed password").min(8, "Password length should be greater than 7")
})

const Register = () => {

    const router = useRouter()
    const { register, handleSubmit, formState } = useForm<RegisterFormInput>({
        resolver: yupResolver(schema),
        mode: "onChange"
    })
    const { errors } = formState;
    // const [showPassword, setShowPassword] = useState(false);

    const onFormSubmit: SubmitHandler<RegisterFormInput> = (data) => {
        let request = {
            email: data.email,
            password: data.password
        }
        doRegister(request)
    }

    const doRegister = (data: RegisterRequest) => {
        appService.register(data)
            .then((response: any) => {
                console.log("response ", response)
                router.push("/")
            })
            .catch((error: Error) => {
                console.error("error ", error)
            })
    }

    return (
        <Box sx={{
            display: 'flex',
            direction: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh'
        }}>
            <Box component="form" onSubmit={handleSubmit(onFormSubmit)}>

                <Stack spacing={2} alignItems='center' width="320px" mb={8}>
                    <Typography variant="h4" mb={2}>Register</Typography>

                    {/* email text field  */}
                    <TextField label="Email" variant="outlined" type="email" required fullWidth
                        {...register("email")}
                        error={!!errors.email}
                        helperText={
                            errors.email ? errors.email.message : ""
                        } />

                    {/* password text field */}
                    <TextField label="Password" variant="outlined" type="password" required fullWidth
                        {...register("password")} />

                    {/* confirmed password text field */}
                    <TextField label="Confirmed Password" variant="outlined" type="password" required fullWidth
                        {...register("confirmedPassword")} />

                    {/* login button */}
                    <Button type="submit" variant="contained" size="large" fullWidth
                        disabled={!formState.isValid}>
                        Register
                    </Button>
                </Stack>

            </Box>
        </Box>
    )
}

export default Register 
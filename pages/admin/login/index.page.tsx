import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import * as yup from 'yup';
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginRequest } from "../../../data/types/request";
import appService from "../../../data/services/service";
import { useRouter } from "next/router";
import { NextPageWithAuth } from "../../../data/types";
import {useFirstAdminLink, useLinks} from "../../../constants/links";


interface LoginFormInput {
    email: string
    password: string
}

const schema = yup.object().shape({
    email: yup.string().required("Enter email").email("Invalid Email Format"),
    password: yup.string().required("Enter password").min(8, "Password length should be greater than 7")
})

const Login: NextPageWithAuth = () => {

    const router = useRouter()
    const firstAdminLink = useFirstAdminLink()
    const { register, handleSubmit, formState } = useForm<LoginFormInput>({
        resolver: yupResolver(schema),
        mode: "onChange"
    })
    const { errors } = formState;
    // const [showPassword, setShowPassword] = useState(false);

    const onFormSubmit: SubmitHandler<LoginFormInput> = (data) => {
        let request = {
            email: data.email,
            password: data.password
        }
        login(request)
    }

    const login = (data: LoginRequest) => {
        appService.login(data)
            .then((response: any) => {
                router.push(firstAdminLink)
            })
            .catch((error: Error) => {
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
                    <Typography variant="h4" mb={2}>Login</Typography>

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

                    {/* login button */}
                    < Button type="submit" variant="contained" size="large" fullWidth color="primary"
                        disabled={!formState.isValid}>
                        Login
                    </Button>
                </Stack>

            </Box>
        </Box>
    )
}


Login.authPattern = { requireAuth: false, requireEmptyToken: true }

export default Login
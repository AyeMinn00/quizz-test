import {Fab, Stack, Typography} from "@mui/material";
import {Box} from "@mui/system";
import {AddRounded} from "@mui/icons-material";


export const EmptyQuestion = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexGrow: 1,
            height: '100%',
            justifyContent: 'center',
            alignContent: 'center',
        }}>
            <Stack direction="row" spacing={2}
                   alignItems="center"
            >
                <Typography
                    variant="subtitle1"
                    fontWeight="medium"
                >
                    No Question Found
                </Typography>
                <Fab aria-label="add" disableTouchRipple disableRipple size="large"
                     sx={{
                         boxShadow: 'none'
                     }}>
                    <AddRounded/>
                </Fab>
            </Stack>
        </Box>
    )
}
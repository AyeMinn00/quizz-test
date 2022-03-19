import {AdminOptionsModel} from "../../../data/types";
import {Stack} from "@mui/material";
import {CorrectIconComponent} from "../../CorrectIcon/CorrectIconComponent";
import Typography from "@mui/material/Typography";

export const OptionItem = ( { option } : { option : AdminOptionsModel}) => {

    return (
        <Stack direction="row" spacing={1} alignItems="center">
            { option.state && <CorrectIconComponent/>}
            <Typography variant="subtitle1">{ option.answer }</Typography>
        </Stack>
    )
}
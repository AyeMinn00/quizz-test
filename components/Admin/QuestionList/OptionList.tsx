import {AdminOptionsModel} from "../../../data/types";
import {OptionItem} from "./OptionItem";
import {Stack} from "@mui/material";

export const OptionList = ({options}: { options: AdminOptionsModel[] }) => {

    return (
        <Stack spacing={0.5}>
            {
                options.map((opt: AdminOptionsModel) => (
                    <OptionItem option={opt} key={opt.id}/>
                ))
            }
        </Stack>
    )
}
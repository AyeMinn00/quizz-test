import {OptionsModel} from "../../data/types";
import {Checkbox, Stack, Typography} from "@mui/material";
import React from "react";


export const OptionList = ({options}: { options: OptionsModel[] }) => {

    const [checkedOptId, setCheckedOptId] = React.useState(-1)

    return (
        <div>
            {
                options.map((opt: OptionsModel) => (
                    <Stack direction="row" spacing={0} key={opt.id} alignItems="center">
                        <Checkbox size="small"
                                  onChange={()=>{
                                      setCheckedOptId(opt.id)
                                  }}
                                  checked={checkedOptId === opt.id}/>
                        <Typography variant="subtitle1" style={{wordWrap: "break-word"}}>
                            {opt.answer}
                        </Typography>
                    </Stack>
                ))
            }
        </div>
    )
}
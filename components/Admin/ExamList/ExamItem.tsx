import {ExamModel} from "../../../data/types";
import {Stack, Typography} from "@mui/material";

export const ExamItem = ({exam}: { exam: ExamModel }) => {

    return (
        <Stack>
            <Typography variant="subtitle1"
                        fontSize="18px"
                        fontWeight="medium"
                        style={{wordWrap: "break-word"}}>
                {exam.title}
            </Typography>
            <ListItem label="Examinee Email" title={exam.examinee_email}/>
            <ListItem label="Password" title={exam.password}/>
            <ListItem label="Description" title={exam.description.String}/>
            <ListItem label="Expired At" title={exam.expired_at}/>
            <ListItem label="Created At" title={exam.created_at}/>
            <ListItem label="Active" title={exam.active ? "Yes" : "No"}/>
        </Stack>
    )
}

const ListItem = ({label, title}: { label: string, title: string }) => {
    return (
        <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitle1" fontSize="14px">{label}</Typography>
            {" : "}
            <Typography variant="subtitle1" fontSize="15px" fontWeight="medium">{title}</Typography>
        </Stack>
    )
}
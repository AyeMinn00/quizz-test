import {ListItem, Typography} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import CategoryIcon from '@mui/icons-material/Category';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AccessAlarmTwoToneIcon from '@mui/icons-material/AccessAlarmTwoTone';
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import {useRouter} from "next/router";
import {useLinks} from "../../../constants/links";

type NavbarItemProps = {
    name: string
    link: string
    selected: boolean
    handleClick: () => void
}

export const NavbarItem = ({name, handleClick,  selected , link}: NavbarItemProps) => {

    const router = useRouter()
    const links = useLinks()

    const onListItemClick = () =>{
        handleClick()
        router.push(link)
    }

    return (
        <ListItem disablePadding>
            <ListItemButton
                selected={selected}
                onClick={onListItemClick}>
                <ListItemIcon>
                    { link === links.adminCategory && <CategoryIcon/>}
                    { link === links.adminQuestion && <QuestionAnswerIcon/>}
                    { link === links.adminExam && <AccessAlarmTwoToneIcon/>}
                </ListItemIcon>
                <ListItemText primary={
                    <Typography variant="subtitle1" fontSize="16px" fontWeight="medium">{name}</Typography>
                }/>
            </ListItemButton>
        </ListItem>
    )
}
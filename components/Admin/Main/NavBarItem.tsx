import {ListItem} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import {useRouter} from "next/router";

type NavbarItemProps = {
    name: string
    link: string
    selected: boolean
    handleClick: () => void
}

export const NavbarItem = ({name, handleClick,  selected , link}: NavbarItemProps) => {

    const router = useRouter()

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
                    <InboxIcon/>
                </ListItemIcon>
                <ListItemText primary={name}/>
            </ListItemButton>
        </ListItem>
    )
}
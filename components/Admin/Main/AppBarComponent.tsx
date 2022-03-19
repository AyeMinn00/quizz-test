import Toolbar from "@mui/material/Toolbar";
import {AppBar, Button, IconButton, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {AddRounded} from "@mui/icons-material";
import * as React from "react";
import {useRouter} from "next/router";
import {sameLink} from "../../../utils/util";
import {links} from "../../../constants/links";


export interface AppBarComponentProps {
    handleDrawerToggle: () => void
    handleCreateCategoryDialog: () => void
    handleCreateQuestionDialog: () => void
}

export const AppBarComponent = (props: AppBarComponentProps) => {

    const {
        handleDrawerToggle,
        handleCreateCategoryDialog,
        handleCreateQuestionDialog
    } = props
    const router = useRouter()

    return (
        <AppBar
            position="relative"
            elevation={1}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{mr: 2, display: {sm: 'none'}}}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" sx={{flexGrow: 1, marginRight: '8px'}} component="div">
                    {`title`}
                </Typography>
                {
                    sameLink(links.adminCategory, router) &&
                    <Button variant="outlined" color="secondary"
                            onClick={handleCreateCategoryDialog}
                            startIcon={<AddRounded/>}>
                        Create Category</Button>
                }
                {
                    sameLink(links.adminQuestion, router) &&
                     <Button variant="outlined" color="secondary"
                                  onClick={handleCreateQuestionDialog}
                                  startIcon={<AddRounded/>}>
                            Create Question
                        </Button>
                }

            </Toolbar>
        </AppBar>
    )

}
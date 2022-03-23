import * as React from 'react';
import {Box, Toolbar} from "@mui/material";
import {CreateQuestionDialog} from "../CreateQuestionDialog/CreateQuestionDialog";
import {CreateCategoryDialog} from "../CreateCategoryDialog/CreateCategoryDialog";
import {AppBarComponent} from "./AppBarComponent";
import {DrawerComponent} from "./DrawerComponent";
import {CreateExamDialog} from "../CreateExamDialog/CreateExamDialog";

const drawerWidth = 240;


const MainComponent = ({children}: { children: JSX.Element }) => {

    const [openCreateCategoryDialog, setOpenCreateCategoryDialog] = React.useState(false)
    const [openCreateQuestionDialog, setOpenCreateQuestionDialog] = React.useState(false)
    const [openCreateExamDialog, setOpenCreateExamDialog] = React.useState(false)
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleListItemClick = () => {
        setMobileOpen(false)
    }

    const handleCreateCategoryDialog = () => {
        setOpenCreateCategoryDialog(!openCreateCategoryDialog)
    }

    const handleCreateQuestionDialog = () => {
        setOpenCreateQuestionDialog(!openCreateQuestionDialog)
    }

    const handleCreateExamDialog = () => {
        setOpenCreateExamDialog(!openCreateExamDialog)
    }

    const closeCreateCategoryDialog = () => {
        setOpenCreateCategoryDialog(false)
    }

    const closeCreateQuestionDialog = () => {
        setOpenCreateQuestionDialog(false)
    }

    const closeCreateExamDialog = () => {
        setOpenCreateExamDialog(false)
    }

    return (
        <Box>

            {/* AppBar */}
            <AppBarComponent
                drawerWidth={drawerWidth}
                handleDrawerToggle={handleDrawerToggle}
                handleCreateCategoryDialog={handleCreateCategoryDialog}
                handleCreateQuestionDialog={handleCreateQuestionDialog}
                handleCreateExamDialog={handleCreateExamDialog}
            />

            {/* Drawer */}
            <DrawerComponent
                drawerWidth={drawerWidth}
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
                handleListItemClick={handleListItemClick}/>

            {/* Content */}
            <Box
                component="main"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: {sm: `calc(100% - ${drawerWidth}px)`},
                    ml: {sm: `${drawerWidth}px`},
                    height: '100vh',
                    overflow: 'hidden',
                }}>

                <Box>
                    <Toolbar/>
                </Box>

                <Box sx={{
                    p: {xs: 2, sm: 3, md: 4},
                    overflow: 'auto',
                    display: 'flex',
                    justifyContent: 'center',
                    flexGrow : 1,
                }}>
                    <Box sx={{
                        maxWidth: 'lg',
                        width: '100%',   // important , not to overflow width in small screen
                        // background: 'green',
                    }}>
                        <Box sx={{
                            pb: {xs: 2, sm: 3, md: 4},
                            // background : 'red',
                            flexGrow : 1,
                            height : '100%'
                        }}>
                            {children}
                        </Box>
                    </Box>
                </Box>

            </Box>


            <CreateCategoryDialog open={openCreateCategoryDialog} onClose={closeCreateCategoryDialog}/>
            <CreateQuestionDialog open={openCreateQuestionDialog} onClose={closeCreateQuestionDialog}/>
            <CreateExamDialog open={openCreateExamDialog} onClose={closeCreateExamDialog}/>
        </Box>
    )

}

export default MainComponent




























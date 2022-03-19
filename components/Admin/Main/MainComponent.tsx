import * as React from 'react';
import {Box} from "@mui/material";
import {CreateQuestionDialog} from "../CreateQuestionDialog/CreateQuestionDialog";
import {CreateCategoryDialog} from "../CreateCategoryDialog/CreateCategoryDialog";
import {AppBarComponent} from "./AppBarComponent";
import {DrawerComponent} from "./DrawerComponent";

const drawerWidth = 240;


const MainComponent = ({children}: { children: JSX.Element }) => {

    const [openCreateCategoryDialog, setOpenCreateCategoryDialog] = React.useState(false)
    const [openCreateQuestionDialog, setOpenCreateQuestionDialog] = React.useState(false)
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleListItemClick = () => {
        setMobileOpen(false)
    };

    const handleCreateCategoryDialog = () => {
        setOpenCreateCategoryDialog(!openCreateCategoryDialog)
    }

    const handleCreateQuestionDialog = () => {
        setOpenCreateQuestionDialog(!openCreateQuestionDialog)
    }

    const closeCreateCategoryDialog = () => {
        setOpenCreateCategoryDialog(false)
    }

    const closeCreateQuestionDialog = () => {
        setOpenCreateQuestionDialog(false)
    }

    return (
        <>
            <Box sx={{
                display: 'flex',
                height: '100vh',
                overflowY: 'hidden',
            }}>

                {/* Drawer */}
                <DrawerComponent
                    drawerWidth={drawerWidth}
                    mobileOpen={mobileOpen}
                    handleDrawerToggle={handleDrawerToggle}
                    handleListItemClick={handleListItemClick}/>

                {/* body */}
                <Box component="main"
                     sx={{
                         flexGrow: 1,
                         maxWidth: {
                             xs: '100vw',
                             sm: `calc(100%-${drawerWidth}px)`
                         }
                     }}>

                    {/* AppBar */}
                    <AppBarComponent
                        handleDrawerToggle={handleDrawerToggle}
                        handleCreateCategoryDialog={handleCreateCategoryDialog}
                        handleCreateQuestionDialog={handleCreateQuestionDialog}/>

                    {/* Content */}
                    <Box
                        sx={{
                            p: 3,
                            height: `calc(100% - 64px)`,
                            overflow: 'scroll'
                        }}>
                        {children}
                    </Box>
                </Box>

            </Box>
            <CreateCategoryDialog open={openCreateCategoryDialog} onClose={closeCreateCategoryDialog}/>
            <CreateQuestionDialog open={openCreateQuestionDialog} onClose={closeCreateQuestionDialog}/>
        </>
    )

}

export default MainComponent

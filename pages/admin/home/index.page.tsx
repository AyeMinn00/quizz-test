// import * as React from 'react';
// import {NextPageWithAuth} from "../../../data/types";
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import Toolbar from '@mui/material/Toolbar';
// import {AppBar, Box, Button, Divider, Drawer, IconButton, ListItem, Typography} from "@mui/material";
// import {CategoryTableComponent} from '../../../components/Admin/CategoryTable/CategoryTableComponent';
// import {QuestionListComponent} from "../../../components/Admin/QuestionList/QuestionListComponent";
// import {AddRounded} from "@mui/icons-material";
// import MenuIcon from '@mui/icons-material/Menu';
// import {CreateCategoryDialog} from "../../../components/Admin/CreateCategoryDialog/CreateCategoryDialog";
// import {CreateQuestionDialog} from "../../../components/Admin/CreateQuestionDialog/CreateQuestionDialog";
// import {useLinks} from "../../../constants/links";
// import {useRouter} from "next/router";
//
// const drawerWidth = 240;
//
// const features = ["Category", "Question", "Exam"]
//
// type FeatureButtonProps = {
//     name: string
//     index: number
//     link: string
//     selected: boolean
//     handleClick: (index: number) => void
// }
//
// const FeatureButton = ({name, index, handleClick, link, selected}: FeatureButtonProps) => {
//     return (
//         <ListItem disablePadding>
//             <ListItemButton
//                 selected={selected}
//                 onClick={() => handleClick(index)}
//                 component="a" href={link}>
//                 <ListItemIcon>
//                     <InboxIcon/>
//                 </ListItemIcon>
//                 <ListItemText primary={name}/>
//             </ListItemButton>
//         </ListItem>
//     )
// }
//
// const AdminHomePage: NextPageWithAuth = () => {
//
//     const [openCreateCategoryDialog, setOpenCreateCategoryDialog] = React.useState(false)
//     const [openCreateQuestionDialog, setOpenCreateQuestionDialog] = React.useState(false)
//     const [selectedIndex, setSelectedIndex] = React.useState(0);
//     const [title, setTitle] = React.useState(features[0])
//     const [mobileOpen, setMobileOpen] = React.useState(false);
//     const links = useLinks()
//
//     const handleDrawerToggle = () => {
//         setMobileOpen(!mobileOpen);
//     };
//
//     const handleListItemClick = (index: number) => {
//         setSelectedIndex(index);
//         setTitle(features[index])
//         setMobileOpen(false)
//     };
//
//     const handleCreateCategoryDialog = () => {
//         setOpenCreateCategoryDialog(!openCreateCategoryDialog)
//     }
//
//     const handleCreateQuestionDialog = () => {
//         setOpenCreateQuestionDialog(!openCreateQuestionDialog)
//     }
//
//     const closeCreateCategoryDialog = () => {
//         setOpenCreateCategoryDialog(false)
//     }
//
//     const closeCreateQuestionDialog = () => {
//         setOpenCreateQuestionDialog(false)
//     }
//
//     const router = useRouter()
//
//     console.log('router ', router.query)
//
//     const drawer = (
//         <div>
//             <Toolbar/>
//             <Divider/>
//             {
//                 features.map((name: string, index: number) => (
//                     <FeatureButton key={index}
//                         name={name}
//                         index={index}
//                         link={`/${name}`}
//                         selected={selectedIndex === index}
//                         handleClick={handleListItemClick}/>
//                 ))
//             }
//         </div>
//     );
//
//     return (
//         <>
//             <Box sx={{
//                 display: 'flex',
//                 height: '100vh',
//                 overflowY: 'hidden',
//             }}>
//
//                 <Box
//                     component="nav"
//                     sx={{
//                         width: {sm: drawerWidth},
//                         flexShrink: {sm: 0}
//                     }}>
//                     {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//                     <Drawer
//                         variant="temporary"
//                         open={mobileOpen}
//                         onClose={handleDrawerToggle}
//                         ModalProps={{
//                             keepMounted: true, // Better open performance on mobile.
//                         }}
//                         sx={{
//                             display: {xs: 'block', sm: 'none'},
//                             '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
//                         }}>
//                         {drawer}
//                     </Drawer>
//                     <Drawer
//                         variant="permanent"
//                         sx={{
//                             display: {xs: 'none', sm: 'block'},
//                             '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
//                         }}
//                         open>
//                         {drawer}
//                     </Drawer>
//                 </Box>
//
//                 {/* body */}
//                 <Box component="main"
//                      sx={{
//                          flexGrow: 1,
//                          maxWidth: {
//                              xs: '100vw',
//                              sm: `calc(100%-${drawerWidth}px)`
//                          }
//                      }}>
//                     <AppBar
//                         position="relative"
//                         elevation={1}>
//                         <Toolbar>
//                             <IconButton
//                                 color="inherit"
//                                 aria-label="open drawer"
//                                 edge="start"
//                                 onClick={handleDrawerToggle}
//                                 sx={{mr: 2, display: {sm: 'none'}}}
//                             >
//                                 <MenuIcon/>
//                             </IconButton>
//                             <Typography variant="h6" sx={{flexGrow: 1, marginRight: '8px'}} component="div">
//                                 {title}
//                             </Typography>
//                             {
//                                 selectedIndex === 0 ?
//                                     <Button variant="outlined" color="secondary"
//                                             onClick={handleCreateCategoryDialog}
//                                             startIcon={<AddRounded/>}>
//                                         Create Category</Button>
//                                     : <Button variant="outlined" color="secondary"
//                                               onClick={handleCreateQuestionDialog}
//                                               startIcon={<AddRounded/>}>
//                                         Create Question
//                                     </Button>
//                             }
//                         </Toolbar>
//                     </AppBar>
//
//                     <Box
//                         sx={{
//                             p: 3,
//                             height: `calc(100% - 64px)`,
//                             overflow: 'scroll'
//                         }}>
//                         {
//                             selectedIndex === 0 ? <CategoryTableComponent/>
//                                 : <QuestionListComponent/>
//                         }
//                     </Box>
//                 </Box>
//
//
//             </Box>
//             <CreateCategoryDialog open={openCreateCategoryDialog} onClose={closeCreateCategoryDialog}/>
//             <CreateQuestionDialog open={openCreateQuestionDialog} onClose={closeCreateQuestionDialog}/>
//         </>
//     )
//
// }
//
// AdminHomePage.authPattern = {requireAuth: true, requireEmptyToken: false}
//
// export default AdminHomePage
//

const AdminHomePage = () => {
    return (
        <h1>Home</h1>
    )
}

AdminHomePage.authPattern = {requireAuth: true, requireEmptyToken: false}

export default AdminHomePage
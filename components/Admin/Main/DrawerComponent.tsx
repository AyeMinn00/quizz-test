import {Box, Divider, Drawer} from "@mui/material";
import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import {NavItem, useNavItems} from "../../../constants/navs";
import {NavbarItem} from "./NavBarItem";
import {sameLink} from "../../../utils/util";
import {useRouter} from "next/router";

export interface DrawerComponentProps {
    drawerWidth: number
    mobileOpen: boolean
    handleDrawerToggle: () => void
    handleListItemClick: () => void
}

export const DrawerComponent = (props: DrawerComponentProps) => {
    const {drawerWidth, mobileOpen, handleDrawerToggle, handleListItemClick} = props
    const navItems = useNavItems()
    const router = useRouter()

    const drawer = (
        <div>
            <Toolbar/>
            <Divider/>
            {
                navItems.map((item: NavItem, index: number) => (
                    <NavbarItem key={index}
                                name={item.name}
                                link={item.link}
                                selected={sameLink(item.link, router)}
                                handleClick={handleListItemClick}/>
                ))
            }
        </div>
    )

    return (
        <Box
            component="nav"
            sx={{
                width: {sm: drawerWidth},
                flexShrink: {sm: 0}
            }}>
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: {xs: 'block', sm: 'none'},
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                }}>
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: {xs: 'none', sm: 'block'},
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                }}
                open>
                {drawer}
            </Drawer>
        </Box>
    )
}
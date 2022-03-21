import {Grid} from '@mui/material'
import * as React from 'react'
import {ContainerComponent} from '../../components/Container';
import appService from "../../data/services/service";
import {CategoryItem} from './CategoryItem';
import {CategoryModel} from "../../data/types";
import {Box} from "@mui/system";


const CategoriesList = ({categories}: { categories: CategoryModel[] }) => {

    return (
        <ContainerComponent>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Grid container spacing={3}
                      sx={{
                          maxWidth: 'lg',
                      }}>
                    {
                        categories?.map((item: CategoryModel) => {
                            return (
                                <Grid item xs={12} md={6} lg={4} key={item.id}>
                                    <CategoryItem category={item}/>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        </ContainerComponent>
    )
}

export async function getServerSideProps() {

    const res = await appService.getCategories()

    return {
        props: {
            categories: res
        }
    }
}


export default CategoriesList
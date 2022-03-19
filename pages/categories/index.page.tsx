import { Grid } from '@mui/material'
import * as React from 'react'
import { ContainerComponent } from '../../components/Container';
import appService from "../../data/services/service";
import { Category, CategoryItem } from './CategoryItem';


const CategoriesList = ({ categories }: { categories: Category[] }) => {

    return (
        <ContainerComponent>
            <Grid container spacing={3}>
                {
                    categories?.map((item: Category) => {
                        return (
                            <Grid item xs={12} md={6} lg={4} key={item.id}>
                                <CategoryItem category={item} />
                            </Grid>
                        )
                    })
                }
            </Grid>
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
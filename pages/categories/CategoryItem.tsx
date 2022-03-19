import * as React from 'react';
import { Link, Paper, Typography } from "@mui/material"
import { styled } from "@mui/system"
import { useLinks } from "../../constants/links"

export type Category = {
    id: number
    name: string
}

const CategoryPaper = styled(Paper)({
    border : '2px solid #eee',
    borderRadius: '16px',
    padding: '24px',
    '&:hover':{
        border : '2px solid #ccc',
    }
});


export const CategoryItem = ({ category }: { category: Category }) => {

    const links = useLinks()

    return (
        <div>
            <Link href={`${links.questions}?category=${category.id}`} underline="none">

                <CategoryPaper variant="outlined" >
                    <Typography noWrap variant="h5" component="div" mb={1}>
                        {category.name}
                    </Typography>
                    <span>25 questions</span>

                </CategoryPaper>
            </Link>
        </div>
    )
}

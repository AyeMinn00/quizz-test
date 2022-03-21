import * as React from 'react';
import {Link, Paper, Typography} from "@mui/material"
import {styled} from "@mui/system"
import {useLinks} from "../../constants/links"
import {CategoryModel} from "../../data/types";

const CategoryPaper = styled(Paper)({
    border: '2px solid #eee',
    borderRadius: '16px',
    padding: '24px',
    '&:hover': {
        border: '2px solid #ccc',
    }
});


export const CategoryItem = ({category}: { category: CategoryModel }) => {

    const links = useLinks()

    return (
        <div>
            <Link href={`${links.questions}?category=${category.id}`} underline="none">

                <CategoryPaper variant="outlined">
                    <Typography noWrap variant="h6" fontSize={18} component="div" mb={1}>
                        {category.name}
                    </Typography>
                    {
                        category.totalquestions > 0 ?
                            <span>
                                {category.totalquestions}
                                {
                                    category.totalquestions == 1 ? ` question` : ` questions`
                                }
                            </span>
                            :
                            <span>No question</span>
                    }

                </CategoryPaper>
            </Link>
        </div>
    )
}

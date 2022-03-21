import {CategoryModel} from "../../../data/types";
import {
    IconButton,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const Categories = ({categories}: { categories: CategoryModel[] }) => {

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography variant="subtitle1" fontSize="16px"
                                        fontWeight="bold">Name</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="subtitle1" fontSize="16px"
                                        fontWeight="bold">
                                No of Questions
                            </Typography>
                        </TableCell>
                        <TableCell/>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map((cat: CategoryModel) => (
                                <TableRow key={cat.id}>
                                    <TableCell>
                                        <Typography variant="subtitle1" fontSize="14px"
                                                    fontWeight="medium">{cat.name}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle1" fontSize="14px"
                                                    fontWeight="medium">{cat.totalquestions}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Stack direction="row" spacing={0.5}>
                                            <IconButton aria-label="delete">
                                                <DeleteIcon/>
                                            </IconButton>
                                            <IconButton aria-label="edit" >
                                                <EditIcon/>
                                            </IconButton>
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            )
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}
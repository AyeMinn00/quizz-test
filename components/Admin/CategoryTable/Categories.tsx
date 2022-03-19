import {CategoryModel} from "../../../data/types";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React from "react";

export const Categories = ({categories}: { categories: CategoryModel[] }) => {

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>No of Questions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map((cat: CategoryModel) => (
                                <TableRow key={cat.id}>
                                    <TableCell>{cat.name}</TableCell>
                                    <TableCell>29</TableCell>
                                </TableRow>
                            )
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}
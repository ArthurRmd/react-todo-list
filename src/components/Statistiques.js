import React from "react";
import {Container, Grid} from "@mui/material";


const Statistiques = ({todos}) => {

    return (
        <div>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <h3>Number total task : {todos.length}</h3>
                    </Grid>
                    <Grid item xs={4}>
                        <h3>Number completed task : {todos.filter(todo => todo.completed).length}</h3>
                    </Grid>
                    <Grid item xs={4}>
                        <h3>Number completed task : {todos.filter(todo => !todo.completed).length}</h3>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Statistiques
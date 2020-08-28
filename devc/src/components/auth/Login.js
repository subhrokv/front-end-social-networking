import React, { useState, useEffect, Fragment } from 'react'
import { Grid, TextField, makeStyles, Paper, Typography, Button } from '@material-ui/core'
import {useForm, Form} from './useForm'
import * as employeeService from '../../components/services/employeeService'
import Controls from '../../components/controls/Controls'
import Showcase from "./img/showcase.jpg";

export default function Login() {

    const{
        values,
        setValues,
        handleInputChange
      }=useForm();
      
    return (
        
        <Form>
            <div className="showcase" style={{ backgroundImage: "url(" + Showcase+")" }}></div>
            <Typography color="primary" xs={6}>
                Welcome!
            </Typography>
            <Grid container>
                
                <Grid item xs={6}>
                <Controls.Input
                name="fullName"
                label="User Name"
                value={setValues.fullName}
                onChange={handleInputChange} />
                <Controls.Input
                label="E-Mail"
                name="email"
                value={setValues.email}
                onChange={handleInputChange}
                />
                <Controls.Input
                label="Password"
                name="password"
                value={setValues.password}
                onChange={handleInputChange}
                />
                <Grid item xs={6}></Grid>
                <Button variant="contained" color="primary" href="./Profile">
                Login
                </Button>
                
                </Grid>
            </Grid>     
        </Form>
    )
}



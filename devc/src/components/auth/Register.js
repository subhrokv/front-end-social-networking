import React, { useState, useEffect } from 'react'
import { Grid, TextField, makeStyles, Paper, Button, Typography } from '@material-ui/core'
import {useForm, Form} from './useForm'
import * as employeeService from '../../components/services/employeeService'
import Controls from '../../components/controls/Controls'
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { FormControl, FormControlLabel, Checkbox as MuiCheckbox} from '@material-ui/core'


const genderItems = [
  {id:'male',title:'Male'},
  {id:'female',title:'Female'},
  {id:'other',title:'Other'}
]

const initialFValues = {
    id :0,
    fullName:'',
    email:'',
    password:'',
    mobile:'',
    city:'',
    gender:'male',
    hireDate:new Date(),
    
}

export default function Register(){

    
  

    const{
      values,
      setValues,
      handleInputChange
    }=useForm(initialFValues);
    
    let imgUrl = './img/showcase.jpg'
    
   

    return (
      <Paper elevated={6}>
        <Form>
          <Grid container>
            <Grid item xs={6}>
            <Typography color="primary">
              Create Your Account
            </Typography>
              <Controls.Input
              name="fullName"
              label="Full Name"
              value={values.fullName}
              onChange={handleInputChange} />
              <Controls.Input
              label="E-Mail"
              name="email"
              value={values.email}
              onChange={handleInputChange}
              />      
            <Controls.Input
              name="password"
              label="Password"
              value={values.password}
              onChange={handleInputChange} />
              </Grid>
            <Grid item xs={6}>
              <Controls.RadioGroup
              name="gender"
              label="Gender"
              value={values.gender}
              onChange={handleInputChange}
              items={genderItems}
              />
             <Grid item xs={6}> 
             <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker disableToolbar variant="inline" inputVariant="outlined"
            label="Joining Date"
            format="MM/dd/yyyy"
            value={values.KeyboardDatePicker}
            onChange={handleInputChange}
            />
            </MuiPickersUtilsProvider>
            <FormControl>
            <FormControlLabel
            control={<MuiCheckbox
              color="primary"
              checked={values.Checkbox}
              onChange={handleInputChange}
              />}
              label="Permanent Employee" />
              </FormControl>
              <Button
              variant="outlined"
              color="secondary"
              href="./login">
                Create Account
              </Button>
             </Grid>
            </Grid>
          </Grid>
        </Form>
      </Paper>
    )
}



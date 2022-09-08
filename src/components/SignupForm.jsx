import React from 'react'
import { Grid, Paper, Button, Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
// const axios = require('axios')

const SignupForm = () => {

    const initialValues = {
        username: '',
        password: '',
        confirmPassword:''
    }
    const validationSchema = Yup.object().shape({
      username: Yup.string().min(6, "Too short").required("Required"),
      password: Yup.string().min(6, "Password must be a minimum of 6 characters").required("Required"),
      confirmPassword:Yup.string().oneOf([Yup.ref('password')],"Passwords do not match").required('Required')
    })
    const onSubmit = (values, props) => {

        const userData = {
          username: values.username,
          password: values.password
        }

        axios.post('/users', userData)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });    

        props.resetForm();
    }
    
    return (
    <Grid >
      <Paper elevation={0} style={{ padding: '0 10px 5px', width: '250px' }}>
        <Grid align='center' mb='10px'>
          <Typography variant='caption'>Fill in the form to create an account</Typography>
        </Grid>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {(props) => (
          <Form noValidate>
            <Grid mb='10px'>
              <Field as={TextField} name='username' label='Username' fullWidth
                  error={props.errors.username && props.touched.username}
                  helperText={<ErrorMessage name='username' />} required />
            </Grid>
            <Grid mb='10px'>
              <Field as={TextField} name='password' label='Password' type='password' fullWidth
                  error={props.errors.password && props.touched.password}
                  helperText={<ErrorMessage name='password' />} required />
            </Grid>
            <Grid mb='10px'>
              <Field as={TextField} name='confirmPassword' label='Confirm Password' type='password' fullWidth
                  error={props.errors.confirmPassword && props.touched.confirmPassword}
                  helperText={<ErrorMessage name='confirmPassword' />} required />
            </Grid>

              <Button type='submit' variant='contained' sx={{backgroundColor: '#FF9700', fontWeight: 'bolder', '&:hover': {backgroundColor: '#fff', color: '#FF9700'
              }}} >Sign up</Button>
          </Form>
            )}
        </Formik>
      </Paper>
    </Grid>
    )
}

export default SignupForm;
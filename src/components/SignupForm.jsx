import React from 'react'
import { Grid, Paper, Button, Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const SignupForm = () => {
    const passwordRegExp=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword:''
    }
    const validationSchema = Yup.object().shape({
      firstName: Yup.string().min(1, "Too short").required("Required"),
      lastName: Yup.string().min(1, "Too short").required("Required"),
      email: Yup.string().email("Enter valid email").required("Required"),
      password: Yup.string().min(8, "Password must be a minimum of 8 characters")
      .matches(passwordRegExp,"Password requirements: Atleast 1 uppercase, 1 lower case, 1 number, and special symbol").required('Required'),
      confirmPassword:Yup.string().oneOf([Yup.ref('password')],"Passwords do not match").required('Required')
    })
    const onSubmit = (values, props) => {

        alert(JSON.stringify(values), null, 2)
        props.resetForm()
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
              <Field as={TextField} name='firstName' label='First Name' fullWidth
                  error={props.errors.name && props.touched.name}
                  helperText={<ErrorMessage name='firstName' />} required />
            </Grid>
            <Grid mb='10px'>
              <Field as={TextField} name='lastName' label='Last Name' fullWidth
                  error={props.errors.name && props.touched.name}
                  helperText={<ErrorMessage name='lastName' />} required />
            </Grid>
            <Grid mb='10px'>
              <Field as={TextField} name='email' label='Email' fullWidth
                  error={props.errors.email && props.touched.email}
                  helperText={<ErrorMessage name='email' />} required />
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
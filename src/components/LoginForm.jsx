import React from 'react'
import { Grid, Paper, Button, Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const LoginForm = () => {
    const passwordRegExp=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    const initialValues = {
        email: '',
        password: '',
    }
    const validationSchema = Yup.object().shape({
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
          <Typography variant='caption'>Enter your email and password</Typography>
        </Grid>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {(props) => (
          <Form noValidate>
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
              <Button type='submit' variant='contained' sx={{backgroundColor: '#FF9700', fontWeight: 'bolder', '&:hover': {backgroundColor: '#fff', color: '#FF9700'
              }}} >Login</Button>
          </Form>
            )}
        </Formik>
      </Paper>
    </Grid>
    )
}

export default LoginForm;
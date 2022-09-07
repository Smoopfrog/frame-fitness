import React from 'react'
import { Grid, Paper, Button, Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const LoginForm = () => {
    const initialValues = {
        username: '',
        password: '',
    }
    const validationSchema = Yup.object().shape({
      username: Yup.string().min(6).required("Required"),
      password: Yup.string().min(8).required("Required")
    })
    const onSubmit = (values, props) => {
        
        console.log(JSON.stringify(values))
        props.resetForm()
        
    }
    return (
    <Grid >
      <Paper elevation={0} style={{ padding: '0 10px 5px', width: '250px' }}>
        <Grid align='center' mb='10px'>
          <Typography variant='caption'>Enter your username and password</Typography>
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
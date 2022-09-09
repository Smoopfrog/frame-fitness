import React from 'react';
import { Grid, Paper, Button, Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const LoginForm = ({ setUser }) => {

  const initialValues = {
    username: '',
    password: '',
  }
  const validationSchema = Yup.object().shape({
    password: Yup.string().required("Required")
  })
  const onSubmit = async (values, props) => {
    const username = values.username;
    const password = values.password;

    await axios.get('/users')
      .then(function (response) {
        const validUser = response.data.users.find(user => {
          if (user.username === username && user.passhash === password) {
            return user
          }
        })
        if (!validUser) alert('Invalid credentials')
        setUser(validUser)
      })
      .catch(function (error) {
        console.log(error);
      });
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
              <Button type='submit' variant='contained' sx={{
                backgroundColor: '#FF9700', fontWeight: 'bolder', '&:hover': {
                  backgroundColor: '#fff', color: '#FF9700'
                }
              }} >Login</Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  )
}

export default LoginForm;
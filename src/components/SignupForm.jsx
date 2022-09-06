import React, { useContext, useState } from 'react'
import { Grid, Paper, Button, Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { AccountContext } from './AccountContext';
import { useNavigate } from "react-router";

const SignupForm = () => {
  const [error, setError] = useState(null);
  const  setUser = useContext(AccountContext);
  const navigate = useNavigate();
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
      email: Yup.string().email("Enter a valid email").required("Required"),
      password: Yup.string().min(8, "Password must be a minimum of 8 characters").required("Required"),
      confirmPassword:Yup.string().oneOf([Yup.ref('password')],"Passwords do not match").required('Required')
    })
    const onSubmit = (values, props) => {
        const vals = { ...values };
        alert(JSON.stringify(values), null, 2)
        props.resetForm()
        fetch('/auth/signup', {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(vals),
        }).catch(err => {
          return;
        })
        .then(res => {
          if (!res || !res.ok || res.status >= 400) {
            return;
          }
          return res.json();
        })
        .then(data => {
          if (!data) return;
          setUser({...data});
          if(data.status) {
            setError(data.status)
          } else if (data.loggedIn) {
            navigate('/')
          }
        })
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
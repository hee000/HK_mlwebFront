import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography
} from '@material-ui/core';
import FacebookIcon from '../icons/Facebook';
import GoogleIcon from '../icons/Google';

import axios from 'axios'
import { logIn, logOut } from '../_reduxmodules/loginstore';
import { useSelector, useDispatch } from 'react-redux';



const Login = () => {
  const navigate = useNavigate();
  const loginstate = useSelector(state => state.loggin);
  const dispatch = useDispatch();
  const logIn_ = (email, password) => dispatch(logIn(email, password));
  const logOut_ = () => dispatch(logOut());


  return (
    <>
      <Helmet>
        <title>Login | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: 'demo@test.email.io',
              password: 'Password123'
            }}
            validationSchema={Yup.object().shape({
              // email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
              password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={(values) => {

              // // navigate('/app/dashboard', { replace: true });
              // axios.post("http://localhost:4000/p", {
              //   username: "test",
              //   password: "password"
              // })
              // .then(function (response) {
              //     // response  
              // }).catch(function (error) {
              //     // 오류발생시 실행
              // }).then(function() {
              //     // 항상 실행
              // });

              axios.get("http://localhost:4000/login", {
                params: {
                    email: values.email,
                    password : values.password
                  }        
              })
              .then(function (response) {
                  // response  
                  logIn_(values.email, values.password);
                  navigate('/app/dashboard', { replace: true });
                  // console.log("로그인성공");
              }).catch(function (error) {
                  // 오류발생시 실행
                  console.log(error);
                  alert("아이디 혹은 비밀번호가 불일치")
                  console.log("로그인실패");
              }).then(function() {
                  // 항상 실행
              });
    


              // logOut_();
              // console.log(loginstate);
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Sign in
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Sign in on the internal platform
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  // type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    // disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign in now
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Don&apos;t have an account?
                  {' '}
                  <Link component={RouterLink} to="/register" variant="h6" underline="hover">
                    Sign up
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Login;

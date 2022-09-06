import LoginForm from '../../src/components/LoginForm';

const validateLogin = (req, res) => {
  LoginForm
    .validate(req.body)
    .catch(error => {
      res.status(422).send()
      console.log(error.errors);
    })
    .then(valid => {
      if (valid) {
        console.log("Login form is validated")
      }
    });
}

module.exports = validateLogin;
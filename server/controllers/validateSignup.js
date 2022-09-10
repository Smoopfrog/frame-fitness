// import SignupForm from '../../src/components/SignupForm';

const validateSignup = (req, res) => {
  SignupForm
    .validate(req.body)
    .catch(error => {
      res.status(422).send()
      console.log(error.errors);
    })
    .then(valid => {
      if (valid) {
        console.log("Signup form is validated")
      }
    });
}

module.exports = validateSignup;
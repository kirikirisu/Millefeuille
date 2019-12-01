interface ErrorMessage {
  email?: string;
  password?: string;
}

const validate = (values) => {
  // https://stackoverflow.com/questions/45339065/typescript-empty-object-for-a-typed-variable
  const errors: ErrorMessage = {};

  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be 8 or more characters';
  }
  return errors;
};

export default validate;

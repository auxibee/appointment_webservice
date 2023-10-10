const yup = require('yup');

const AccountSchema = yup.object({
  body: yup.object({
    email: yup.string().email().required('Email cannot be blank'),
    password: yup.string().required('Password cannot be blank'),
  }),
});

module.exports = AccountSchema;

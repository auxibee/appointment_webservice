const validate = (schema) => async (req, res, next) => {
  await schema.validate({
    body: req.body,
  });
  next();
};

module.exports = validate;


exports.index = async (req, res) => {
  try {
   res.json('HOME PAGE')
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      message: transValidation.input_incorrect,
    });
  }
};

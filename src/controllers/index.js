
exports.index = async (req, res) => {
  try {
   res.json('HOME PAGE')
  } catch (error) {
    res.json('Loi catch')
  }
};

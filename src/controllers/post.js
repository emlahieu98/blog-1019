exports.index = async (req, res) => {
  try {
    res.json("POST PAGE");
  } catch (error) {
    res.json("Loi catch");
  }
};

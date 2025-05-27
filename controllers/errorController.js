exports.causeError = (req, res, next) => {
  try {
    // Force a 500 error
    throw new Error("This is an intentional server error.");
  } catch (err) {
    next(err); // Pass the error to the error handling middleware
  }
};

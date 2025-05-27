async function causeIntentionalError(req, res, next) {
  try {
    throw new Error("Intentional server error for testing");
  } catch (error) {
    next(error);
  }
}

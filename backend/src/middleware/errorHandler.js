export function errorHandler(error, req, res, next) {
  console.error("[Server Error]", error);

  return res.status(500).json({
    success: false,
    message: "Internal server error"
  });
}

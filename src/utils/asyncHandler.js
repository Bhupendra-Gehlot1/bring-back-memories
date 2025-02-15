const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

// const asyncHandler = (requestHandler) => async (err, req, res, next) => {
//   try {
//     await requestHandler(req, res, next);
//   } catch (error) {
//     req.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };


export default asyncHandler;
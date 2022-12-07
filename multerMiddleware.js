import multer from"multer";

const upload = multer().any()
export const multerMiddleware =  async (req, res, next) => {
  try {
    await upload(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ message: "multer error" })
      } else if(err) {
        return res.status(400).json({ message: "something error" })
      }
      next()
    })
  } catch(err) {
    console.log(err)
  }
}


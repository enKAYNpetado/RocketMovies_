const { Router } = require("express")
const multer = require("multer")
const uploadConfig = require("../configs/upload")

const UsersController = require("../controllers/UsersController")
const UserAvatarController = require("../controllers/UserAvatarController")
const ensureAuthenticated = require("../middlewares/esnsureAuthencticated")


const usersRoutes = Router()
const upload = multer(uploadConfig.MULTER)

/*function myMiddleware(request, response, next) {
  console.log("você passou pelo Middleware!")
  if (!request.body.isAdmin) {
    return response.json({ message: "user unauthorized" })
  }
  next()
}*/

const usersController = new UsersController()
const userAvatarController = new UserAvatarController()

usersRoutes.post("/", usersController.create)
usersRoutes.put("/:id", usersController.update)
usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  upload.single("avatar"),
  userAvatarController.update
)

module.exports = usersRoutes

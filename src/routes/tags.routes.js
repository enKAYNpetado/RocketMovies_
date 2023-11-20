const { Router } = require("express")

const TagsController = require("../controllers/TagsController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const tagsRoutes = Router()

const tagsController = new TagsController()

tagsRoutes.get("/", ensureAuthenticated, tagsController.index)
//tagsRoutes.get("/:user_id", ensureAuthenticated, tagsController.index) NÃO PRECISA MAIS DISSO
//notesRoutes.post("/:user_id", notesController.create)
//notesRoutes.get("/:id", notesController.show)
//notesRoutes.delete("/:id", notesController.delete)

module.exports = tagsRoutes

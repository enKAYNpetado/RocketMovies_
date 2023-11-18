const knex = require("../database/knex")

class TagsController {
  async index(request, response) {
    const { user_id } = request.params

    const tags = await knex("tags").where({ user_id }) // pode colocar user_id: user_id, nesse caso não precisa já que os nomes são iguais

    return response.json(tags)
  }
}

module.exports = TagsController

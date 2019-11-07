const PersonService = require('./person-service')

module.exports = class Service {
  constructor(model) {
    this.model = model;
   }

   async add(item) {
    return this.model.create(item)
  }

  async delete(id) {
    return this.model.remove({id})
   }

  async find(id) {
    return this.model.findOne(id).populate('owner')
  }

  async findAll(options = {}) {
    return this.model.find(options).populate('owner')
  }

};

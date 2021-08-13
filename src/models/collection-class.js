'use strict';

class Collection{
  constructor(model){
    this.model = model;
  }
  async create(obj){
    try{
      return await this.model.create(obj);
    }catch(e){
      console.error('error while creating the new record for the model:', this.model.foodType, this.model.foodName);
    }
  }

  async read(id){

    try{
      let record = null;
      if(id){
        record = await this.model.findOne({where:{id:id}});
      }else{
        record = await this.model.findAll();
      }
      return record;
    }catch(e){
      console.error('error while reading the record(s) for the model:',this.model.foodType,this.model.foodName,`id: ${id}`);
    }
  }

  async update(id,obj){

    try{
      let recordById = await this.model.findOne({where:{id:id}});
      let updated =  await recordById.update(obj);
      return updated;
    }catch(e){
      console.error('error while updating the record for the model:',this.model.foodType,this.model.foodName,`id: ${id}`);
    }
  }

  async delete(id){

    if (!id) throw new Error ('No id is provided for the model !!',this.model.foodType,this.model.foodName);

    try{
      let deleted =  await this.model.destroy({where:{id:id}});
      return deleted;
    }catch(e){
      console.error('error while deleting the record from the model:', this.model.foodType,this.model.foodName,`id: ${id}`);
    }
  }
}

module.exports=Collection;
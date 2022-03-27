const Item = require("../models/ItemModel");

const ItemRepository ={};

ItemRepository.getAllItems= async ()=>{
    return await Item.find();
};

ItemRepository.newItem= async (payload)=>{
    const item = new Item(payload);
    return await item.save();
}

ItemRepository.findById= async (id)=>{
    return await Item.findById(id);
}

ItemRepository.replaceItemByID = async (id,payload)=>{
    return await Item.findByIdAndUpdate(id,payload);
}
ItemRepository.updateItemByID = async (id,payload)=>{
    return await Item.findByIdAndUpdate(id,payload);
}

ItemRepository.deleteItemByID = async (id)=>{
    return await Item.findByIdAndDelete(id);
}
module.exports = ItemRepository;
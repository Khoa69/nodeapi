const ItemRepository = require("../repository/ItemRepository");

const ItemController= {};

ItemController.getAllItems = async (req, res,next) =>{
    const items = await ItemRepository.getAllItems();

    res.status(200).json({items});
}

ItemController.newItem = async (req, res, next) =>{

    ItemRepository.newItem(req.body);

    res.status(201).send(JSON.stringify({
        success:true,
        notice:"Create Success"
    }));
}

ItemController.findById = async (req, res, next) =>{
    const item = await ItemRepository.findById(req.params.id);
    res.status(200).json({item});
}

ItemController.replaceItem = async (req, res, next) =>{
    const item = await ItemRepository.replaceItemByID(req.params.id,req.body);
    res.status(200).send(JSON.stringify({
        success:true,
        notice:"Replace Success",
        data:item
    }));
}

ItemController.updateItem = async (req, res, next) =>{
    const item = await ItemRepository.updateItemByID(req.params.id,req.body);
    res.status(200).send(JSON.stringify({
        success:true,
        notice:"Update Success",
        data:item
    }));
}

ItemController.deleteItem= async(req,res,next)=>{
    const item = await ItemRepository.deleteItemByID(req.params.id);
    res.status(200).send(JSON.stringify({
        success:true,
        notice:"Delete Success",
        data:item
    }));
};


module.exports =ItemController;
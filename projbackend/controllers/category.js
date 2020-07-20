const Category = require("../models/category")


exports.getCategoryById = (req,res,next,id) => {

    Category.findById(id).exec((err,cate) => {
        if(err){
            return res.status(400).json({
                error:"Category Not Found In DB"
            })
        }
        req.category = cate;
        next();
    });
    
};

exports.createCategory = (req,res) => {
    const category = new Category(req.body);
    category.save((err,category)=> {
        if(err){
            return res.status(400).json({
                error:"Not able to save category In DB"
            })
        }
        res.json({category});
    });
};


exports.getCategory = (req,res) => {
    return res.json(req.category)
}

exports.getAllCategory = (req,res) => {
    Category.find().exec((err,categories) => {
        if(err){
            return res.status(400).json({
                error:"NO Categories found"
            });
        }
        res.json(categories);
    });
};

exports.updateCategory = (req,res) => {
    const category =req.category;
    category.name = req.body.name;

    category.save((err,updatedCategory) => {
        if(err){
            return res.status(400).json({
                error:"failed to update category"
            });
        }
        res.json(updatedCategory);
    })
}

exports.removeCategory =(req,res) => {
    const category = req.category;
    category.remove((err,category)=> {
        if(err){
            return res.status(400).json({
                error:"failed to delete category"
            });
        }
        res.json({
            message:` ${category} Successfully Deleted `
        })
    })
}
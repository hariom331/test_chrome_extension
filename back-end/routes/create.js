const express = require('express');
const { findByIdAndUpdate, findById } = require('../models/Data');
const router = express.Router();
const Data = require('../models/Data');
const Image = require('../models/Image');



//Store Data to DB using POST
router.post('/',(req,res)=>{
    try{console.log(req.body);
     const data = Data({
         name:req.body.name,
         email:req.body.email,
         code:req.body.code
    });
    data.save();
    res.status(200).send({
        success:true,
        id:data._id
    });}
    catch(e){
        console.log(e);
    }
})


//Update images in DB using PUT 
router.put('/',async(req,res)=>{
    const id = req.body.id;
    const image = Image({
        url : req.body.img_url
    });
    image.save();
    console.log(image);
    const toSave = image._id;
    console.log(toSave);
    const data = await Data.findByIdAndUpdate(id,{$push :{imgs : toSave}});
    // const data = await findByIdAndUpdate(id,{});
    // console.log(data);
    // const data = await Data.findByIdAndUpdate(id, {$push :{imgs : obj}},function(err,success){
    //     if(err){
    //         console.log(err);
    //     }else{
    //         console.log(success);
    //     }
    // console.log(data);
    // });
    res.status(200).send(req.body);
})



//Get all the user data to Admin through GET
router.get('/',async(req,res)=>{
    const data = await Data.find();
    console.log(data);
    res.status(200).send(data);
})


//Get corresponding images for a user through GET
router.get('/images/:id',async(req,res)=>{
    let data =[];
    const id = req.params.id;
    const user = await Data.findById(id);
    const img = user.imgs;
    for(let i=1;i<=img.length;i++)
    {
        let newImage = await Image.findById(img[i]);
        data.push(newImage);
    }
    res.status(200).send(data);
})


module.exports= router;
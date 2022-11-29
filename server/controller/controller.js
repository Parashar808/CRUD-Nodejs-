var crud1=require('../model/model');

exports.create=(req,resp)=>{
    if(!req.body){
        resp.status(400).send({message:"content cant be empty!"});
    }

    const user=new crud1({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    })
    user
        .save(user)
        .then(data=>{
            // resp.send(data)
            resp.redirect('/add-user');
        })
        .catch(err=>{
            resp.status(500).send({
                message:err.message||"Some error"
            });
        });
}
exports.find=(req,resp)=>{
    if(req.query.id){

        const id=req.query.id;
        crud1.findById(id)
        .then(data=>{
            if(!data){
                resp.status(404).send({message:"cannot find"})
            }else{
                resp.send(data)
            }
        })
        .catch(err=>{
            resp.status(500).send({message:"error"})
        })


    }
    else{
    crud1.find()
    .then(user=>{
        resp.send(user)
    })
    .catch(err=>{
        resp.status(500).send({message:err.message||"error"})
    })

    }}


exports.update=(req,resp)=>{
    if(!req.body){
        return resp.status(400).send({message:'data to enter cant be empty baklol'})
    }

    const id=req.params.id;
    crud1.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data=>{
        if(!data){
            resp.status(404).send({message:"cannot update"})
        }else{
            resp.send(data)
        }
    })
    .catch(err=>{
        resp.status(500).send({message:"error"})
    })
}
exports.delete=(req,resp)=>{
    const id=req.params.id;
    crud1.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            resp.status(404).send({message:"cannot update"})
        }else{
            resp.send({message:"deleted successfully!"})
        }

    }).catch(err=>{
        resp.status(500).send({message:"error"});

    });

}


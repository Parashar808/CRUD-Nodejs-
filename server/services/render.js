const axios=require('axios')

exports.homeroute=(req,resp)=>{
    axios.get("http://localhost:3000/api/users")
    .then(function(response){
    resp.render('index',{users:response.data});

    }).catch(err=>{
        resp.send(err);
    })
}

exports.adduser=(req,resp)=>{
    resp.render('add_user');
}

exports.updateuser=(req,resp)=>{
    axios.get("http://localhost:3000/api/users",{params:{id:req.query.id}})
    .then(function(userdata){
        resp.render("update_user",{user:userdata.data})
    })
    .catch(err=>{
        resp.send(err);
    })
    
}
$('#add_user').submit(function(event){
    alert("successfully added");
})

$('#update_user').submit(function(event){
    event.preventDefault();
    var unindexed_array=$(this).serializeArray();
    // console.log(unindexed_array);
    var data={}

    $.map(unindexed_array,function(n,i){
        data[n['name']]=n['value']
    })

    console.log(data);
    var request={
        'url':`http://localhost:3000/api/users/${data.id}`,
        'method':"PUT",
        'data':data
    }
    $.ajax(request).done(function(response){
        alert("updated!");
    })
})

if(window.location.pathname =='/'){
    $ondelete=$(".table tbody td a.delete");
    $ondelete.click(function(){
        var id=$(this).attr("data-id")
        var request={
            "url":`http://localhost:3000/api/users/${id}`,
            'method':"DELETE"
        }

        if(confirm("Do you really want to delete?")){
            $.ajax(request).done(function(response){
                alert("Deleted!");
                location.reload()
            })
        }
    })
}
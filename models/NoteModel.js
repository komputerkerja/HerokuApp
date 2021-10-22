const dbConnection = require('./db_connection');

function create(note){
    return dbConnection("note").insert(note);
}

function all(){
    try{
        return dbConnection("note").select("*");
    }catch(e){
        console.log(e);
    }
}

function destroy(id){
    return dbConnection("note").where("id", id).del();
}

function update(id, note){
    return dbConnection("note").where("id", id).update(note);
}

module.exports = {
    create,update,destroy,all
}
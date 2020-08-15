var delk;
var dele;
var key;
var list=document.getElementById('list');
firebase.database().ref('todowork').on("child_added",function (data){

    var input=document.getElementById('todo');
    var li=document.createElement('li');
    var lit=document.createTextNode(data.val().work);
    li.appendChild(lit);
    console.log(li);
    var deletebtn=document.createElement("button");
    var deltext=document.createTextNode('Delete');
    deletebtn.setAttribute("class","btn btn-danger del");
    deletebtn.setAttribute("onclick","deleteitem(this)");
    deletebtn.setAttribute("id",data.val().key);
    deletebtn.appendChild(deltext);
    li.appendChild(deletebtn);
     
    // list.appendChild(li);
    
    
    var editbtn=document.createElement('button');
    var edittext=document.createTextNode('Edit');
    editbtn.appendChild(edittext);
    editbtn.setAttribute("class","btn btn-info edit");
    editbtn.setAttribute("onclick","edititem(this)");
    editbtn.setAttribute("id",data.val().key);
    
    li.appendChild(editbtn);
    list.appendChild(li);
    

})
function enter(){
    var input=document.getElementById('todo');
        var key1=Math.random()*100;
key = key1.toFixed();
    var tododata= {
        key : key,
work: todo.value,
    }
    console.log(tododata);
    firebase.database().ref('todowork').child(key).set(tododata);
todo.value="";
}
function deleteitem(e){
 e.parentNode.remove();
 firebase.database().ref('todowork').child(e.id).remove();
}

function edititem(e){
    console.log(e.id);
var editValue=prompt("Enter you updated value");
e.parentNode.firstChild.nodeValue=editValue;

var editdata = {
    key : e.id,
work: editValue,
}
console.log(editdata);
firebase.database().ref('todowork').child(e.id).set(editdata);

}

function deleteAll(){
list.innerHTML=" ";
firebase.database().ref('todowork').remove();
}


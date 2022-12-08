let Users=[{"id":11,"name":"Krystyna","email":"kodyvoiea@usa.gov","gender":"Female"},
{"id":12,"name":"Grace","email":"gcobbingb@drupal.org","gender":"Male"},
{"id":13,"name":"Karoline","email":"khubanc@nature.com","gender":"Female"},
{"id":14,"name":"Lissie","email":"lseeneyd@umich.edu","gender":"Female"},
{"id":15,"name":"Annaliese","email":"ajainee@nbcnews.com","gender":"Female"},
{"id":16,"name":"Quintana","email":"qgemlettf@flavors.me","gender":"Female"},
{"id":17,"name":"Cory","email":"ccoatg@ucoz.com","gender":"Female"},
{"id":18,"name":"Shandra","email":"syglesiah@hexun.com","gender":"Female"},
{"id":19,"name":"Bone","email":"bmacgregori@economist.com","gender":"Male"},
{"id":20,"name":"Dayle","email":"dgametj@webmd.com","gender":"Female"}]
function displayUsers(){
    let rows="";
    for(let i=0;i<=Users.length-1;i++){
        rows=rows+`<tr>
        <td>${Users[i].id}</td>
        <td>${Users[i].name}</td>
        <td>${Users[i].email}</td>
        <td>${Users[i].email.substring(Users[i].email.indexOf('@') + 1)}</td>
        <td>${Users[i].gender.slice(0,1)}</td>
        </tr>`
        }
   
    document.getElementById("abc").innerHTML=rows;
    } 
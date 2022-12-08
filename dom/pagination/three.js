let Users=[{"id":21,"name":"Ilysa","email":"iseefusk@chron.com","gender":"Female"},
{"id":22,"name":"Perkin","email":"pedmandsl@shinystat.com","gender":"Male"},
{"id":23,"name":"Mandy","email":"msullym@yandex.ru","gender":"Female"},
{"id":24,"name":"Tracie","email":"tdinann@usnews.com","gender":"Male"},
{"id":25,"name":"Jayme","email":"jhebborno@gmpg.org","gender":"Female"},
{"id":26,"name":"Gilemette","email":"ggorwoodp@stumbleupon.com","gender":"Female"},
{"id":27,"name":"Bevin","email":"bplottq@instagram.com","gender":"Male"},
{"id":28,"name":"Ashia","email":"aspenleyr@discovery.com","gender":"Female"},
{"id":29,"name":"Wayne","email":"wcanass@jalbum.net","gender":"Male"},
{"id":30,"name":"Enrique","email":"eringroset@imgur.com","gender":"Male"}]
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
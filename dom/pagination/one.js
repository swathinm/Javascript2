let Users=[{"id":1,"name":"Kiley","email":"kkilliam0@i2i.jp","gender":"Male"}, 
{"id":2,"name":"Sarena","email":"smathivet1@google.pl","gender":"Female"},
{"id":3,"name":"Jay","email":"jmcknish2@smugmug.com","gender":"Male"},
{"id":4,"name":"Matteo","email":"mhorley3@phpbb.com","gender":"Bigender"},
{"id":5,"name":"Sissy","email":"shearnes4@unblog.fr","gender":"Female"},
{"id":6,"name":"Loutitia","email":"lovesen5@nydailynews.com","gender":"Female"},
{"id":7,"name":"Jolie","email":"jkarlolak6@gnu.org","gender":"Female"},
{"id":8,"name":"Alvie","email":"apoultney7@miibeian.gov.cn","gender":"Male"},
{"id":9,"name":"Ave","email":"ahargey8@cmu.edu","gender":"Male"},
{"id":10,"name":"Gwyneth","email":"ggrantham9@microsoft.com","gender":"Female"}]
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
let a = new Date();

function People(nome, cognome, data){
    this.nome = nome;
    this.cognome = cognome;
    this.data = new Date(data);

    this.getAge = function(){
        var years = (a.getUTCFullYear() - this.data.getUTCFullYear());
        if(a.getMonth() < this.data.getMonth() ||
            data.getMonth == this.data.getMonth()  && d.getDate() <
            this.data.getDate()){
                years--;
            }
            return years;
    }

this.getName = function(){
    return this.nome + "  " + this.cognome;

}
}

let table = document.createElement("table");
var userList = [];
i = 0;

document.addEventListener('submit', function(event){
    event.preventDefault();
    let nome = document.getElementById('nome').value;
    let cognome = document.getElementById('cognome').value;
    let data = document.getElementById('nomeData').value;
    userList.push(x);
    console.log(userlist[1]);
    var trow = document.createElement('tr');
    var td = document.createElement('td');
    var tData = document.createElement('td');
    
    var tdContent = document.createElement(userList[1].getName());

    td.append(tdContent);
    var tdEta = document.createTextNode(userList[1].getAge());
    tData.append(tdEta);
    trow.append(td);
    trow.append(tData);

    Document.getElementById('utenti').append(trow);
    i++;
})


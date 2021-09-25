var container = document.getElementById("info");
var registros= document.getElementById("registros");
var tabla = document.getElementById("tabla");

function buscar(){
    //Limpiamos antes de realizar cualquier acción
    tabla.innerHTML = "";
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(json => MostrarTabla(json, registros.value));
}

function MostrarTabla(info, numerob)
{
    //Insertamos todas las variables a ver e insertamos cada celda o hilera
    var Filas = tabla.insertRow();
    var Id, Color, Texto = Filas.insertCell();

    for(i = 0 ; i < numerob ; i++){
        //Aseguramos la cantidad de columnas que  queremos ver por ID
        var Columnas = [];
        Columnas.push(Filas.insertCell());
        var Filas = tabla.insertRow();

        var Id = Filas.insertCell();
        Id.innerHTML = `<td><p>${info[i].id}</p></td>`;

        var Texto = Filas.insertCell();
        Texto.innerHTML = `<td><p><b>${info[i].title}</b></p></td>`;

        var Color =  Filas.insertCell();
        Color.innerHTML = ` <td><img src = ${info[i].url} width="200" height = "200"></td>`;


    }
}
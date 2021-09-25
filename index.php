<!DOCTYPE html>
<html lang= "es">
    <head>
        <meta charset="utf-8"/>
        <title>Registros</title>
    </head>
    <body>
        <p class="TituloPagina"> Ingrese la cantidad de registros que desea ver:</p>
        
        <label for="registros"></label>
        <input type="number" id="registros"> <br>

        <button type="button" id="Enviar" onclick="buscar()"> Buscar</button>
        
        <h1>Id --------- Titulo ---------------------- Imagen</h1>
            <table
                id="tabla" style="width: 50%;">
            </table>
        <script src="index.js"></script>

    </body>
</html>
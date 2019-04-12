var caption = document.querySelector("caption");
var legenda = caption.querySelector("i");
legenda.textContent = "Eita x Eitchaa"; 
firstcolor = "blue";
secondcolor = "red";

function altrows(firstcolor,secondcolor)
{
    var tableElements = document.getElementsByTagName("table") ;
    for(var j = 0; j < tableElements.length; j++)
    {
        var table = tableElements[j] ;

        var rows = table.getElementsByTagName("tr") ;
        for(var i = 0; i <= rows.length; i++)
        {
            if(i%2==0){
                rows[i].style.backgroundColor = firstcolor ;
            }
            else{
                rows[i].style.backgroundColor = secondcolor ;
            }
        }
    }
}

// var email = "teste";
// email.toUpperCase();
// email.toLocaleLowerCase();
// email.substring(1,3);
// var indiceS = email.indexOf("s");
// email.substring(indiceS);
// email.substring(0, indiceS);

// var temArroba = email.indexOf("@") >= 0;
// if (temArroba) {
//     alert("Email valido!");
// } else {
//     alert("Email invalido!");
// }
// var ehNomeValido = email.trim().length > 0;
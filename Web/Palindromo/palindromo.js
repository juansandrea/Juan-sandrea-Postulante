$(function polindromo(cadena) {
   
        ("La ruta nos aporto otro paso natural");
        ("anita lava la tina");
        ("neuquen");
        ("dabale arroz a la zorra el abad");

    var cadena = prompt("Escribe un palíndromo");

    var resultado = "La cadena \"" + cadena + "\"";

    
    var cadenaOriginal =  cadena.toLowerCase();
	
   
    var letrasEspacios = cadenaOriginal.split(""); 
    
    var cadenaSinEspacios = "";

    for(i in letrasEspacios  ) 
        if(letrasEspacios[i] != " ") {
            cadenaSinEspacios += letrasEspacios[i];
        }
    })
    
    var letras = cadenaSinEspacios.split(""); 
    var letrasReves =  cadenaSinEspacios.split("").reverse();
    console.log(letrasReves);

    
    var iguales = true;

    for(i in letras) {
        if(letras[i] != letrasReves[i]) {
            
            iguales = false;
            break;
        }
    }

    if(iguales) {
        resultado += " es un palíndromo";
    } else {
        resultado += " no es un palíndromo";
    }

    alert(resultado);
;
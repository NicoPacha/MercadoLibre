const cadena = "ebeecaddbbceecebdeadedecddddecddecebeabbbecabdbeddeceabc";

let cantidad = 0;
//Ir descartando las primeras letras , comparar el sufijo con la cadenaOriginal, y contar los caracteres de la palabra semejante

for (i = 0; i <= cadena.length - 1; i++) {
    let sufijo = cadena.substr(i);

    let suma = 0;
    for (f = 0; f <= cadena.length -1; f++) {
        if (cadena.charAt(f) == sufijo.charAt(f)) {
            suma++;
        }
        else {
            break;
        }
    }
    cantidad += suma;
}

console.log(cantidad);

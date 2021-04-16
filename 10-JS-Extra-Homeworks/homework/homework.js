// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let objToMat = Object.entries(objeto);
  return objToMat;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let cuentaCaract = {};
  for (let i = 0; i < string.length; i++) {
    if(!cuentaCaract[string[i]])
      cuentaCaract[string[i]] = 1;
      else cuentaCaract[string[i]]++;
  }
  return cuentaCaract;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let string = s.split("");
  let mayusculas = string.filter(caracter => caracter === caracter.toUpperCase());
  let minusculas = string.filter(caracter => caracter === caracter.toLowerCase());
  return mayusculas.join("") + minusculas.join("");
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let alVesre = [];
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    let cadaPalabra = "";
  for (let j = str[i].length - 1; j >= 0; j--) {
    cadaPalabra += str[i][j];
    }
    alVesre.push(cadaPalabra);
  }
  return alVesre.join(" ");
// } 
// return str.split(" ").map(e => e.split("").reverse().join("")).join(" ");
// --------------------------------------------------------------------------------------------------
  // str = str.split(" ");
  // let ArrayMirror = [];
  // for(let i = 0; i < str.length; i++){
  //   let palabra = "";
  //   for(let j = str[i].length - 1; j >= 0; j--){
  //     palabra += str[i][j];
  //   }
  //   ArrayMirror.push(palabra);
  // }
  //  return ArrayMirror.join(" ");
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  // let invertNum = [];
  // let str = numero.toString();
  // console.log("++++++++++++++++++++++++++++", str);
  // for (let i = 0; i < str.length; i++) {
  //   invertNum.unshift(str[i]);
  // }
  // invertNum = invertNum.toString();
  // console.log("++++++++++++++++++++++++++++", invertNum);
  let str = numero.toString();
  let revStr = str.split("").reverse().join("");
  if (revStr === str) return "Es capicua";
  else return "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let cadenaNueva = cadena.split("").filter(x => x !== "a" && x !== "b" && x !== "c").join("");
  return cadenaNueva;
  // for (let i = 0; i < cadena.length; i++) { 
  //   if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c") cadenaNueva.push(cadena[i]);
  // }
  // return cadenaNueva;
  
  // let newCadena = /[abc]/g;
  // let newString = cadena.replace(newCadena,"");
  // return newString;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
   let mapeado = arr.map((el, i) => { // Creamos una var nueva donde albergamos arr mapeado donde sus índices (i) se vuelven los índices del nuevo obj y sus elementos se vuelven los valores del mismo.
     return {index: i, value: el};
   })
  //  console.log("######", mapeado);
  //  console.log("↕↕↕↕↕↕", mapeado[2].value.length);
   let resultado = mapeado.sort((a, b) => { // creamos la var resultado, donde ordenamos de menor a mayor (a - b) la var mapeado tomando como argumento 2 elementos de la lista y comparándolos por el largo de su valor (ej "You" = 3, "Hola" = 4).
    return a.value.length - b.value.length;
   })
  //  console.log(">>>>>>", resultado);
   resultado = resultado.map((el) => { // Luego volvemos a mapear la var resultado para que nos devuelva el arreglo original ordenado, en lugar de una matriz índice/valor. Retornamos el arr original con los elementos en sus índices nuevos ya ordenados.
     return arr[el.index];
   })
  //  console.log("░░░░░░", resultado)
   return resultado; // Retornamos el arreglo ordenado.
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let filtered = arreglo1.filter(elem => { // Filtramos del arreglo 1 aquellos elementos que se encuentran también en el arreglo 2 y los retornamos.
    return arreglo2.includes(elem);
  })
  return filtered;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};


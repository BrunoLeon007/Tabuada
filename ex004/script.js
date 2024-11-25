const numero = document.querySelector("#numeroUsuario")
const btnTabuada = document.querySelector("#btntabuada")
const resultado = document.querySelector("#res")

function resultadoCalculo(){/*primeiro passo chamar a função*/
  resultado.innerHTML = "" /* limpar tabuada implementada*/
  var numeroConvertido = Number(numero.value)/*chamar uma var (variavel) converter o numero. valor*/

  var inicial = 1
while(inicial <=10){
 
resultado.innerHTML += `<p> ${numeroConvertido} x ${inicial} = ${numeroConvertido * inicial}<p>`
  inicial++

  
}

}
btnTabuada.addEventListener("click", resultadoCalculo)

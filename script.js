const numero = document.querySelector("#numeroUsuario")
const btnTabuada = document.querySelector("#btntabuada")
const resultado = document.querySelector("#res")

function descobrirTabuada() {
  const numeroConvertido = Number(numero.value)  
resultado.innerHTML = `
<p>${numeroConvertido} x 1 = ${numeroConvertido * 1}</p>
<p>${numeroConvertido} x 2 = ${numeroConvertido * 2}</p>
<p>${numeroConvertido} x 3 = ${numeroConvertido * 3}</p>
<p>${numeroConvertido} x 4 = ${numeroConvertido * 4}</p>
<p>${numeroConvertido} x 5 = ${numeroConvertido * 5}</p>
<p>${numeroConvertido} x 6 = ${numeroConvertido * 6}</p>
<p>${numeroConvertido} x 7 = ${numeroConvertido * 7}</p>
<p>${numeroConvertido} x 8 = ${numeroConvertido * 8}</p>
<p>${numeroConvertido} x 9 = ${numeroConvertido * 9}</p>
<p>${numeroConvertido} x 10 = ${numeroConvertido * 10}</p>
`
}
btnTabuada.addEventListener("click", descobrirTabuada)
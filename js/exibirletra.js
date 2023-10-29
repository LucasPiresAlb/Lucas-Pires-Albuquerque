const frase = "Lucas Pires Albuquerque";
const divFrase = document.getElementById("lucas_script");

let i = 0;
function exibirLetra() {
  if (i < frase.length) {
    divFrase.textContent += frase.charAt(i);
    i++;
    setTimeout(exibirLetra, 50);
  } else {
    setTimeout(function() {
      divFrase.textContent = "";
      i = 0;
      exibirLetra();
    }, 2000);
  }
}
exibirLetra();
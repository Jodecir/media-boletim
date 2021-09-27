function exe() {
  var n1 = parseInt(document.getElementById("n1").value); 
  var n2 = parseInt(document.getElementById("n2").value);
  var n3 = parseInt(document.getElementById("n3").value); 
  var n4 = parseInt(document.getElementById("n4").value);

  var result = document.getElementById("result");
  
  var qtdBimestres = 4
  var media = (n1 + n2 + n3 + n4) / qtdBimestres;
  var valorAprovado = 7
  var notaFixada = media.toFixed(1);
  var mediaFaltante = valorAprovado - notaFixada;
  var notaFaltante = mediaFaltante.toFixed(1) * qtdBimestres;
  var notaFaltanteFixada = notaFaltante.toFixed(0);
  
  if (notaFixada >= valorAprovado) {
      result.innerHTML = "Sua média é " + notaFixada + " e você foi Aprovado";
  } else if (notaFixada >= 6) {
      result.innerHTML = "Sua média é " + notaFixada + " e você está em Recuperação por falta de " + notaFaltanteFixada + " pontos";
  } else if (notaFixada >= 0) {
      result.innerHTML = "Sua média é " + notaFixada + " e você foi Reprovado por falta de " + notaFaltanteFixada + " pontos";
  } else {
      result.innerHTML = "Ei!! coloque todos os dados corretamentes.";
    }
}
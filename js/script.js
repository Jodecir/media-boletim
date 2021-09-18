function exe() {
  var n1 = parseInt(document.getElementById("n1").value); 
  var n2 = parseInt(document.getElementById("n2").value);
  var n3 = parseInt(document.getElementById("n3").value); 
  var n4 = parseInt(document.getElementById("n4").value);

  var ok = document.getElementById("ok");
  
  var qtdBimestres = 4
  var media = (n1 + n2 + n3 + n4) / qtdBimestres;
  var valorAprovado = 7
  var notaFixada = media.toFixed(1);
  var mediaFaltante = valorAprovado - notaFixada;
  var notaFaltante = mediaFaltante.toFixed(1) * qtdBimestres;
  var notaFaltanteFixada = notaFaltante.toFixed(0);
  
  if (notaFixada >= valorAprovado) {
      ok.innerHTML = "Sua média é " + notaFixada + " e você foi Aprovado";
  } else if (notaFixada >= 6) {
      ok.innerHTML = "Sua média é " + notaFixada + " e você está em Recuperação por falta de " + notaFaltanteFixada + " pontos";
  } else {
      ok.innerHTML = "Sua média é " + notaFixada + " e você foi Reprovado por falta de " + notaFaltanteFixada + " pontos";
  }
}
function exe() {
  var n1 = parseFloat(document.getElementById("n1").value); 
  var n2 = parseFloat(document.getElementById("n2").value);
  var n3 = parseFloat(document.getElementById("n3").value); 
  var n4 = parseFloat(document.getElementById("n4").value);
  var valorAprovado = parseInt(document.getElementById("valorAprovado").value)

  var result = document.getElementById("result");
  
  var qtdBimestres = 4
  var media = (n1 + n2 + n3 + n4) / qtdBimestres;
  var notaFixada = media.toFixed(1);
  var mediaFaltante = valorAprovado - notaFixada;
  var notaFaltante = mediaFaltante.toFixed(1) * qtdBimestres;
  var notaFaltanteFixada = notaFaltante.toFixed(0);
  
  if (notaFixada < 0 || notaFixada > 10) {
    result.innerHTML = "Informar apenas valores de 0 a 10 nas notas ";
  } else if (notaFixada >= valorAprovado) {
      result.innerHTML = "Sua média é " + notaFixada + " e você foi Aprovado";
  } else if (notaFixada >= 6) {
      result.innerHTML = "Sua média é " + notaFixada + " e você está em Recuperação por falta de " + notaFaltanteFixada + " pontos";
  } else if (notaFixada >= 0) {
      result.innerHTML = "Sua média é " + notaFixada + " e você foi Reprovado por falta de " + notaFaltanteFixada + " pontos";
  } else {
      alert("Preciso de todos os campos preenchidos!!");
  }
}
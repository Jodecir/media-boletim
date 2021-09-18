function exe() {
  var n1 = parseInt(document.getElementById("n1").value); 
  var n2 = parseInt(document.getElementById("n2").value);
  var n3 = parseInt(document.getElementById("n3").value); 
  var n4 = parseInt(document.getElementById("n4").value);
  var qtdBimestres = 4

  var media = (n1 + n2 + n3 + n4) / qtdBimestres;
  var ok = document.getElementById("ok");
  
  if (media >= 7) {
      ok.innerHTML = "Sua média é " + media + " e você foi Aprovado";
  } else if (media >= 5) {
      ok.innerHTML = "Sua média é " + media + " e você está em Recuperação";
  } else {
      ok.innerHTML = "Sua média é " + media + " e você foi Reprovado";
}
}
function exe() {
  var n1 = parseInt(document.getElementById("n1").value); 
  var n2 = parseInt(document.getElementById("n2").value);
  var n3 = parseInt(document.getElementById("n3").value); 
  var n4 = parseInt(document.getElementById("n4").value);
  var media = (n1 + n2 + n3 + n4) / 2;
  var ok = document.getElementById("ok");
  
  if (media >= 7) {
      ok.innerHTML = "Sua média é " + media + " e você foi Aprovado";
  } else {
      ok.innerHTML = "Sua média é " + media + " e você foi Reprovado";
  }
}
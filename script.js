var animateInputEmpty1 = document.getElementById("voto1");
var animateInputEmpty2 = document.getElementById("voto2");
const titulo = document.getElementById("titulo");
var div = document.getElementById("divFoto");
var img = document.createElement("img");
var btnConfirma = document.getElementById("btnConfirma");
var form = document.getElementById("form");
var textNumber = document.getElementById("textNumber");
var confirmVote = document.getElementById("confirmVote");
var soundKey = new Audio("audios/tecla.mp3");
var soundConfirm = new Audio("audios/confirmsound.mp3");


setTimeout(() => {
  animateInputEmpty1.classList.add("inputEmpty");
}, 100);

function click(btn) {
  var buttonClicked = document.getElementById(`n${btn}`);

  buttonClicked.classList.add("click");

  setTimeout(() => {
    buttonClicked.classList.remove("click");
  }, 210);
}

function GetValueInput(valor) {
  click(valor);

  soundKey.play()

  if (document.getElementById("voto1").value == "") {
    animateInputEmpty1.classList.remove("inputEmpty");
    animateInputEmpty2.classList.add("inputEmpty");
    document.getElementById("voto1").value = valor;
  } else if (document.getElementById("voto2").value == "") {
    animateInputEmpty2.classList.remove("inputEmpty");
    document.getElementById("voto2").value = valor;
    var votoFull =
      document.getElementById("voto1").value +
      document.getElementById("voto2").value;
  }
  showName(votoFull);
}

function showName(voto) {
  if (animateInputEmpty1.value !== "" && animateInputEmpty2.value !== "") {
    confirmVote.style.opacity = 1;
    checkVote(voto);
  }
  if (voto == "00" || voto > 57) {
    animateInputEmpty1.style.opacity = 0;
    animateInputEmpty2.style.opacity = 0;
    textNumber.style.opacity = 0;
    titulo.className = "title null";
    titulo.innerHTML = "VOTO EM BRANCO";
  }

}

window.addEventListener("keypress", function (event) {
  
  var inputKeyVote1 = this.document.getElementById("voto1").value;
  var inputKeyVote2 = this.document.getElementById("voto2").value;
  var votoCompleto =
  document.getElementById(`voto1`).value +
  document.getElementById(`voto2`).value;
  var n = 0;
  
  if (inputKeyVote1 == "") {
    animateInputEmpty1.classList.remove("inputEmpty");
    animateInputEmpty2.classList.add("inputEmpty");
    n = 1;
  } else if (inputKeyVote2 == "") {
    animateInputEmpty2.classList.remove("inputEmpty");
    n = 2;
  } else {
  }
  
  if (event.key == "0") {
    soundKey.play()
    document.getElementById(`voto${n}`).value = "0";
  } else if (event.key == "1") {
    soundKey.play()
    document.getElementById(`voto${n}`).value = "1";
  } else if (event.key == "2") {
    soundKey.play()
    document.getElementById(`voto${n}`).value = "2";
  } else if (event.key == "3") {
    soundKey.play()
    document.getElementById(`voto${n}`).value = "3";
  } else if (event.key == "4") {
    soundKey.play()
    document.getElementById(`voto${n}`).value = "4";
  } else if (event.key == "5") {
    soundKey.play()
    document.getElementById(`voto${n}`).value = "5";
  } else if (event.key == "6") {
    soundKey.play()
    document.getElementById(`voto${n}`).value = "6";
  } else if (event.key == "7") {
    soundKey.play()
    document.getElementById(`voto${n}`).value = "7";
  } else if (event.key == "8") {
    soundKey.play()
    document.getElementById(`voto${n}`).value = "8";
  } else if (event.key == "9") {
    soundKey.play()
    document.getElementById(`voto${n}`).value = "9";
    soundKey.play()
  } else {
    animateInputEmpty1.classList.add("inputEmpty");
    animateInputEmpty2.classList.remove("inputEmpty");
    titulo.innerHTML = "";
    confirmVote.style.opacity = 0;
    document.getElementById(`voto1`).value = "";
    document.getElementById(`voto2`).value = "";
    setTimeout(() => {
      this.alert("Somente teclas numéricas\n");
    }, 100);
  }
  if (
    document.getElementById(`voto1`).value !== "" &&
    document.getElementById(`voto2`).value !== ""
  ) {
    showName(
      document.getElementById(`voto1`).value +
        document.getElementById(`voto2`).value
    );
  }
});

function checkVote(numVotado) {
  const projetos = [
    {id: 1, nome: 'Alarme Residencial com Aplicativo'},
    {id: 2, nome: 'App de Avaliação dos Projetos da FETEC'},
    {id: 3, nome: 'Aranha Robô'},
    {id: 4, nome: 'Área de Recreação Kids'},
    {id: 5, nome: 'Arquitetura Escolar'},
    {id: 6, nome: 'Automatização Residencial'},
    {id: 7, nome: 'Bem-Vindo ao Sistema Solar'},
    {id: 8, nome: 'Bobina de Tesla Rítmica'},
    {id: 9, nome: 'Botox: A Ciência e a Indústria da Beleza'},
    {id: 10, nome: 'Bracelete Reabilitador'},
    {id: 11, nome: 'Caixa Sensorial'},
    {id: 12, nome: 'Carolinas Gourmet'},
    {id: 13, nome: 'Centro Tec Meteorológico'},
    {id: 14, nome: 'Cofre Secreto'},
    {id: 15, nome: 'Copa do Bem'},
    {id: 16, nome: 'Criança Feliz'},
    {id: 17, nome: 'Desafio dos Sentidos'},
    {id: 18, nome: 'Detect Metaltec'},
    {id: 19, nome: 'Dissecação'},
    {id: 20, nome: 'Doces da Realeza'},
    {id: 21, nome: 'Doguinhos'},
    {id: 22, nome: 'ECU Test3 Infinity'},
    {id: 23, nome: 'Electric MidiaTec'},
    {id: 24, nome: 'Envasadora de Suco Automatizada'},
    {id: 25, nome: 'Esteira Seletora de Peças'},
    {id: 26, nome: 'EZday'},
    {id: 27, nome: 'Fiesta La Pizza'},
    {id: 28, nome: 'Fliperama'},
    {id: 29, nome: 'Garra Fofucha Eletromagnética'},
    {id: 30, nome: 'Ilusão de Óptica'},
    {id: 31, nome: 'Intelligent Eyes'},
    {id: 32, nome: 'Jornal Etec'},
    {id: 33, nome: 'Kabbum Electric Connect'},
    {id: 34, nome: 'Labirinto Elétrico'},
    {id: 35, nome: 'Lembrancinha com Material Reciclável'},
    {id: 36, nome: 'Lixeira Consciente'},
    {id: 37, nome: 'Maquete Oficina Elétrica'},
    {id: 38, nome: 'Micro-estação Meteorológica'},
    {id: 39, nome: 'Mini Radar'},
    {id: 40, nome: 'Monitoramento e Irrigação Automatizada do Solo'},
    {id: 41, nome: 'Oficina de Artes'},
    {id: 42, nome: 'Olhos em Alerta'},
    {id: 43, nome: 'Parentes verdejantes'},
    {id: 44, nome: 'Party Ice'},
    {id: 45, nome: 'Pista de Corrida de LED'},
    {id: 46, nome: 'Pote do Amor'},
    {id: 47, nome: 'Recepção'},
    {id: 48, nome: 'Saúde em Dia'},
    {id: 49, nome: 'Seta Assertiva'},
    {id: 50, nome: 'Sistema de Projeto da FETEC'},
    {id: 51, nome: 'Small Electric Car'},
    {id: 52, nome: 'Teste Vocacional'},
    {id: 53, nome: 'Tornado Luminoso'},
    {id: 54, nome: 'Trash Collector'},
    {id: 55, nome: 'Uma Trilha de Leds'},
    {id: 56, nome: 'Urna Eletrônica'},
    {id: 57, nome: 'X-Espeto'}
  ];
  let i = 0;
  
  while (i < projetos.length) {
    const { id, nome } = projetos[i];
  
    if (id == numVotado) {
      titulo.innerHTML = nome;
    }
  
    i++;
  }
  
}

function telaFInal() {
  var loading = document.getElementById("loading");
  var textNumber = document.getElementById("textNumber");
  var textTitle = document.getElementById("textTitle");
  var conteudo = document.getElementById("carregado");
  var input1 = document.getElementById("voto1");
  var input2 = document.getElementById("voto2");
  var telaFim = document.getElementById("telaFim");

  textNumber.style.opacity = 0;
  titulo.innerHTML = "";
  textTitle.style.opacity = 0;
  input1.style.opacity = 0;
  input2.style.opacity = 0;
  confirmVote.style.opacity = 0;
  conteudo.className = "carregado animateBarra";
  loading.style.opacity = 1;
  loading.style.zIndex = 10000;

  setTimeout(() => {
    conteudo.className = "carregado";
    loading.style.opacity = 0;
    titulo.style.opacity = 0;
    loading.style.zIndex = -10;
    telaFim.style.opacity = 1;
    telaFim.style.zIndex = 1;
    soundConfirm.play();

    setTimeout(() => {
      telaFim.style.opacity = 0;
      telaFim.style.zIndex = -10;
      window.location.href = "form.php";
    }, 3000);
  }, 600);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  var numero1 = $("input[name=numero1]").val();
  var numero2 = $("input[name=numero2]").val();
  var campoCpf = $("input[name=cpf]").val();
  var valorVoto = numero1 + numero2;
  $.ajax({
    type: "POST",
    data: { voto: valorVoto, cpf: campoCpf },
    url: "connection.php",
    dataType: "html",
  });

});

function confirm() {
  var valorPrimeiraInput = document.getElementById("voto1").value;
  var valorSegundaInput = document.getElementById("voto2").value;
  var valorVotoCompleto = valorPrimeiraInput + valorSegundaInput;
  if (document.getElementById("voto2").value !== ""  ) {
    btnConfirma.setAttribute("type", "submit");
    telaFInal();
  }else{
    alert("Preencha todos os campos ou vote em branco!")
  }
}

function correct() {
  animateInputEmpty1.classList.add("inputEmpty");
  document.getElementById("voto1").value = "";
  document.getElementById("voto2").value = "";
  animateInputEmpty1.style.opacity = 1;
  animateInputEmpty2.style.opacity = 1;
  textNumber.style.opacity = 1;
  confirmVote.style.opacity = 0;
  titulo.className = "title";
  titulo.innerHTML = "";
}

function white() {
  animateInputEmpty1.classList.remove("inputEmpty");
  animateInputEmpty2.classList.remove("inputEmpty");
  document.getElementById("voto1").value = 0;
  document.getElementById("voto2").value = 0;

  showName(document.getElementById(`voto1`).value + document.getElementById(`voto2`).value);
}

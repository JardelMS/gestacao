function calcularIdadeGestacional() {
      var dataInput = document.getElementById('data');
      var data = new Date(dataInput.value);
      var hoje = new Date();

      var diferenca = hoje.getTime() - data.getTime();
      var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
      var semanas = Math.floor(dias / 7);
      var meses = Math.floor(semanas / 4.34812);

      var resultado = document.getElementById('resultado');
      resultado.innerHTML = `Idade gestacional: ${meses} meses <br> Idade gestacional: ${semanas} semanas <br> Idade gestacional: ${dias} dias.`;

      var imagem = document.getElementById('imagem');
      if (meses >= 9) {
        imagem.src = 'img/9_meses.png';
      } else if (meses === 8) {
        imagem.src = 'img/8_meses.png';
      } else if (meses === 7) {
        imagem.src = 'img/7_meses.png';
      } else if (meses === 6) {
        imagem.src = 'img/6_meses.png';
      } else if (meses === 5) {
        imagem.src = 'img/5_meses.png';
      } else if (meses === 4) {
        imagem.src = 'img/4_meses.png';
      } else if (meses === 3) {
        imagem.src = 'img/3_meses.png';
      } else if (meses === 2) {
        imagem.src = 'img/2_meses.png';
      } else if (meses === 1) {
        imagem.src = 'img/1_meses.png';
      } else {
        imagem.src = 'img/default.png';
      }
    }

    // Função para atualizar a contagem regressiva para o parto
    function atualizarContagemRegressiva() {
      var dataAtual = new Date();
      var dataPrevista = new Date("2023-12-31"); // Insira a data prevista para o parto aqui

      var diferenca = dataPrevista.getTime() - dataAtual.getTime();
      var diasRestantes = Math.floor(diferenca / (1000 * 60 * 60 * 24));

      var countdown = document.getElementById('countdown');
      countdown.innerText = diasRestantes + " dias";
    }

    // Chama a função para atualizar a contagem regressiva imediatamente
    atualizarContagemRegressiva();
    // Define um intervalo para atualizar a contagem regressiva a cada 1 segundo (ou conforme necessário)
    setInterval(atualizarContagemRegressiva, 1000);
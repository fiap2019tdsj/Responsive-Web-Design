var titulo = document.querySelector(".titulo");
titulo.textContent = "Banco de Gringotts";

var receitas = document.querySelectorAll(".receita");

var registro = 0;
var saldo = 0.0;

while(registro < receitas.length) {
	var receita = receitas[registro];
	var tdValor = receita.querySelector(".info-valor");
	var tdSaldo = receita.querySelector(".info-saldo");
	valor = parseFloat(tdValor.textContent);
	saldo += valor;

	tdSaldo.textContent = saldo.toFixed(2);

	if (saldo < 0) {
		tdSaldo.classList.add("receita-negativa");
	}
	registro++;
}

var botao = document.querySelector("#adicionar-receita");
botao.addEventListener("click", function(evento) {
	evento.preventDefault();
	var form = document.querySelector("#form-adiciona");
	var descricao = form.descricao.value;
	var categoria = form.categoria.value;
	var data = form.data.value;
	var valor = parseFloat(form.valor.value);
	var msgErros = document.querySelector(".erros");
	msgErros.style.whiteSpace = "pre"; // Necessario para utilizar o \n na string

	limparErros(msgErros);

	var erros = [];

	if (descricao.length <= 0) {
		erros.push("A descrição é obrigatória.\n");
	}

	if (categoria.length <= 0) {
		erros.push("A categoria é obrigatória.\n");
	}

	if (data.length <= 0) {
		erros.push("A data é obrigatória.\n");
	}

	if (isNaN(valor)) {
		erros.push("O valor é obrigatório.\n");
	} else {
		if(valor == 0) {
			erros.push("O valor é obrigatório.\n");
		}	
	}

	var erro = 0;
	if (erros.length > 0) {
		while (erro < erros.length) {
			var li = document.createElement("li");
			li.textContent = erros[erro];
			msgErros.appendChild(li);

			erro++;
		}
	} else {
		var tabelaReceitas = document.querySelector("#tabela-receitas");
		var ultimaReceita = tabelaReceitas.rows[tabelaReceitas.rows.length - 1];

		var novaReceita = tabelaReceitas.insertRow(tabelaReceitas.rows.length);

		novaReceita.classList.add("receita");

		var descricaoReceita = novaReceita.insertCell(0);
		var categoriaReceita = novaReceita.insertCell(1);
		var dataReceita = novaReceita.insertCell(2);
		var valorReceita = novaReceita.insertCell(3);
		var saldoReceita = novaReceita.insertCell(4);

		var ultimoSaldo = parseFloat(ultimaReceita.cells[ultimaReceita.cells.length - 1].textContent);
		descricaoReceita.textContent = descricao;
		categoriaReceita.textContent = categoria;
		dataReceita.textContent = data;
		valorReceita.textContent = valor;
		saldoReceita.textContent = (ultimoSaldo + valor).toFixed(2);

		if ((ultimoSaldo + valor) < 0) {
			saldoReceita.classList.add("receita-negativa");
		}

		form.reset();
	}

});

function limparErros(erros) {
	erros.innerHTML = "";
}
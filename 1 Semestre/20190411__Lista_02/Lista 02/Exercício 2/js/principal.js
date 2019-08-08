var botao = document.querySelector("#btnCadastrar");
botao.addEventListener("click", function(evento) {
    evento.preventDefault();
    var form = document.cadastro;
    var nome = form.nome.value;
    var rg = form.rg.value;
    var cpf = form.cpf.value;
    var endereco = form.endereco.value;
    var genero = form.genero.value;
    var datanasc = form.datanasc.value;
    var situacaoCivil = form.civil.value;
    
    var todosCampos = document.querySelector("#todosCampos");

    todosCampos.textContent += nome + "\n";
    todosCampos.textContent += rg + "\n";
    todosCampos.textContent += cpf + "\n";
    todosCampos.textContent += endereco + "\n";
    todosCampos.textContent += genero + "\n";
    todosCampos.textContent += datanasc + "\n";
    todosCampos.textContent += situacaoCivil + "\n";
});

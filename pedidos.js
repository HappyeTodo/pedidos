document.addEventListener('DOMContentLoaded', function() {
    const botaoFormulario = document.getElementById('botao-form')
    const form = document.getElementById('formulario')
    let linhas = ' '


    form.addEventListener('submit', function(e){
        e.preventDefault();
        adicionaNome();
        atualizaTabela();
        let inputTdlHb = document.getElementById('tdl-hb').value
        
    })
    function adicionaNome (){
        let inputPedido = document.getElementById('pedido').value
        let inputCodCliente = document.getElementById('cliente').value
        let inputNome = document.getElementById('nome').value
        let inputNfe = document.getElementById('nf').value
        let inputTdlHb = document.getElementById('tdl-hb').value
        let inputPagamento = document.getElementById('pagamento').value
    
        let linha = '<tr id="oi">';
        linha += `<td>${inputPedido}</td>`;
        linha += `<td>${inputCodCliente}</td>`;
        linha += `<td>${inputNome}</td>`;
        linha += `<td>${inputPagamento}</td>`;
        linha += `<td>${inputNfe}</td>`;
        linha += `<td id="tdl-ou-hb">${inputTdlHb}</td>`;
        linha += `<td style="background-color:#fff"><input type="checkbox">Check`
        linha += `<td style="background-color:#fff"><input type="checkbox">Check`
        linha += `</tr>`;
    
        linhas += linha;
    }

    const linhaCheck = document.getElementById('tdl-ou-hb')
    linhaCheck.addEventListener('onclick', function(e){
        alert('oi')
    })

    
    
    function atualizaTabela(){
        const CorpoTab = document.querySelector(('tbody'));
        CorpoTab.innerHTML = linhas
    }
    
})
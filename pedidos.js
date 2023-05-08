document.addEventListener('DOMContentLoaded', function() {
    const botaoFormulario = document.getElementById('botao-form')
    const form = document.getElementById('formulario')
    let linhas = ' '

    form.addEventListener('submit', function(e){
        e.preventDefault();
        adicionaNome();
        atualizaTabela();
        
    })
    function adicionaNome (){
        let inputPedido = document.getElementById('pedido').value
        let inputCodCliente = document.getElementById('cliente').value
        let inputNome = document.getElementById('nome').value
        let inputNfe = document.getElementById('nf').value
        let inputTdlHb = document.getElementById('tdl-hb').value
        let inputPagamento = document.getElementById('pagamento').value
    
        let linha = '<tr>';
        linha += `<td>${inputPedido}</td>`;
        linha += `<td>${inputCodCliente}</td>`;
        linha += `<td>${inputNome}</td>`;
        linha += `<td>${inputPagamento}</td>`;
        linha += `<td>${inputNfe}</td>`;
        linha += `<td class="tdl-ou-hb">${inputTdlHb}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
    }
    
    
    function atualizaTabela(){
        const CorpoTab = document.querySelector(('tbody'));
        CorpoTab.innerHTML = linhas
    }
    
})
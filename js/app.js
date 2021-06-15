document.querySelector("#btn_search").onclick = function() {
    let cep = document.querySelector("#input_cep").value;


    $.ajax({
        url: `https://viacep.com.br/ws/${cep}/json/`,
        type: 'GET',
        success: info => {
            document.querySelector("#rua").innerHTML = info.logradouro
            document.querySelector("#bairro").innerHTML = info.bairro
            document.querySelector("#cidade").innerHTML = info.localidade
            document.querySelector("#estado").innerHTML = info.uf
        },
        error: info => {
            alert("Cep invalido")
        }
    })
    

    
}
function botao(){
    let button = document.getElementById('cadastrar');
    
    if (button){
        button.addEventListener('click', function(){
            console.log("Cadastro pronto para ser efetuado.");
            let confirmar = confirm('Por favor, Confirme as informações antes de avançar!');
            
            if(confirmar == true){
                console.log("Cadastro Efetuado")
                realizado.textContent = "Cadastro Efetuado";
            }
            else{
                console.log("Cadastro não realizado");
                realizado.textContent = ""
            }
        });
    }
}
document.addEventListener('DOMContentLoaded', botao);






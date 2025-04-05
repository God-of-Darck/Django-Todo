// função que pergunta para o usuario se ele quer mesmo escluir a tarefa

document.querySelectorAll('.delete-btn').forEach(
    btn => {
        btn.addEventListener("click", function(e){
            e.preventDefault();
        
            const delLink = this.getAttribute("href");

            if(confirm("Vossa ecelencia gostaria mesmo de apagar essa tarefa?")){

                window.location.href = delLink;
            }
            console.log("Olá Mundo")
        });
    }
);

//função para pesquisar 
document.getElementById(search-btn).addEventListener("click",function(){
    document.getElementById("search-form").onsubmit();
    
});

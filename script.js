const selectButton = document.querySelector('.content button');
const selectInput = document.querySelector('.content input');
const selectUl = document.querySelector('.content ul');

let repositories = []


function search(){
    const name = selectInput.value;

    axios.get(`https://api.github.com/users/${name}/repos`)
        .then ( function(resposta){
            repositories = resposta.data;
            console.log(repositories);
            for(repository of repositories){
                const createLi = document.createElement ('li');
                const createTextLi = document.createTextNode (`${repository.name}`);
                createLi.appendChild(createTextLi);
                selectUl.appendChild(createLi);
            }
        })
        .catch(function (erro){
            console.log("Erro na requisição")
   });
   selectInput.value = '';
}

selectButton.onclick = search;


let users = ["Pedro", "Ana", "Joana", "Diego", "Davi Messias", "Cristiano"];

let searchUser = prompt("Digite o nome do usuário que deseja buscar:");


if (searchUser === null || searchUser.trim() === "") {
    console.log("Não pode enviar a busca em branco.");
} else {

  
    let user = users.filter(user =>
        user.toLowerCase().includes(searchUser.trim().toLowerCase())
    );

    if (user.length === 0) {
        console.log("Usuário não encontrado.");
    } else {
        console.log("Usuário encontrado:", user);

        
        let index = users.indexOf(user[0]);

      
        let NovoNome = prompt("Digite o novo nome do usuário:");

        if (NovoNome === null || NovoNome.trim() === "") {
            console.log("O novo nome não pode ficar em branco.");
        } else {
        
            users[index] = NovoNome.trim();

            console.log("Nome alterado com sucesso!");
            console.log("Lista atualizada:", users);
        }
    }
} 
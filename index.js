function mostraDados(nome, anoDeNascimento) {
    const idade = 2022-anoDeNascimento
    console.log('meu nome é', nome,  'nasci em', anoDeNascimento, 'minha idade é',idade);
    
};

document.getElementById('btn-calcular').addEventListener('click', function(e){
  const nome = document.getElementById('nome');
  const ano = document.getElementById('ano');
  mostraDados(nome.value, ano.value); 
 
})  
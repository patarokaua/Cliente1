//LOGIN USUARIO
function login() {
    const email = document.querySelector('#LoginEmail').value;
    const senha = document.querySelector('#LoginSenha').value;
    
    // Verificar se o email e a senha correspondem a um perfil existente
    const dbProvedores = JSON.parse(localStorage.getItem('formData'));
    const perfil = dbProvedores.provedores.find(perfil => perfil.email === email && perfil.senha === senha);
    
    if (perfil) {
      // Login bem-sucedido
      localStorage.setItem('loggedInUser', JSON.stringify(perfil));
      alert('Login bem-sucedido!');
      window.location.href = 'cliente.html';
      
    } else {
      // Login inválido
      alert('Email ou senha inválidos.');
    }
  }
  
  //Botao login
  document.getElementById('botaoLogin').addEventListener('click', login);
  window.onload = function() {
    carregaDados();
  };

  function carregaDados() {
    if (loggedInUser) {
      const usuarioLogado = JSON.parse(localStorage.getItem('loggedInUser'));
      document.getElementById('nome').value = usuarioLogado.nome;
      document.getElementById('id').value = usuarioLogado.id;
      
    }
  }
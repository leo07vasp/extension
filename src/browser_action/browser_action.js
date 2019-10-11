let ir = document.getElementById('ir');
let logar = document.getElementById('logar');
let pontuar = document.getElementById('pontuar-analise');
let pontuar2 = document.getElementById('pontuar-prog');
let abrir = document.getElementById('abrir');

abrir.onclick = function(element) {
  console.log('Popup DOM fully loaded and parsed');

  function modifyDOMOpen() {
    window.location.href = 'http://10.1.3.152/uniportfolio/';
    return document.body.innerHTML;
  }

  chrome.tabs.executeScript(
    {
      code: '(' + modifyDOMOpen + ')();' //argument here is a string but function.toString() returns function's code
    },
    results => {}
  );
};

logar.onclick = function(element) {
  let username = localStorage.getItem('store.settings.username');
  let password = localStorage.getItem('store.settings.password');

  function modifyDOM(username, password) {
    console.log(username);
    console.log(password);

    document.getElementById('loginform-username').value = username;
    document.getElementById('loginform-password').value = password;

    document.getElementById('login-form').submit();

    return document.body.innerHTML;
  }

  chrome.tabs.executeScript(
    {
      code: '(' + modifyDOM + ')(' + username + ', ' + password + ');'
    },
    results => {
      console.log('Popup script:');
    }
  );
};

ir.onclick = function(element) {
  function modifyDOM1() {
    window.location.href =
      'http://10.1.3.152/uniportfolio/index.php?r=tempo%2Fcreate';
    return document.body.innerHTML;
  }

  chrome.tabs.executeScript(
    {
      code: '(' + modifyDOM1 + ')();'
    },
    results => {}
  );
};

pontuar.onclick = function(element) {
  let id = localStorage.getItem('store.settings.idprojeto');
  let ProjetoEmpresa = localStorage.getItem('store.settings.projetoEmpresa');

  function modifyDOM3(id, ProjetoEmpresa) {
    //w0
    // tempo-nidproj
    // tempo-nidprojemp
    // tempo-nidproc
    // tempo-dtempo
    // tempo-ntempo
    document.getElementById('tempo-nidproj').value = id;
    document.getElementById('tempo-nidprojemp').value = ProjetoEmpresa;
    document.getElementById('tempo-nidproc').value = '23';
    document.getElementById('tempo-dtempo').stepDown(1);
    document.getElementById('tempo-ntempo').value = '8.5';
    document.getElementById('w0').submit();
    return document.body.innerHTML;
  }

  chrome.tabs.executeScript(
    {
      code: '(' + modifyDOM3 + ')(' + id + ', ' + ProjetoEmpresa + ');'
    },
    results => {}
  );
};

pontuar2.onclick = function(element) {
  let id = localStorage.getItem('store.settings.idprojeto');
  let ProjetoEmpresa = localStorage.getItem('store.settings.projetoEmpresa');
  function modifyDOM3(id, projetoEmpresa) {
    //w0
    // tempo-nidproj
    // tempo-nidprojemp
    // tempo-nidproc
    // tempo-dtempo
    // tempo-ntempo
    document.getElementById('tempo-nidproj').value = id;
    document.getElementById('tempo-nidprojemp').value = projetoEmpresa;
    document.getElementById('tempo-nidproc').value = '24';
    document.getElementById('tempo-dtempo').stepDown(1);
    document.getElementById('tempo-ntempo').value = '8.5';
    document.getElementById('w0').submit();
    return document.body.innerHTML;
  }

  chrome.tabs.executeScript(
    {
      code: '(' + modifyDOM3 + ')(' + id + ', ' + ProjetoEmpresa + ');'
    },
    results => {}
  );
};

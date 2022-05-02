export function redirectURL() {
  const url = window.location.href;
  if (url === 'https://app-relation.vercel.app/') {
    window.location.href = 'https://app-relation.vercel.app/atividades/';
  }
};

export function setProfile() {
  const nameStorage = localStorage.getItem('name');
  const selectStorage = localStorage.getItem('select');
  if (nameStorage != null && selectStorage != null) {
    if (localStorage.getItem('avatar') === null) {
      localStorage.setItem('avatar', 'n_yl');
    };

    const name = localStorage.getItem('name');
    document.querySelector('title').innerHTML = `Relatório de Serviço de ${name}`;
    const avatar = `<span class="avatar p_sel_pro" id=${localStorage.getItem('avatar')}>${name.substr(0, 2).toUpperCase()}</span>`;
    const account = document.querySelectorAll('div.account.img');
    account.forEach((banner) => {
      banner.removeChild(banner.children[0]);
      banner.innerHTML = avatar;
    });
  };
};

export function setLeft() {
  const url = window.location.href;
  document.querySelectorAll('ul.opt_bar a').forEach((link) => {
    link.children[0].classList.remove('active');
  });

  if (url === 'https://app-relation.vercel.app/atividades/') {
    document.querySelector('ul.opt_bar').children[0].children[0].classList.add('active');
  }
  else if (url === 'https://app-relation.vercel.app/totais') {
    document.querySelector('ul.opt_bar').children[3].children[0].classList.add('active');
  }
  else if (url === 'https://app-relation.vercel.app/estudos/') {
    document.querySelector('ul.opt_bar').children[1].children[0].classList.add('active');
  }
  else if (url === 'https://app-relation.vercel.app/programacao/') {
    document.querySelector('ul.opt_bar').children[2].children[0].classList.add('active');
  }
};
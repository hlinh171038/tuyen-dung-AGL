const menudata = [
    {
        title: 'サポートサイト',
        img:'../../images/open-icon.svg'
    },
    {
        title: 'サポートサイト',
        img:'../../images/open-icon.svg'
    },
    {
        title: 'サポートサイト',
        img:'../../images/open-icon.svg'
    },
    {
        title: 'サポートサイト',
        img:'../../images/open-icon.svg'
    },
    {
        title: 'サポートサイト',
        img:'../../images/open-icon.svg'
    }
]


const humbuger = document.getElementById("humbuger-menu");

  const humbugerResult = menudata && menudata.map(item => {
    return `
            <div class="menu-content">
            <div >${item.title}</div>
            <img src=${item.img}/>
            </div>
    `;
  }).join("");

humbuger.innerHTML = humbugerResult;


//onclick toggle

const menu = document.querySelector('.mobile-menu');
const menuIcon = document.querySelector('#humbuger-menu');

menu.addEventListener('click', () => {
    console.log('try')
//menuIcon.classList.toggle('active');
    if(menuIcon.classList.contains('active')) {
        console.log('true');
        menuIcon.classList.remove('active');
        menuIcon.classList.add('inactive');
    } else {
        console.log('false');
        menuIcon.classList.remove('inactive');
        menuIcon.classList.add('active');
    }
});

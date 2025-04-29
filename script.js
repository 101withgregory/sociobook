//Settings drop down menu
const settingsMenu = document.querySelector('.settings-menu');

function settingsMenuToggle(){
     settingsMenu.classList.toggle('active')
    
}

//dark/light theme toggle
const darkBtn = document.querySelector('#dark-btn');
const nav = document.querySelector('nav')
darkBtn.addEventListener('click',()=>{
    darkBtn.classList.toggle('on');
    document.body.classList.toggle('dark-theme');
    nav.classList.toggle('nav-black')

    if(localStorage.getItem("theme")=="light"){
        localStorage.setItem("theme","dark");
    }else{
        localStorage.setItem("theme","light");
    }
});


if(localStorage.getItem("theme")=="light"){
    darkBtn.classList.remove('on');
    document.body.classList.remove('dark-theme');
    nav.classList.remove('nav-black')
}else if(localStorage.getItem("theme")=="dark"){
    darkBtn.classList.add('on');
    document.body.classList.add('dark-theme');
    nav.classList.add('nav-black')
}else{
    localStorage.setItem("theme","light");
}




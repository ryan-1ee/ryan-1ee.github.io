$(document).ready(()=>{
    console.log(document.getElementById('darkmode'))

    var isNight = new Date().getHours() >= 22 || new Date().getHours() < 7; // 指定时间
    // 依次判断 系统暗黑模式 指定时间 缓存 dark
    if( matchMedia('(prefers-color-scheme: dark)').matches || isNight || localStorage.getItem('dark') === '1') {
        if(!(isNight&&localStorage.getItem('noDark') === '1')) {
            document.body.classList.add('dark');
        }
    }
    document.getElementById('darkmode').innerHTML = document.querySelector("body").classList.contains("dark")?"🌙":"🌞";
    console.log('load diy.js')
})

function switchDarkMode() {
    if ($('body').hasClass('dark')) {
        $("#dark").html("🌞");
        document.body.classList.remove('dark');
        localStorage.setItem('noDark', '1');
        localStorage.setItem('dark', '0');
    } else {
        $("#dark").html("🌙"); 
        document.body.classList.add('dark');
        localStorage.setItem('dark', '1');
        localStorage.setItem('noDark', '0');
    }
}



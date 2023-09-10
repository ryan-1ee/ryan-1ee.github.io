sun_icon = '<i class="fa-solid fa-sun" style="color: #fff"></i>'
moon_icon = '<i class="fa-solid fa-moon" style="color: #000"></i>'
$(document).ready(() => {
    var isNight = new Date().getHours() >= 22 || new Date().getHours() < 7; // 指定时间
    // 依次判断 系统暗黑模式 指定时间 缓存 dark
    if (matchMedia('(prefers-color-scheme: dark)').matches || isNight || localStorage.getItem('dark') === '1') {
        if (!(isNight && localStorage.getItem('noDark') === '1')) {
            document.body.classList.add('dark');
        }
    }
    $("#darkmode").html(document.querySelector("body").classList.contains("dark") ? sun_icon : moon_icon)
    console.log('load diy.js')
    console.log(document.getElementById('darkmode'))
})

// function googleTranslateElementInit() {
//     new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
// }

function switchDarkMode() {
    if ($('body').hasClass('dark')) {
        $("#darkmode").html(moon_icon);
        document.body.classList.remove('dark');
        localStorage.setItem('noDark', '1');
        localStorage.setItem('dark', '0');
    } else {
        $("#darkmode").html(sun_icon);
        document.body.classList.add('dark');
        localStorage.setItem('dark', '1');
        localStorage.setItem('noDark', '0');
    }
}



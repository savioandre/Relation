//Dark Mode
const themeToggle = document.querySelector('label#switch')
const currentTheme = window.localStorage.getItem("theme")

if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark") {
        themeToggle.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        window.localStorage.setItem("theme", "light");
    }
}

themeToggle.addEventListener('click', switchTheme, false);
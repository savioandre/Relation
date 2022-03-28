//Dark Mode
function DarkMode() {
    let themeToggle = document.querySelector('label#switch');
    let currentTheme = window.localStorage.getItem("theme");

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
}

export default DarkMode;
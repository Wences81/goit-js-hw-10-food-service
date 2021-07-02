const change = document.querySelector("#theme-switch-toggle")
change.addEventListener("click", toggleTheme)


function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.body.className = themeName;
}

function toggleTheme() {
    if (localStorage.getItem("theme") === "light-theme") {
        setTheme("dark-theme");

    } else {
        setTheme("light-theme");
    }
}


(function () {
    if (localStorage.getItem("theme") === "light-theme") {
        setTheme("light-theme");
        document.getElementById("theme-switch-toggle").checked = false;

    } else {
        setTheme("dark-theme");
        document.getElementById("theme-switch-toggle").checked = true;
    }
})();

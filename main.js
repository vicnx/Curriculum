function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}  

function color_theme_changer(){
    //ROJO
    document.getElementById("theme_red").addEventListener("click", function(){
        //Esto cambia el color de las variables root
        document.documentElement.style.setProperty('--theme-color', 'rgb(204, 84, 84)');
        document.documentElement.style.setProperty('--theme-color-shadows', 'rgb(117, 48, 48)');
        document.documentElement.style.setProperty('--theme-color-clear', 'rgb(247, 196, 196)');
        document.documentElement.style.setProperty('--theme-color-dark', 'rgb(107, 0, 0)');
        document.documentElement.style.setProperty('--theme-color-hover', 'rgb(185, 77, 77)');
    });
    //AZUL
    document.getElementById("theme_blue").addEventListener("click", function(){
        //Esto cambia el color de las variables root
        document.documentElement.style.setProperty('--theme-color', 'rgb(84, 204, 198)');
        document.documentElement.style.setProperty('--theme-color-shadows', 'rgb(48, 117, 114)');
        document.documentElement.style.setProperty('--theme-color-clear', 'rgb(196, 247, 244)');
        document.documentElement.style.setProperty('--theme-color-dark', 'rgb(0, 107, 100)');
        document.documentElement.style.setProperty('--theme-color-hover', 'rgb(77, 185, 180)');
    });
    //VERDE
    document.getElementById("theme_green").addEventListener("click", function(){
        //Esto cambia el color de las variables root
        document.documentElement.style.setProperty('--theme-color', 'rgb(84, 204, 84)');
        document.documentElement.style.setProperty('--theme-color-shadows', 'rgb(64, 117, 48)');
        document.documentElement.style.setProperty('--theme-color-clear', 'rgb(208, 247, 196)');
        document.documentElement.style.setProperty('--theme-color-dark', 'rgb(12, 107, 0)');
        document.documentElement.style.setProperty('--theme-color-hover', 'rgb(86, 185, 77)');
    });
    //AMARILLO
    document.getElementById("theme_yellow").addEventListener("click", function(){
        //Esto cambia el color de las variables root
        document.documentElement.style.setProperty('--theme-color', 'rgb(202, 204, 84)');
        document.documentElement.style.setProperty('--theme-color-shadows', 'rgb(117, 110, 48)');
        document.documentElement.style.setProperty('--theme-color-clear', 'rgb(246, 247, 196)');
        document.documentElement.style.setProperty('--theme-color-dark', 'rgb(96, 107, 0)');
        document.documentElement.style.setProperty('--theme-color-hover', 'rgb(185, 183, 77)');
    });
}

docReady(function() {
    color_theme_changer();
});
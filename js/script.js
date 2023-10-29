const checkBox = document.getElementById("checkbox-menu")
const menuMobile = document.querySelector('.cabecalho_menu_mobile')

checkBox.addEventListener('change', function() {
    if (this.checked) {
        menuMobile.style.display = 'block';
    } else {
        menuMobile.style.display = 'none';
    }
});

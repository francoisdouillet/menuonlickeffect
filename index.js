const navigation = document.querySelector('.navigation')
const menuNavigation = document.querySelector('.navigation__menu')

menuNavigation.onclick = function(){
    navigation.classList.toggle('active')
}
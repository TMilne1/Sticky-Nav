const main = document.querySelector(' #main')
const topOfMain = main.offsetTop;
console.log(topOfMain, scrollY)

function fixNav(){
    if (window.scrollY >= topOfMain){
        document.body.classList.add('fixed-nav')
        document.body.style.paddingTop = main.offsetHeight + 'px'
    }else{
        document.body.style.paddingTop = 0
        document.body.classList.remove('fixed-nav')
    }
        console.log(topOfMain, scrollY)
}
window.addEventListener('scroll', fixNav)
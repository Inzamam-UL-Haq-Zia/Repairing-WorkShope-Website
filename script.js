function showSidebar() {
    sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'
}
function hideSidebar() {
    sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'
}

const nav = document.querySelector("#navbar");
const sticky = nav.offsetTop;
console.log(sticky);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > sticky) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

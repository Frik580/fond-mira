export default function unfixedBody() {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    
    if (!(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))) {
        body.style.marginRight = "0px"
        const header = document.querySelector(".header__navigation");
        header?.classList.remove("header_margin")
    }
}
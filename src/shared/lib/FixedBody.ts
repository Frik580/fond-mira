export default function fixedBody() {
    const scrollY =
        document.documentElement.style.getPropertyValue(
            "--scroll-y",
        );
    const body = document.body;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}`;
    
    if (!(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))) {
        body.style.marginRight = "8px"
        const header = document.querySelector(".header__navigation");
        header?.classList.add("header_margin")
    }
}
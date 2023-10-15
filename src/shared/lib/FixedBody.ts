export default function fixedBody() {
    const scrollY =
        document.documentElement.style.getPropertyValue(
            "--scroll-y",
        );
    const body = document.body;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}`;
}
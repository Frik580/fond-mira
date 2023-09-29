
export default function resetActiveDots(num: number) {
    let dots = [];
    for (let count = num; count > 0; count--) {
        dots.push(false);
    }
    return dots;
}
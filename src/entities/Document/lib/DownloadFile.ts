const FILE_URL = "/documents";

export default function downloadFile(href: string) {
    const fileName = `${href}.pdf`;
    const aTag = document.createElement("a");
    aTag.href = `${FILE_URL}/${href}.pdf`;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
}
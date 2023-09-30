const FILE_URL = "/documents";

export default function downloadFile(href: string) {
    fetch(`${FILE_URL}/${href}.pdf`)
        .then(res => res.blob())
        .then(blob => {
            const blobURL = window.URL.createObjectURL(new Blob([blob]))
            const fileName = `${href}.pdf`;
            const aTag = document.createElement("a");
            aTag.href = blobURL;
            aTag.setAttribute("download", fileName);
            document.body.appendChild(aTag);
            aTag.click();
            aTag.remove();
        })
        .catch((err) => console.log(err))
}
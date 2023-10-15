import { DOCUMENT_EXTENSION, SERVER_URL_DOCUMENTS } from "@/shared/Constants";

export default function downloadFile(href: string) {
    fetch(`${SERVER_URL_DOCUMENTS}${href}.${DOCUMENT_EXTENSION}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/pdf",
        },
    })
        .then(res => {
            if (res.status != 200) { throw new Error("Bad server response"); }
            return res.blob();
        })
        .then(blob => {
            const blobURL = window.URL.createObjectURL(new Blob([blob]))
            const fileName = `${href}.${DOCUMENT_EXTENSION}`;
            const aTag = document.createElement("a");
            aTag.href = blobURL;
            aTag.setAttribute("download", fileName);
            document.body.appendChild(aTag);
            aTag.click();
            aTag.remove();
        })
        .catch((err) => console.log(err))
}
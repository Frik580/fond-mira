const toDataURL = (url: RequestInfo | URL) =>
    fetch(url, {
        method: "GET",
    })
        .then((response) => response.blob())
        .then(
            (blob) =>
                new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result);
                    reader.onerror = reject;
                    reader.readAsDataURL(blob);
                }),
        );

export default toDataURL
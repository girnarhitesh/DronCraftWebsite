export function preloadImages(urls = []) {
    const uniqueUrls = [...new Set(urls.filter(Boolean))];

    uniqueUrls.forEach((url, index) => {
        const existing = document.querySelector(`link[rel="preload"][as="image"][href="${url}"]`);
        if (!existing) {
            const link = document.createElement("link");
            link.rel = "preload";
            link.as = "image";
            link.href = url;
            if (index === 0) {
                link.setAttribute("fetchpriority", "high");
            }
            document.head.appendChild(link);
        }

        const img = new Image();
        img.decoding = "async";
        img.src = url;
    });
}

export default class PDFJS {
    init = (source, el) => {
        const iframe = document.createElement('iframe');
        
        iframe.src = `${source}`;
        iframe.width = '45%';
        iframe.height = '100%';
        iframe.SameSite = true;

        el.appendChild(iframe);
    }
}
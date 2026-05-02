// content.js
(function () {
    const style = document.createElement('style');

    style.textContent = `
        #seating-chart {
            display: none !important;
        }

        /* Hilangkan banner atas */ 
        .m-banner.geopattern__pattern { display: none !important; }
    `;

    document.head.appendChild(style);
})();
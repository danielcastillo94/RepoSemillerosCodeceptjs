const { I } = inject();

class verificarResultado {
    constructor() {
        this.fields = {
            nombreVideo: 'a#video-title',
            miniatura: '(//img[@class="yt-core-image yt-core-image--fill-parent-height yt-core-image--fill-parent-width yt-core-image--content-mode-scale-aspect-fill yt-core-image--loaded"])[1]',
            duracion: '(//div[@class="badge-shape-wiz__text"])[2]'
        }
    }

    async verificarVideoConTexto(textoEsperado) {
        await I.waitForElement(this.fields.nombreVideo, 10);
        const titulos = await I.grabTextFromAll(this.fields.nombreVideo);

        for (const titulo of titulos) {
            if (titulo.toLowerCase().includes(textoEsperado.toLowerCase())) {
                console.log(`¡Video encontrado: ${titulo}`);
                return true;
            }
        }

        console.log('No se encontró ningún video con el texto esperado.');
        return false;
    }

    async verificarMiniatura() {
        await I.waitForElement(this.fields.miniatura, 10);  
        const src = await I.grabAttributeFrom(this.fields.miniatura, 'src');  
        if (src && src.trim() !== '') {  
            console.log('Miniatura visible y cargada correctamente.');
        } else {
            console.log('La miniatura no tiene un src válido.');
        }
    }
    

    async verificarTitulo() {
        await I.waitForElement(this.fields.nombreVideo, 10);  
        const titulo = await I.grabTextFrom(this.fields.nombreVideo);  

        if (titulo.trim() !== '') {  
            console.log('Título visible: ', titulo);
        } else {
            console.log('El título no tiene texto visible.');
        }
    }

    async verificarDuracion() {
        await I.waitForElement(this.fields.duracion, 10); 

        const duracion = await I.grabTextFrom(this.fields.duracion);  
        const regex = /^\d{1,2}:\d{2}$/;  

        if (regex.test(duracion)) {  
            console.log('Duración del video en formato correcto: ', duracion);
        } else {
            console.log('La duración del video no está en el formato correcto.');
        }
    }
}

module.exports = new verificarResultado();

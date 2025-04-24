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
                I.say(`¡Video encontrado: ${titulo}`);
                return true;
            }
        }

        I.say('No se encontró ningún video con el texto esperado.');
        return false;
    }

    async verificarMiniatura() {
        await I.waitForElement(this.fields.miniatura, 10);  
        const src = await I.grabAttributeFrom(this.fields.miniatura, 'src');  
        if (src && src.trim() !== '') {  
            I.say('Miniatura visible y cargada correctamente.');
        } else {
            I.say('La miniatura no tiene un src válido.');
        }
    }
    

    async verificarTitulo() {
        await I.waitForElement(this.fields.nombreVideo, 10);  
        const titulo = await I.grabTextFrom(this.fields.nombreVideo);  

        if (titulo.trim() !== '') {  
            I.say(`Título visible: ${titulo}`);
        } else {
            I.say('El título no tiene texto visible.');
        }
    }

    async verificarDuracion() {
        await I.waitForElement(this.fields.duracion, 10); 

        const duracion = await I.grabTextFrom(this.fields.duracion);  
        const regex = /^\d{1,2}:\d{2}$/;  

        if (regex.test(duracion)) {  
            I.say('Duración del video en formato correcto: ', duracion);
        } else {
            I.say('La duración del video no está en el formato correcto.');
        }
    }
}

module.exports = new verificarResultado();

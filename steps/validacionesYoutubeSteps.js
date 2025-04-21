const CanalPage = require('../pages/canalPage.js');

Given('busco el video {string}', (video) => {
  CanalPage.buscarVideo(video);
});

When('hago clic en el nombre del canal del primer resultado', () => {
  CanalPage.irAlCanalDelPrimerVideo();
});

When('voy a la seccion videos', () => {
  CanalPage.pestanaVideos();
})

Then('debería ver el nombre del canal', () => {
  CanalPage.validarNombreDelCanal();
});

Then('debería ver la pestaña de Videos', () => {
  CanalPage.validarPestanaVideos();
});

Then('debería ver al menos un video con miniatura y título', () => {
  CanalPage.validarVideosVisibles();
});

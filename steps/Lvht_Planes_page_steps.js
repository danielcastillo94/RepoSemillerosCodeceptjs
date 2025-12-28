const {planes_5G}= inject();

Given( /^El usuario se encuentra en la seccion "Conoce el mundo 5G"$/,()=>{
    planes_5G.goToPage();
});

When( /^El usuario se desplaza hasta el banner de cobertura 5g$/,()=>{
    planes_5G.goToMap();
});

// En este archivo se crea y personaliza el actor 
// Aqui podemos agregar metodos personalizados para el actor (I)

module.exports = function () { //Exporta esta funcion para que otros archivos puedan utilizarla
  return actor({
    // Define  pasos personalizados aqui y utiliza "this" para acceder a los metodos por default de "I" 
    // Es recomendable crear una funcion general de login aqui
  });
};

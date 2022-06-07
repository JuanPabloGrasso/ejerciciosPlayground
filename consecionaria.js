const autos = require("./autos");

const concesionaria = {
   autos: autos,

   buscarAuto: function(patente){
      const busqueda = autos.find(auto => auto.patente == patente);
      if(busqueda != null){
         return busqueda
      }else{
        return null
      }
   },

   venderAuto: function(patente){
      const busqueda = this.buscarAuto(patente);
      busqueda.vendido = true
   }

};console.log(buscarAuto)

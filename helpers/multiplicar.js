
const fs= require('fs');
const colors = require ('colors'); // importar colores

const crearArchivo = async(base =5, listar= false, hasta = 10 )=> {  


try {

   
   
  

let salida = '';
let consola = '';

for ( let i = 1; i <= hasta; i++){       
salida +=`${base }  x ${i }  =  ${ base * i } \n)` ;
consola +=`${base }  ${'x'.blue } ${i }  ${'='.blue }  ${ base * i } \n)` ;

}

if  (listar ) {   
    console.log('=============================='.red);
    console.log('Tabla del : '.green, colors.blue( base));
    console.log('=============================='.rainbow);

    console.log(consola);

    }



fs.writeFileSync( `./salida/Tabla-${base}.txt`, salida );      
    
    return`tabla-${base}.txt creado`;
    
} catch (err) {
    throw err;
    
}
    
  
      
    


}
     

     module.exports = {  
        crearArchivo  

       }
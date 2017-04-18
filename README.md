# PandaPanda
## Acerca del proyecto

En este proyecto se se basa en la invetigación de una especie que está en peligro de extinción
### 1. Requerimientos

Para  ejecutar la pagina Web necesita acceder al siguiente link
<a href="https://flortello.github.io/Leccion-22-EjercicioEvaluadoPanda/"> PandaPanda</a>

### 2. Diseño

* "Pixel Perfect" la pagina debe parecerse lo mas posible al original
* Respetar los colores por del ejemplo para el diseño de css.

### 3. Funcionalidad

* presionar "x" para eliminar fotos.
* No dejar espacios vacíos al eliminarse todas las fotos.
* Restaurar las fotos eliminadas con el botón "Restaurar Fotos".
* Mostrar y desaparecer la historia cuando se preciona el boton "Hitoria"
* Mostrar y desaparecer el origen cuando se preciona el boton "Hitoria"
### 4. Elaboración 
   ### Css
   ```css
      .displayNone{
        display: none;
      }    
      .visibilityHidden{
        visibility: hidden;
      }
  ```
  ##### Para eliminar las imagenes se utilizo la siguiente función
  
  ```javascript
      span.addEventListener('click',function(e){
        this.parentNode.classList.toggle('displayNone');
      });
  ```
   ##### Para Restaurar las imagenes se utilizaro la siguiente función
  ```javascript
      document.getElementById('restaurarFotos').addEventListener('click',function(){
        var imgs = document.getElementsByClassName('figure-panda');
        console.log(imgs);
        for (var i = 0; i < imgs.length; i++) {
          imgs[i].classList.remove('displayNone');
        }
      });
  ```
   ##### Para mostra y ocultar la información del origen y la historía se utilizaro la siguiente función
  ```javascript
      document.getElementById('origen').addEventListener('click',function(){
        document.getElementById('box-info-origen').classList.toggle('visibilityHidden');
      });
      document.getElementById('extincion').addEventListener('click',function(){
        document.getElementById('box-info-extincion').classList.toggle('visibilityHidden');
      });
  ```
    

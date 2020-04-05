(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customers-customers-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/customers/calculadora/geometria/geometria.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customers/calculadora/geometria/geometria.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #App class=\"geometria\">\r\n\r\n  <h1>Selecione a Forma geometrica</h1>\r\n  <div class=\"geometria__options\" [formGroup]=\"geometriaForm\">\r\n    <div class=\"geometria__item\">\r\n      <a type=\"button\">\r\n        <input type=\"radio\" formControlName=\"Geometria\"  name=\"Geometria\" class=\"geometria__button\" #quadrado id=\"quadrado\" value=\"quadrado\" (change)=\"forma(quadrado)\" (click)=\"storeItem(quadrado)\" >\r\n        <img src=\"../../../../assets/geometria/geometria0.svg\" alt=\"\">\r\n      </a>\r\n    </div>\r\n    <div class=\"geometria__item\">\r\n      <a type=\"button\">\r\n        <input type=\"radio\" formControlName=\"Geometria\" name=\"Geometria\" class=\"geometria__button\" #semicirculo id=\"semicirculo\" value=\"semicirculo\" (change)=\"forma(semicirculo)\" (click)=\"storeItem(semicirculo)\">\r\n        <img src=\"../../../../assets/geometria/geometria1.svg\" alt=\"\">\r\n      </a>\r\n    </div>    \r\n    <div class=\"geometria__item\">\r\n      <a type=\"button\">\r\n        <input type=\"radio\" formControlName=\"Geometria\" name=\"Geometria\" class=\"geometria__button\" #circular id=\"circular\" value=\"circular\" (change)=\"forma(circular)\" (click)=\"storeItem(circular)\">\r\n        <img src=\"../../../../assets/geometria/geometria2.svg\" alt=\"\">\r\n      </a>\r\n    </div>\r\n    <div class=\"geometria__item\">\r\n      <a type=\"button\">\r\n        <input type=\"radio\" formControlName=\"Geometria\" name=\"Geometria\" class=\"geometria__button\" #trapezio id=\"trapezio\" value=\"trapezio\" (change)=\"forma(trapezio)\" (click)=\"storeItem(trapezio)\">\r\n        <img src=\"../../../../assets/geometria/geometria3.svg\" alt=\"\">\r\n      </a>\r\n    </div>    \r\n    <div class=\"geometria__item\">\r\n      <a type=\"button\">\r\n        <input type=\"radio\" formControlName=\"Geometria\" name=\"Geometria\" class=\"geometria__button\" #triretangulo id=\"triretangulo\" value=\"triretangulo\" (change)=\"forma(triretangulo)\" (click)=\"storeItem(triretangulo)\">\r\n        <img src=\"../../../../assets/geometria/geometria4.svg\" alt=\"\">\r\n      </a>\r\n    </div>    \r\n    <div class=\"geometria__item\">    \r\n      <a type=\"button\">\r\n        <input type=\"radio\" formControlName=\"Geometria\" name=\"Geometria\" class=\"geometria__button\" #triescaleno id=\"triescaleno\" value=\"triescaleno\" (change)=\"forma(triescaleno)\" (click)=\"storeItem(triescaleno)\">\r\n        <img src=\"../../../../assets/geometria/geometria5.svg\" alt=\"\">   \r\n      </a>\r\n    </div>\r\n  </div>\r\n  \r\n  \r\n  \r\n  <h1>Selecione o lado livre</h1>\r\n  <div  [formGroup]=\"geometriaForm\" (change)=\"definePressao($event)\">\r\n    <div class=\"geometria__options\" *ngIf=\"this.geometriaForm.get('Geometria').value === 'quadrado'\">\r\n      <div class=\"geometria__item\">    \r\n        <a type=button>\r\n          <input type=\"radio\" formControlName=\"Apoio\" name=\"Apoio\" class=\"geometria__button\" #Qlados value=\"4lados\" (click)=\"storeItem(Qlados)\" >\r\n          <img src=\"../../../../assets/geometria/geometria0.svg\" alt=\"\">\r\n        </a>\r\n        <a type=\"button\">\r\n          <input type=\"radio\" formControlName=\"Apoio\" name=\"Apoio\" class=\"geometria__button\" #Tlados value=\"3lados\" (click)=\"storeItem(Tlados)\" >\r\n          <img src=\"../../../../assets/geometria/geometria0.svg\" alt=\"\">\r\n        </a>\r\n        <a type=\"button\">\r\n          <input type=\"radio\" formControlName=\"Apoio\" name=\"Apoio\" class=\"geometria__button\" #Dlados value=\"2lados\" (click)=\"storeItem(Dlados)\" >\r\n          <img src=\"../../../../assets/geometria/geometria0.svg\" alt=\"\">\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div  class=\"geometria__options\" *ngIf=\"this.geometriaForm.get('Geometria').value === 'semicirculo'\">\r\n      <div class=\"geometria__item\">    \r\n        <a type=button>\r\n          <input type=\"radio\" formControlName=\"Apoio\" name=\"Apoio\" class=\"geometria__button\" #semLadoLivreU id=\"semLadoLivreU\" value=\"semLadoLivre\" (click)=\"storeItem(semLadoLivreU)\">\r\n          <img src=\"../../../../assets/geometria/geometria1.svg\" alt=\"\">\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"geometria__options\" *ngIf=\"geometriaForm.get('Geometria').value === 'circular'\">\r\n      <div class=\"geometria__item\">    \r\n        <a type=button>\r\n          <input type=\"radio\" formControlName=\"Apoio\" name=\"Apoio\" class=\"geometria__button\" #semLadoLivreD id=\"semLadoLivreD\" value=\"semLadoLivre\" (click)=\"storeItem(semLadoLivreD)\">\r\n          <img src=\"../../../../assets/geometria/geometria2.svg\" alt=\"\">\r\n        </a>\r\n      </div>\r\n    </div>    \r\n\r\n    <div class=\"geometria__options\" *ngIf=\"geometriaForm.get('Geometria').value === 'trapezio'\">\r\n      <div class=\"geometria__item\">    \r\n        <a type=button>\r\n          <input type=\"radio\" formControlName=\"Apoio\" name=\"Apoio\" class=\"geometria__button\" #semLadoLivreT id=\"semLadoLivreT\" value=\"semLadoLivre\" (click)=\"storeItem(semLadoLivreT)\">\r\n          <img src=\"../../../../assets/geometria/geometria3.svg\" alt=\"\">\r\n        </a>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"geometria__options\" *ngIf=\"geometriaForm.get('Geometria').value === 'triretangulo'\">\r\n      <div class=\"geometria__item\">    \r\n        <a type=button>\r\n          <input type=\"radio\" formControlName=\"Apoio\" name=\"Apoio\" class=\"geometria__button\" #semLadoLivreQ id=\"semLadoLivreQ\" value=\"semLadoLivre\" (click)=\"storeItem(semLadoLivreQ)\">\r\n          <img src=\"../../../../assets/geometria/geometria4.svg\" alt=\"\">\r\n        </a>\r\n      </div>\r\n    </div>    \r\n\r\n    <div  class=\"geometria__options\" *ngIf=\"geometriaForm.get('Geometria').value === 'triescaleno'\">\r\n      <div class=\"geometria__item\">    \r\n        <a type=button>\r\n          <input type=\"radio\" formControlName=\"Apoio\" name=\"Apoio\" class=\"geometria__button\" #semLadoLivreC id=\"semLadoLivreC\" value=\"semLadoLivre\" (click)=\"storeItem(semLadoLivreC)\">\r\n          <img src=\"../../../../assets/geometria/geometria5.svg\" alt=\"\">   \r\n        </a>\r\n      </div>\r\n    </div>    \r\n\r\n  </div>\r\n  \r\n  <h1>Selecione Aaplicação</h1>\r\n\r\n  <div class=\"geometria__options\" [formGroup]=\"geometriaForm\" >\r\n    <div *ngIf=\"geometriaForm.get('Apoio').value === '2lados'\">\r\n      <input type=\"radio\" formControlName=\"ladoApoio\" name=\"ladoApoio\" class=\"geometria__button\" #altura id=\"altura\" value=\"altura\" (click)=\"storeItem(altura)\">\r\n      <img src=\"../../../../assets/geometria/geometria5.svg\" alt=\"\">   \r\n      <label for=\"altura\">Altura</label>\r\n      \r\n      <input type=\"radio\" formControlName=\"ladoApoio\" name=\"ladoApoio\" class=\"geometria__button\" #lateral id=\"lateral\" value=\"lateral\" (click)=\"storeItem(lateral)\">\r\n      <img src=\"../../../../assets/geometria/geometria5.svg\" alt=\"\">   \r\n      <label for=\"lateral\">lateral</label>\r\n    </div>    \r\n\r\n    <div *ngIf=\"geometriaForm.get('Apoio').value === '3lados'\">\r\n      <input type=\"radio\" formControlName=\"ladoApoio\" name=\"ladoApoio\" class=\"geometria__button\" #MenorLivre id=\"MenorLivre\" value=\"MenorLivre\" (click)=\"storeItem(MenorLivre)\">\r\n      <img src=\"../../../../assets/geometria/geometria5.svg\" alt=\"\">   \r\n      <label for=\"MenorLivre\">Menor lado livre</label>\r\n      \r\n      <input type=\"radio\" formControlName=\"ladoApoio\" name=\"ladoApoio\" class=\"geometria__button\" #MaiorLivre id=\"MaiorLivre\" value=\"MaiorLivre\" (click)=\"storeItem(MaiorLivre)\">\r\n      <img src=\"../../../../assets/geometria/geometria5.svg\" alt=\"\">   \r\n      <label for=\"MaiorLivre\">Maior lado livre</label>\r\n    </div>  \r\n  </div>\r\n  \r\n  \r\n  <div class=\"geometria__options\" [formGroup]=\"geometriaForm\">\r\n    <div>\r\n      <h1 for=\"\">Inclinação</h1>\r\n      <input type=\"number\" formControlName=\"Inclinacao\" name=\"Inclinacao\" class=\"geometria__button\" #Inclinacao id=\"Inclinacao\" max=\"90\" min=\"0\" (change)=\"storeItem(Inclinacao)\">\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"geometria__options\" [formGroup]=\"geometriaForm\">\r\n    <h1>Aplicação</h1>\r\n    <input type=\"radio\" formControlName=\"Aplicacao\" name=\"Aplicacao\" class=\"geometria__button\" #interna id=\"interna\" value=\"interna\" (click)=\"storeItem(interna)\">\r\n    <label for=\"interna\">Interna</label>\r\n    \r\n    <input type=\"radio\" formControlName=\"Aplicacao\" name=\"Aplicacao\" class=\"geometria__button\" #externa id=\"externa\" value=\"externa\" (click)=\"storeItem(externa)\">\r\n    <label for=\"externa\">Externa</label>\r\n  </div>   \r\n  \r\n    \r\n  <div class=\"geometria__options\" [formGroup]=\"geometriaForm\">\r\n      <h1>Tipo do pavimento</h1>\r\n      <input type=\"radio\" formControlName=\"TipoPavimento\" name=\"TipoPavimento\" class=\"geometria__button\" #Acima id=\"Acima\" value=\"Acima\" (click)=\"storeItem(Acima)\">\r\n      <label for=\"Acima\">Acima de 6m</label>\r\n      \r\n      <input type=\"radio\" formControlName=\"TipoPavimento\" name=\"TipoPavimento\" class=\"geometria__button\" #Abaixo id=\"Abaixo\" value=\"Abaixo\" (click)=\"storeItem(Abaixo)\">\r\n      <label for=\"Abaixo\">Abaixo de 6m</label>\r\n    </div>  \r\n<div class=\"geometria__options\" [formGroup]=\"geometriaForm\">\r\n    <h1>Dimensões</h1>\r\n    <div class=\"geometria\" [formGroup]=\"geometriaForm\">\r\n      <input type=\"number\" formControlName=\"Largura\" name=\"Largura\" class=\"geometria\" #Largura id=\"Largura\" max=\"\" min=\"0\" (change)=\"storeItem(Largura); getLargura(Largura)\">\r\n      <input type=\"number\" formControlName=\"Altura\" name=\"Altura\" class=\"geometria__\" #Altura id=\"Altura\" max=\"90\" min=\"0\" (change)=\"storeItem(Altura);getAltura(Altura)\">\r\n    </div>\r\n  </div>\r\n\r\n<div class=\"geometria__options\" [formGroup]=\"geometriaForm\">\r\n  <h1>Pressão</h1>\r\n    <input type=\"number\" formControlName=\"Pressao\" name=\"Pressao\" class=\"geometria__\" #Pressao id=\"Pressao\" max=\"6000\" min=\"600\" (change)=\"storeItem(Pressao)\">\r\n  </div>\r\n      \r\n  <h1>Selecione Tipo de vidro</h1>\r\n  <div class=\"geometria__options\" [formGroup]=\"geometriaForm\">\r\n    <div>\r\n      <label>Monolitico</label>  \r\n      <input type=\"radio\" formControlName=\"TipoVidro\" name=\"TipoVidro\" class=\"geometria__button\" #monolitico id=\"monolitico\" value=\"monolitico\" (click)=\"storeItem(monolitico)\">\r\n      <img src=\"../../../../assets/geometria/geometria5.svg\" alt=\"\"> \r\n      \r\n      <label>Laminado</label>  \r\n      <input type=\"radio\" formControlName=\"TipoVidro\" name=\"TipoVidro\" class=\"geometria__button\" #laminado id=\"laminado\" value=\"laminado\" (click)=\"storeItem(laminado)\">\r\n      <img src=\"../../../../assets/geometria/geometria5.svg\" alt=\"\">   \r\n<!-- \r\n      <input type=\"radio\" formControlName=\"TipoVidro\" name=\"TipoVidro\" class=\"geometria__button\" #insulado id=\"insulado\" value=\"insulado\" (click)=\"storeItem(insulado)\">\r\n      <img src=\"../../../../assets/geometria/geometria5.svg\" alt=\"\">   \r\n      <label>Insulado</label>   -->\r\n    </div>    \r\n  </div>\r\n\r\n  <div class=\"geometria__options\" [formGroup]=\"geometriaForm\">\r\n    <div>\r\n      <input type=\"radio\" formControlName=\"TipoTratamento\" name=\"TipoTratamento\" class=\"geometria__button\" #comum id=\"comum\" value=\"comum\" (click)=\"storeItem(comum)\">\r\n      <img src=\"../../../../assets/geometria/geometria5.svg\" alt=\"\">\r\n      <label for=\"\">Comum</label>   \r\n      \r\n      <!-- <input type=\"radio\" formControlName=\"TipoTratamento\" name=\"TipoTratamento\" class=\"geometria__button\" #laminado id=\"laminado\" value=\"laminado\" (click)=\"storeItem(laminado)\">\r\n      <img src=\"../../../../assets/geometria/geometria5.svg\" alt=\"\">   \r\n      <label for=\"\">Laminado</label>    -->\r\n\r\n      \r\n      <!-- <input type=\"radio\" formControlName=\"TipoTratamento\" name=\"TipoTratamento\" class=\"geometria__button\" #insulado id=\"insulado\" value=\"insulado\" (click)=\"storeItem(insulado)\">\r\n      <img src=\"../../../../assets/geometria/geometria5.svg\" alt=\"\">    -->\r\n    </div>    \r\n  </div>\r\n</div>\r\n\r\n<p> Geometria: {{geometriaForm.value | json}}</p>\r\n\r\n<button (click)=\"calcular(geometriaForm.controls)\">Calcular</button>\r\n\r\n<div class=\"geometria__options\" *ngFor=\"let vidro of ArrayResultados\">\r\n  <p>EspessuraVidro: {{vidro.EspessuraVidro.toFixed(2)}}</p>\r\n  <p>EspessuraMinima: {{vidro.EspessuraMinima}}</p>\r\n  <p>Resultado de Espessura: {{vidro.EspessuraBroken === 'OK'? 'Passou' : 'Quebrou' }}</p>\r\n  <p>FlechaMinima: {{vidro.FlechaMinima}}</p>\r\n  <p>FlechaAtuante: {{vidro.FlechaAtuante}}</p>\r\n  <p>Resultado de Flecha: {{vidro.FlechaBroken === 'OK'? 'Passou' : 'Quebrou' }}</p>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/customers/containers/customers.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customers/containers/customers.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"white px-4 section-header\">\r\n  <h3>Calculo de resistencia</h3>\r\n  <p class=\"grey-text pt-3\">Insira os dados para realizar o calculo</p>\r\n</div>\r\n\r\n<div class=\"container-fluid pt-5 pb-5\">\r\n  <app-geometria></app-geometria>\r\n</div>\r\n<input #geometriaData value=\"{{geometria}}\" name=\"forma\" >\r\n\r\n<div class=\"container-fluid pt-5 pb-5\">\r\n  <div class=\"apoio__options\">\r\n    <!-- {{geometria}} -->\r\n    <!-- <div [ngSwitch]=\"geometria\">\r\n      <div *ngSwitchCase=\"geometria.quadrado\">Quadrado</div>\r\n      <div *ngSwitchDefault>{{geometria}}</div>\r\n    </div> -->\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- \r\n  <div class=\"pt-3 pb-5\">\r\n    <button mdbBtn color=\"primary\" (click)=\"onAddCustomer()\">Add new customer</button>\r\n\r\n    <div *ngIf=\"customers\" class=\"mt-4 white\">\r\n      <app-customers-list [customers]=\"customers\" (customerEdited)=\"onCustomerEdit($event)\" (customerDeleted)=\"onCustomerDelete($event)\"></app-customers-list>\r\n    </div>\r\n\r\n    <div *ngIf=\"isLoading$ | async\" class=\"d-flex justify-content-center align-items-center\" style=\"margin-top: 200px\">\r\n      <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\r\n        <span class=\"sr-only\">Loading...</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/customers/calculadora/geometria/geometria.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/customers/calculadora/geometria/geometria.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".geometria {\n  background-repeat: repeat;\n  display: flex;\n  flex-direction: column;\n}\n.geometria__options {\n  display: flex;\n  flex-wrap: wrap;\n  place-content: space-around;\n  min-height: 200px;\n  min-width: 70vw;\n  box-shadow: -7px -7px 17px rgba(255, 255, 255, 0.6), 7px 7px 17px rgba(70, 70, 70, 0.15);\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n.geometria__item {\n  margin: 3%;\n  display: flex;\n  flex-wrap: wrap;\n  place-content: space-evenly;\n}\n.geometria__item a {\n  margin: 15px;\n  position: relative;\n  height: 100px;\n  width: 100px;\n  box-shadow: -7px -7px 17px rgba(255, 255, 255, 0.6), 7px 7px 17px rgba(70, 70, 70, 0.15);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  font-size: 25px;\n}\n.geometria__item a img {\n  width: 60px;\n  height: 60px;\n}\n.geometria__item a input[type=radio] {\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n}\n.geometria__item a:active {\n  box-shadow: inset -7px -7px 17px rgba(255, 255, 255, 0.6), inset 7px 7px 17px rgba(70, 70, 70, 0.15);\n}\n.geometria__button {\n  flex: 1;\n  flex-basis: 30%;\n  display: flex;\n  place-content: space-around;\n  position: absolute;\n}\n.geometria__button img {\n  width: 90%;\n}\n.container {\n  height: 100px;\n  width: 70vw;\n  box-shadow: -7px -7px 17px rgba(255, 255, 255, 0.6), 7px 7px 17px rgba(70, 70, 70, 0.15);\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n.container > a {\n  height: 60px;\n  width: 60px;\n  box-shadow: -7px -7px 17px rgba(255, 255, 255, 0.6), 7px 7px 17px rgba(70, 70, 70, 0.15);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  font-size: 25px;\n}\n.fa-twitter {\n  color: #23abff;\n}\n.fa-facebook {\n  color: #3e68c0;\n}\n.fa-instagram {\n  color: #ea3145;\n}\n.fa-whatsapp {\n  color: #27ae60;\n}\n.container > a:active {\n  box-shadow: inset -7px -7px 17px rgba(255, 255, 255, 0.6), inset 7px 7px 17px rgba(70, 70, 70, 0.15);\n}\n.my-link {\n  color: #EA3145;\n  font-family: \"Rubik\", sans-serif;\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  border: 2px solid #EA3145;\n  text-decoration: none;\n}\n@media screen and (min-width: 451px) {\n  .my-link {\n    font-size: 18px;\n    padding: 5px 10px 5px 10px;\n  }\n}\n@media screen and (max-width: 450px) {\n  .my-link {\n    font-size: 14px;\n    padding: 3px 5px 3px 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJzL2NhbGN1bGFkb3JhL2dlb21ldHJpYS9EOlxcU3RkXFxfX1dcXGdsYXNzaWZ5LWFkbWluL3NyY1xcYXBwXFxjdXN0b21lcnNcXGNhbGN1bGFkb3JhXFxnZW9tZXRyaWFcXGdlb21ldHJpYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY3VzdG9tZXJzL2NhbGN1bGFkb3JhL2dlb21ldHJpYS9nZW9tZXRyaWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0NKO0FEQUk7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0ZBQUE7RUFHQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FDQVI7QURHSTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FDRFI7QURFUTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esd0ZBQUE7RUFFQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDRFo7QURFWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQWhCO0FERVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNBaEI7QURHUTtFQUNJLG9HQUFBO0FDRFo7QURNSTtFQUNJLE9BQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNKUjtBRE1RO0VBQ0ksVUFBQTtBQ0paO0FEVUE7RUFDQyxhQUFBO0VBQ0EsV0FBQTtFQUNBLHdGQUFBO0VBRUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUNSRDtBRFVBO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSx3RkFBQTtFQUVBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNSRDtBRFVBO0VBQ0MsY0FBQTtBQ1BEO0FEU0E7RUFDQyxjQUFBO0FDTkQ7QURRQTtFQUNDLGNBQUE7QUNMRDtBRE9BO0VBQ0MsY0FBQTtBQ0pEO0FETUE7RUFDQyxvR0FBQTtBQ0hEO0FET0E7RUFDSSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ0pKO0FETUE7RUFDQztJQUNHLGVBQUE7SUFDQywwQkFBQTtFQ0hIO0FBQ0Y7QURNQTtFQUNDO0lBQ0csZUFBQTtJQUNDLHdCQUFBO0VDSkg7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jYWxjdWxhZG9yYS9nZW9tZXRyaWEvZ2VvbWV0cmlhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdlb21ldHJpYXtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICZfX29wdGlvbnN7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgcGxhY2UtY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogNzB2dztcclxuICAgICAgICBib3gtc2hhZG93OiAtN3B4IC03cHggMTdweCByZ2JhKDI1NSwyNTUsMjU1LDAuNiksXHJcbiAgICAgICAgICAgICAgICAgICAgN3B4IDdweCAxN3B4IHJnYmEoNzAsNzAsNzAsMC4xNSk7XHJcbiAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgJl9faXRlbSB7XHJcbiAgICAgICAgbWFyZ2luOiAzJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBwbGFjZS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogLTdweCAtN3B4IDE3cHggcmdiYSgyNTUsMjU1LDI1NSwwLjYpLFxyXG4gICAgICAgICAgICA3cHggN3B4IDE3cHggcmdiYSg3MCw3MCw3MCwwLjE1KTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPXJhZGlvXSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYTphY3RpdmV7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC03cHggLTdweCAxN3B4IHJnYmEoMjU1LDI1NSwyNTUsMC42KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXQgN3B4IDdweCAxN3B4IHJnYmEoNzAsNzAsNzAsMC4xNSk7XHRcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAmX19idXR0b257XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBmbGV4LWJhc2lzOiAzMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwbGFjZS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVye1xyXG5cdGhlaWdodDogMTAwcHg7XHJcblx0d2lkdGg6IDcwdnc7XHJcblx0Ym94LXNoYWRvdzogLTdweCAtN3B4IDE3cHggcmdiYSgyNTUsMjU1LDI1NSwwLjYpLFxyXG5cdFx0XHRcdDdweCA3cHggMTdweCByZ2JhKDcwLDcwLDcwLDAuMTUpO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRtYXJnaW46IGF1dG87XHJcblx0dG9wOiAwO1xyXG5cdGJvdHRvbTogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcbi5jb250YWluZXI+YXtcclxuXHRoZWlnaHQ6IDYwcHg7XHJcblx0d2lkdGg6IDYwcHg7XHJcblx0Ym94LXNoYWRvdzogLTdweCAtN3B4IDE3cHggcmdiYSgyNTUsMjU1LDI1NSwwLjYpLFxyXG5cdFx0XHRcdDdweCA3cHggMTdweCByZ2JhKDcwLDcwLDcwLDAuMTUpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lOyBcclxuXHRmb250LXNpemU6IDI1cHg7XHJcbn1cclxuLmZhLXR3aXR0ZXJ7XHJcblx0Y29sb3I6ICMyM2FiZmY7XHJcbn1cclxuLmZhLWZhY2Vib29re1xyXG5cdGNvbG9yOiAjM2U2OGMwO1xyXG59XHJcbi5mYS1pbnN0YWdyYW17XHJcblx0Y29sb3I6ICNlYTMxNDU7XHJcbn1cclxuLmZhLXdoYXRzYXBwe1xyXG5cdGNvbG9yOiAjMjdhZTYwO1xyXG59XHJcbi5jb250YWluZXI+YTphY3RpdmV7XHJcblx0Ym94LXNoYWRvdzogaW5zZXQgLTdweCAtN3B4IDE3cHggcmdiYSgyNTUsMjU1LDI1NSwwLjYpLFxyXG5cdFx0XHRcdGluc2V0IDdweCA3cHggMTdweCByZ2JhKDcwLDcwLDcwLDAuMTUpO1x0XHJcblxyXG59XHJcbi5teS1saW5re1xyXG4gICAgY29sb3I6ICNFQTMxNDU7XHJcbiAgICBmb250LWZhbWlseTogXCJSdWJpa1wiLHNhbnMtc2VyaWY7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHJpZ2h0OjIwcHggO1xyXG4gICAgdG9wOjIwcHg7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkICNFQTMxNDU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0NTFweCkge1xyXG4gLm15LWxpbmt7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgcGFkZGluZzo1cHggMTBweCA1cHggMTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAubXktbGlua3tcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICBwYWRkaW5nOjNweCA1cHggM3B4IDVweDtcclxuICB9XHJcbn0iLCIuZ2VvbWV0cmlhIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5nZW9tZXRyaWFfX29wdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBsYWNlLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIG1pbi13aWR0aDogNzB2dztcbiAgYm94LXNoYWRvdzogLTdweCAtN3B4IDE3cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLCA3cHggN3B4IDE3cHggcmdiYSg3MCwgNzAsIDcwLCAwLjE1KTtcbiAgbWFyZ2luOiBhdXRvO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZ2VvbWV0cmlhX19pdGVtIHtcbiAgbWFyZ2luOiAzJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwbGFjZS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG4uZ2VvbWV0cmlhX19pdGVtIGEge1xuICBtYXJnaW46IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3gtc2hhZG93OiAtN3B4IC03cHggMTdweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksIDdweCA3cHggMTdweCByZ2JhKDcwLCA3MCwgNzAsIDAuMTUpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cbi5nZW9tZXRyaWFfX2l0ZW0gYSBpbWcge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLmdlb21ldHJpYV9faXRlbSBhIGlucHV0W3R5cGU9cmFkaW9dIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbn1cbi5nZW9tZXRyaWFfX2l0ZW0gYTphY3RpdmUge1xuICBib3gtc2hhZG93OiBpbnNldCAtN3B4IC03cHggMTdweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksIGluc2V0IDdweCA3cHggMTdweCByZ2JhKDcwLCA3MCwgNzAsIDAuMTUpO1xufVxuLmdlb21ldHJpYV9fYnV0dG9uIHtcbiAgZmxleDogMTtcbiAgZmxleC1iYXNpczogMzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwbGFjZS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5nZW9tZXRyaWFfX2J1dHRvbiBpbWcge1xuICB3aWR0aDogOTAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDcwdnc7XG4gIGJveC1zaGFkb3c6IC03cHggLTdweCAxN3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSwgN3B4IDdweCAxN3B4IHJnYmEoNzAsIDcwLCA3MCwgMC4xNSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uY29udGFpbmVyID4gYSB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJveC1zaGFkb3c6IC03cHggLTdweCAxN3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSwgN3B4IDdweCAxN3B4IHJnYmEoNzAsIDcwLCA3MCwgMC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uZmEtdHdpdHRlciB7XG4gIGNvbG9yOiAjMjNhYmZmO1xufVxuXG4uZmEtZmFjZWJvb2sge1xuICBjb2xvcjogIzNlNjhjMDtcbn1cblxuLmZhLWluc3RhZ3JhbSB7XG4gIGNvbG9yOiAjZWEzMTQ1O1xufVxuXG4uZmEtd2hhdHNhcHAge1xuICBjb2xvcjogIzI3YWU2MDtcbn1cblxuLmNvbnRhaW5lciA+IGE6YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTdweCAtN3B4IDE3cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLCBpbnNldCA3cHggN3B4IDE3cHggcmdiYSg3MCwgNzAsIDcwLCAwLjE1KTtcbn1cblxuLm15LWxpbmsge1xuICBjb2xvcjogI0VBMzE0NTtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjRUEzMTQ1O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ1MXB4KSB7XG4gIC5teS1saW5rIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5teS1saW5rIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogM3B4IDVweCAzcHggNXB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/customers/calculadora/geometria/geometria.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/customers/calculadora/geometria/geometria.component.ts ***!
  \************************************************************************/
/*! exports provided: GeometriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeometriaComponent", function() { return GeometriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GeometriaComponent = /** @class */ (function () {
    function GeometriaComponent() {
        var _this = this;
        this.maxAltura = 6;
        this.maxLargura = 6;
        this.gravidade = 9.80665;
        this.pressaoMinima = 600;
        this.ArrayResultados = [];
        this.base2 = function (tipo) {
            if (tipo === 'monolitico') {
                if (_this.getTipoTratamento === 'comum') {
                    console.log('Insulado-2 monolitico com vidro comum');
                    _this.espessuraVidro = [3, 4, 5, 6, 8, 10, 12, 15, 19];
                }
                else {
                    console.log('Insulado-2 monolitico com vidro temperado');
                    _this.espessuraVidro = [5, 6, 8, 10, 12, 15, 19];
                }
                _this.espessuraVidro.forEach(function (element) {
                    console.log("A espessura do vidro 2 \u00E9 " + element + " ");
                    _this.baseID = _this.insulado1LogID + "-" + element;
                    console.log("ID da Div => ****" + _this.baseID + "****");
                    _this.be2 = element;
                    _this.insulado2Log = "" + element;
                    _this.numeroP2 = _this.be2;
                    _this.resultado(_this.be1, _this.be2);
                });
            }
            else {
                if (_this.getTipoTratamento === 'comum') {
                    console.log('Insulado-2 laminado com vidro comum');
                    _this.espessuraVidro = [{ a: 3, b: 3 },
                        { a: 3, b: 4 },
                        { a: 4, b: 4 },
                        { a: 4, b: 5 },
                        { a: 4, b: 6 },
                        { a: 5, b: 5 },
                        { a: 5, b: 6 },
                        { a: 6, b: 6 },
                        { a: 6, b: 8 },
                        { a: 8, b: 8 },
                        { a: 8, b: 10 },
                        { a: 10, b: 10 },
                        { a: 10, b: 12 },
                        { a: 12, b: 12 }];
                }
                else {
                    console.log('Insulado-2 laminado-Temperado');
                    _this.espessuraVidro = [{ a: 5, b: 5 },
                        { a: 5, b: 6 },
                        { a: 6, b: 6 },
                        { a: 6, b: 8 },
                        { a: 8, b: 8 },
                        { a: 8, b: 10 },
                        { a: 10, b: 10 }];
                }
                _this.espessuraVidro.forEach(function (element) {
                    console.log(element);
                    _this.laminadoValue = Number(element.a) + Number(element.b);
                    console.log("A espessura do vidro 2 \u00E9 " + Number(element.a) + " + " + Number(element.b) + " => " + _this.laminadoValue + " ");
                    _this.baseID = _this.insulado1LogID + "-" + Number(element.a) + "-" + Number(element.b);
                    console.log("ID da Div => ****" + _this.baseID + "****");
                    _this.numeroP2 = _this.laminadoValue;
                    _this.be2 = Number(_this.laminadoValue) / (1.30 * 0.9);
                    _this.insulado2Log = element.a + " + " + element.b;
                    _this.resultado(_this.be1, _this.be2);
                });
            }
        };
        this.array3lados = [
            { 'name': '0.30', 'value': '0.68571' },
            { 'name': '0.31', 'value': '0.69714' },
            { 'name': '0.32', 'value': '0.72000' },
            { 'name': '0.33', 'value': '0.73143' },
            { 'name': '0.34', 'value': '0.76572' },
            { 'name': '0.35', 'value': '0.80000' },
            { 'name': '0.36', 'value': '0.82286' },
            { 'name': '0.37', 'value': '0.84572' },
            { 'name': '0.38', 'value': '0.86857' },
            { 'name': '0.39', 'value': '0.89143' },
            { 'name': '0.40', 'value': '0.91429' },
            { 'name': '0.41', 'value': '0.93715' },
            { 'name': '0.42', 'value': '0.96000' },
            { 'name': '0.43', 'value': '0.98286' },
            { 'name': '0.44', 'value': '1.00572' },
            { 'name': '0.45', 'value': '1.02858' },
            { 'name': '0.46', 'value': '1.05143' },
            { 'name': '0.47', 'value': '1.07429' },
            { 'name': '0.48', 'value': '1.09715' },
            { 'name': '0.49', 'value': '1.12000' },
            { 'name': '0.50', 'value': '1.14286' },
            { 'name': '0.51', 'value': '1.16471' },
            { 'name': '0.52', 'value': '1.18656' },
            { 'name': '0.53', 'value': '1.20841' },
            { 'name': '0.54', 'value': '1.23026' },
            { 'name': '0.55', 'value': '1.25210' },
            { 'name': '0.56', 'value': '1.27395' },
            { 'name': '0.57', 'value': '1.29580' },
            { 'name': '0.58', 'value': '1.31765' },
            { 'name': '0.59', 'value': '1.33950' },
            { 'name': '0.60', 'value': '1.36135' },
            { 'name': '0.61', 'value': '1.38320' },
            { 'name': '0.62', 'value': '1.40505' },
            { 'name': '0.63', 'value': '1.42689' },
            { 'name': '0.64', 'value': '1.44874' },
            { 'name': '0.65', 'value': '1.47059' },
            { 'name': '0.66', 'value': '1.49244' },
            { 'name': '0.67', 'value': '1.51429' },
            { 'name': '0.68', 'value': '1.53048' },
            { 'name': '0.69', 'value': '1.54667' },
            { 'name': '0.70', 'value': '1.56286' },
            { 'name': '0.71', 'value': '1.57757' },
            { 'name': '0.72', 'value': '1.59229' },
            { 'name': '0.73', 'value': '1.60700' },
            { 'name': '0.74', 'value': '1.62172' },
            { 'name': '0.75', 'value': '1.63643' },
            { 'name': '0.76', 'value': '1.65114' },
            { 'name': '0.77', 'value': '1.66586' },
            { 'name': '0.78', 'value': '1.68057' },
            { 'name': '0.79', 'value': '1.69529' },
            { 'name': '0.80', 'value': '1.71000' },
            { 'name': '0.81', 'value': '1.72471' },
            { 'name': '0.82', 'value': '1.73943' },
            { 'name': '0.83', 'value': '1.75414' },
            { 'name': '0.84', 'value': '1.76886' },
            { 'name': '0.85', 'value': '1.78357' },
            { 'name': '0.86', 'value': '1.79828' },
            { 'name': '0.87', 'value': '1.81300' },
            { 'name': '0.88', 'value': '1.82771' },
            { 'name': '0.89', 'value': '1.84243' },
            { 'name': '0.90', 'value': '1.85714' },
            { 'name': '0.91', 'value': '1.86571' },
            { 'name': '0.92', 'value': '1.87428' },
            { 'name': '0.93', 'value': '1.88286' },
            { 'name': '0.94', 'value': '1.89143' },
            { 'name': '0.95', 'value': '1.90000' },
            { 'name': '0.96', 'value': '1.90857' },
            { 'name': '0.97', 'value': '1.91714' },
            { 'name': '0.98', 'value': '1.92571' },
            { 'name': '0.99', 'value': '1.93429' },
            { 'name': '1.00', 'value': '1.94286' },
            { 'name': '1.01', 'value': '1.95143' },
            { 'name': '1.02', 'value': '1.96000' },
            { 'name': '1.03', 'value': '1.96857' },
            { 'name': '1.04', 'value': '1.97714' },
            { 'name': '1.05', 'value': '1.98572' },
            { 'name': '1.06', 'value': '1.99429' },
            { 'name': '1.07', 'value': '2.00286' },
            { 'name': '1.08', 'value': '2.01143' },
            { 'name': '1.09', 'value': '2.02000' },
            { 'name': '1.10', 'value': '2.02857' },
            { 'name': '1.11', 'value': '2.03715' },
            { 'name': '1.12', 'value': '2.04572' },
            { 'name': '1.13', 'value': '2.05429' },
            { 'name': '1.14', 'value': '2.06286' },
            { 'name': '1.15', 'value': '2.07143' },
            { 'name': '1.16', 'value': '2.08000' },
            { 'name': '1.17', 'value': '2.08858' },
            { 'name': '1.18', 'value': '2.09715' },
            { 'name': '1.19', 'value': '2.10572' },
            { 'name': '1.20', 'value': '2.11429' },
            { 'name': '1.21', 'value': '2.12000' },
            { 'name': '1.22', 'value': '2.12572' },
            { 'name': '1.23', 'value': '2.13143' },
            { 'name': '1.24', 'value': '2.13715' },
            { 'name': '1.25', 'value': '2.14286' },
            { 'name': '1.26', 'value': '2.14857' },
            { 'name': '1.27', 'value': '2.15429' },
            { 'name': '1.28', 'value': '2.16000' },
            { 'name': '1.29', 'value': '2.16572' },
            { 'name': '1.30', 'value': '2.17143' },
            { 'name': '1.31', 'value': '2.17714' },
            { 'name': '1.32', 'value': '2.18286' },
            { 'name': '1.33', 'value': '2.18857' },
            { 'name': '1.34', 'value': '2.19429' },
            { 'name': '1.35', 'value': '2.20000' },
            { 'name': '1.36', 'value': '2.20571' },
            { 'name': '1.37', 'value': '2.21143' },
            { 'name': '1.38', 'value': '2.21714' },
            { 'name': '1.39', 'value': '2.22286' },
            { 'name': '1.40', 'value': '2.22857' },
            { 'name': '1.41', 'value': '2.23428' },
            { 'name': '1.42', 'value': '2.24000' },
            { 'name': '1.43', 'value': '2.24571' },
            { 'name': '1.44', 'value': '2.25143' },
            { 'name': '1.45', 'value': '2.25714' },
            { 'name': '1.46', 'value': '2.26285' },
            { 'name': '1.47', 'value': '2.26857' },
            { 'name': '1.48', 'value': '2.27428' },
            { 'name': '1.49', 'value': '2.28000' },
            { 'name': '1.50', 'value': '2.28571' },
            { 'name': '1.51', 'value': '2.28714' },
            { 'name': '1.52', 'value': '2.28857' },
            { 'name': '1.53', 'value': '2.29000' },
            { 'name': '1.54', 'value': '2.29143' },
            { 'name': '1.55', 'value': '2.29286' },
            { 'name': '1.56', 'value': '2.29428' },
            { 'name': '1.57', 'value': '2.29571' },
            { 'name': '1.58', 'value': '2.29714' },
            { 'name': '1.59', 'value': '2.29857' },
            { 'name': '1.60', 'value': '2.30000' },
            { 'name': '1.61', 'value': '2.30143' },
            { 'name': '1.62', 'value': '2.30286' },
            { 'name': '1.63', 'value': '2.30429' },
            { 'name': '1.64', 'value': '2.30572' },
            { 'name': '1.65', 'value': '2.30715' },
            { 'name': '1.66', 'value': '2.30857' },
            { 'name': '1.67', 'value': '2.31000' },
            { 'name': '1.68', 'value': '2.31143' },
            { 'name': '1.69', 'value': '2.31286' },
            { 'name': '1.70', 'value': '2.31429' },
            { 'name': '1.71', 'value': '2.31572' },
            { 'name': '1.72', 'value': '2.31715' },
            { 'name': '1.73', 'value': '2.31858' },
            { 'name': '1.74', 'value': '2.32000' },
            { 'name': '1.75', 'value': '2.32143' },
            { 'name': '1.76', 'value': '2.32286' },
            { 'name': '1.77', 'value': '2.32429' },
            { 'name': '1.78', 'value': '2.32572' },
            { 'name': '1.79', 'value': '2.32715' },
            { 'name': '1.80', 'value': '2.32857' },
            { 'name': '1.81', 'value': '2.33000' },
            { 'name': '1.82', 'value': '2.33143' },
            { 'name': '1.83', 'value': '2.33286' },
            { 'name': '1.84', 'value': '2.33429' },
            { 'name': '1.85', 'value': '2.33572' },
            { 'name': '1.86', 'value': '2.33714' },
            { 'name': '1.87', 'value': '2.33857' },
            { 'name': '1.88', 'value': '2.34000' },
            { 'name': '1.89', 'value': '2.34143' },
            { 'name': '1.90', 'value': '2.34286' },
            { 'name': '1.91', 'value': '2.34429' },
            { 'name': '1.92', 'value': '2.34571' },
            { 'name': '1.93', 'value': '2.34714' },
            { 'name': '1.94', 'value': '2.34857' },
            { 'name': '1.95', 'value': '2.35000' },
            { 'name': '1.96', 'value': '2.35143' },
            { 'name': '1.97', 'value': '2.35286' },
            { 'name': '1.98', 'value': '2.35428' },
            { 'name': '1.99', 'value': '2.35571' },
            { 'name': '2.00', 'value': '2.35714' },
            { 'name': '2.01', 'value': '2.35728' },
            { 'name': '2.02', 'value': '2.35743' },
            { 'name': '2.03', 'value': '2.35757' },
            { 'name': '2.04', 'value': '2.35771' },
            { 'name': '2.05', 'value': '2.35785' },
            { 'name': '2.06', 'value': '2.35800' },
            { 'name': '2.07', 'value': '2.35814' },
            { 'name': '2.08', 'value': '2.35828' },
            { 'name': '2.09', 'value': '2.35843' },
            { 'name': '2.10', 'value': '2.35857' },
            { 'name': '2.11', 'value': '2.35871' },
            { 'name': '2.12', 'value': '2.35885' },
            { 'name': '2.13', 'value': '2.35900' },
            { 'name': '2.14', 'value': '2.35914' },
            { 'name': '2.15', 'value': '2.35928' },
            { 'name': '2.16', 'value': '2.35942' },
            { 'name': '2.17', 'value': '2.35957' },
            { 'name': '2.18', 'value': '2.35971' },
            { 'name': '2.19', 'value': '2.35985' },
            { 'name': '2.20', 'value': '2.36000' },
            { 'name': '2.21', 'value': '2.36014' },
            { 'name': '2.22', 'value': '2.36028' },
            { 'name': '2.23', 'value': '2.36042' },
            { 'name': '2.24', 'value': '2.36057' },
            { 'name': '2.25', 'value': '2.36071' },
            { 'name': '2.26', 'value': '2.36085' },
            { 'name': '2.27', 'value': '2.36100' },
            { 'name': '2.28', 'value': '2.36114' },
            { 'name': '2.29', 'value': '2.36128' },
            { 'name': '2.30', 'value': '2.36142' },
            { 'name': '2.31', 'value': '2.36157' },
            { 'name': '2.32', 'value': '2.36171' },
            { 'name': '2.33', 'value': '2.36185' },
            { 'name': '2.34', 'value': '2.36200' },
            { 'name': '2.35', 'value': '2.36214' },
            { 'name': '2.36', 'value': '2.36228' },
            { 'name': '2.37', 'value': '2.36242' },
            { 'name': '2.38', 'value': '2.36257' },
            { 'name': '2.39', 'value': '2.36271' },
            { 'name': '2.40', 'value': '2.36285' },
            { 'name': '2.41', 'value': '2.36299' },
            { 'name': '2.42', 'value': '2.36314' },
            { 'name': '2.43', 'value': '2.36328' },
            { 'name': '2.44', 'value': '2.36342' },
            { 'name': '2.45', 'value': '2.36357' },
            { 'name': '2.46', 'value': '2.36371' },
            { 'name': '2.47', 'value': '2.36385' },
            { 'name': '2.48', 'value': '2.36399' },
            { 'name': '2.49', 'value': '2.36414' },
            { 'name': '2.50', 'value': '2.36428' },
            { 'name': '2.51', 'value': '2.36442' },
            { 'name': '2.52', 'value': '2.36457' },
            { 'name': '2.53', 'value': '2.36471' },
            { 'name': '2.54', 'value': '2.36485' },
            { 'name': '2.55', 'value': '2.36499' },
            { 'name': '2.56', 'value': '2.36514' },
            { 'name': '2.57', 'value': '2.36528' },
            { 'name': '2.58', 'value': '2.36542' },
            { 'name': '2.59', 'value': '2.36557' },
            { 'name': '2.60', 'value': '2.36571' },
            { 'name': '2.61', 'value': '2.36585' },
            { 'name': '2.62', 'value': '2.36599' },
            { 'name': '2.63', 'value': '2.36614' },
            { 'name': '2.64', 'value': '2.36628' },
            { 'name': '2.65', 'value': '2.36642' },
            { 'name': '2.66', 'value': '2.36656' },
            { 'name': '2.67', 'value': '2.36671' },
            { 'name': '2.68', 'value': '2.36685' },
            { 'name': '2.69', 'value': '2.36699' },
            { 'name': '2.70', 'value': '2.36714' },
            { 'name': '2.71', 'value': '2.36728' },
            { 'name': '2.72', 'value': '2.36742' },
            { 'name': '2.73', 'value': '2.36756' },
            { 'name': '2.74', 'value': '2.36771' },
            { 'name': '2.75', 'value': '2.36785' },
            { 'name': '2.76', 'value': '2.36799' },
            { 'name': '2.77', 'value': '2.36814' },
            { 'name': '2.78', 'value': '2.36828' },
            { 'name': '2.79', 'value': '2.36842' },
            { 'name': '2.80', 'value': '2.36856' },
            { 'name': '2.81', 'value': '2.36871' },
            { 'name': '2.82', 'value': '2.36885' },
            { 'name': '2.83', 'value': '2.36899' },
            { 'name': '2.84', 'value': '2.36914' },
            { 'name': '2.85', 'value': '2.36928' },
            { 'name': '2.86', 'value': '2.36942' },
            { 'name': '2.87', 'value': '2.36956' },
            { 'name': '2.88', 'value': '2.36971' },
            { 'name': '2.89', 'value': '2.36985' },
            { 'name': '2.90', 'value': '2.36999' },
            { 'name': '2.91', 'value': '2.37013' },
            { 'name': '2.92', 'value': '2.37028' },
            { 'name': '2.93', 'value': '2.37042' },
            { 'name': '2.94', 'value': '2.37056' },
            { 'name': '2.95', 'value': '2.37071' },
            { 'name': '2.96', 'value': '2.37085' },
            { 'name': '2.97', 'value': '2.37099' },
            { 'name': '2.98', 'value': '2.37113' },
            { 'name': '2.99', 'value': '2.37128' },
            { 'name': '3.00', 'value': '2.37142' },
            { 'name': '3.01', 'value': '2.37156' },
            { 'name': '3.02', 'value': '2.37171' },
            { 'name': '3.03', 'value': '2.37185' },
            { 'name': '3.04', 'value': '2.37199' },
            { 'name': '3.05', 'value': '2.37213' },
            { 'name': '3.06', 'value': '2.37228' },
            { 'name': '3.07', 'value': '2.37242' },
            { 'name': '3.08', 'value': '2.37256' },
            { 'name': '3.09', 'value': '2.37271' },
            { 'name': '3.10', 'value': '2.37285' },
            { 'name': '3.11', 'value': '2.37299' },
            { 'name': '3.12', 'value': '2.37313' },
            { 'name': '3.13', 'value': '2.37328' },
            { 'name': '3.14', 'value': '2.37342' },
            { 'name': '3.15', 'value': '2.37356' },
            { 'name': '3.16', 'value': '2.37370' },
            { 'name': '3.17', 'value': '2.37385' },
            { 'name': '3.18', 'value': '2.37399' },
            { 'name': '3.19', 'value': '2.37413' },
            { 'name': '3.20', 'value': '2.37428' },
            { 'name': '3.21', 'value': '2.37442' },
            { 'name': '3.22', 'value': '2.37456' },
            { 'name': '3.23', 'value': '2.37470' },
            { 'name': '3.24', 'value': '2.37485' },
            { 'name': '3.25', 'value': '2.37499' },
            { 'name': '3.26', 'value': '2.37513' },
            { 'name': '3.27', 'value': '2.37528' },
            { 'name': '3.28', 'value': '2.37542' },
            { 'name': '3.29', 'value': '2.37556' },
            { 'name': '3.30', 'value': '2.37570' },
            { 'name': '3.31', 'value': '2.37585' },
            { 'name': '3.32', 'value': '2.37599' },
            { 'name': '3.33', 'value': '2.37613' },
            { 'name': '3.34', 'value': '2.37628' },
            { 'name': '3.35', 'value': '2.37642' },
            { 'name': '3.36', 'value': '2.37656' },
            { 'name': '3.37', 'value': '2.37670' },
            { 'name': '3.38', 'value': '2.37685' },
            { 'name': '3.39', 'value': '2.37699' },
            { 'name': '3.40', 'value': '2.37713' },
            { 'name': '3.41', 'value': '2.37727' },
            { 'name': '3.42', 'value': '2.37742' },
            { 'name': '3.43', 'value': '2.37756' },
            { 'name': '3.44', 'value': '2.37770' },
            { 'name': '3.45', 'value': '2.37785' },
            { 'name': '3.46', 'value': '2.37799' },
            { 'name': '3.47', 'value': '2.37813' },
            { 'name': '3.48', 'value': '2.37827' },
            { 'name': '3.49', 'value': '2.37842' },
            { 'name': '3.50', 'value': '2.37856' },
            { 'name': '3.51', 'value': '2.37870' },
            { 'name': '3.52', 'value': '2.37885' },
            { 'name': '3.53', 'value': '2.37899' },
            { 'name': '3.54', 'value': '2.37913' },
            { 'name': '3.55', 'value': '2.37927' },
            { 'name': '3.56', 'value': '2.37942' },
            { 'name': '3.57', 'value': '2.37956' },
            { 'name': '3.58', 'value': '2.37970' },
            { 'name': '3.59', 'value': '2.37985' },
            { 'name': '3.60', 'value': '2.37999' },
            { 'name': '3.61', 'value': '2.38013' },
            { 'name': '3.62', 'value': '2.38027' },
            { 'name': '3.63', 'value': '2.38042' },
            { 'name': '3.64', 'value': '2.38056' },
            { 'name': '3.65', 'value': '2.38070' },
            { 'name': '3.66', 'value': '2.38084' },
            { 'name': '3.67', 'value': '2.38099' },
            { 'name': '3.68', 'value': '2.38113' },
            { 'name': '3.69', 'value': '2.38127' },
            { 'name': '3.70', 'value': '2.38142' },
            { 'name': '3.71', 'value': '2.38156' },
            { 'name': '3.72', 'value': '2.38170' },
            { 'name': '3.73', 'value': '2.38184' },
            { 'name': '3.74', 'value': '2.38199' },
            { 'name': '3.75', 'value': '2.38213' },
            { 'name': '3.76', 'value': '2.38227' },
            { 'name': '3.77', 'value': '2.38242' },
            { 'name': '3.78', 'value': '2.38256' },
            { 'name': '3.79', 'value': '2.38270' },
            { 'name': '3.80', 'value': '2.38284' },
            { 'name': '3.81', 'value': '2.38299' },
            { 'name': '3.82', 'value': '2.38313' },
            { 'name': '3.83', 'value': '2.38327' },
            { 'name': '3.84', 'value': '2.38342' },
            { 'name': '3.85', 'value': '2.38356' },
            { 'name': '3.86', 'value': '2.38370' },
            { 'name': '3.87', 'value': '2.38384' },
            { 'name': '3.88', 'value': '2.38399' },
            { 'name': '3.89', 'value': '2.38413' },
            { 'name': '3.90', 'value': '2.38427' },
            { 'name': '3.91', 'value': '2.38442' },
            { 'name': '3.92', 'value': '2.38456' },
            { 'name': '3.93', 'value': '2.38470' },
            { 'name': '3.94', 'value': '2.38485' },
            { 'name': '3.95', 'value': '2.38499' },
            { 'name': '3.96', 'value': '2.38513' },
            { 'name': '3.97', 'value': '2.38528' },
            { 'name': '3.98', 'value': '2.38542' },
            { 'name': '3.99', 'value': '2.38557' },
            { 'name': '4.00', 'value': '2.38571' },
            { 'name': '4.01', 'value': '2.38571' },
            { 'name': '4.02', 'value': '2.38571' },
            { 'name': '4.03', 'value': '2.38571' },
            { 'name': '4.04', 'value': '2.38571' },
            { 'name': '4.05', 'value': '2.38571' },
            { 'name': '4.06', 'value': '2.38571' },
            { 'name': '4.07', 'value': '2.38571' },
            { 'name': '4.08', 'value': '2.38571' },
            { 'name': '4.09', 'value': '2.38571' },
            { 'name': '4.10', 'value': '2.38571' },
            { 'name': '4.11', 'value': '2.38571' },
            { 'name': '4.12', 'value': '2.38571' },
            { 'name': '4.13', 'value': '2.38571' },
            { 'name': '4.14', 'value': '2.38571' },
            { 'name': '4.15', 'value': '2.38571' },
            { 'name': '4.16', 'value': '2.38571' },
            { 'name': '4.17', 'value': '2.38571' },
            { 'name': '4.18', 'value': '2.38571' },
            { 'name': '4.19', 'value': '2.38571' },
            { 'name': '4.20', 'value': '2.38571' },
            { 'name': '4.21', 'value': '2.38571' },
            { 'name': '4.22', 'value': '2.38571' },
            { 'name': '4.23', 'value': '2.38571' },
            { 'name': '4.24', 'value': '2.38571' },
            { 'name': '4.25', 'value': '2.38571' },
            { 'name': '4.26', 'value': '2.38571' },
            { 'name': '4.27', 'value': '2.38571' },
            { 'name': '4.28', 'value': '2.38571' },
            { 'name': '4.29', 'value': '2.38571' },
            { 'name': '4.30', 'value': '2.38571' },
            { 'name': '4.31', 'value': '2.38571' },
            { 'name': '4.32', 'value': '2.38571' },
            { 'name': '4.33', 'value': '2.38571' },
            { 'name': '4.34', 'value': '2.38571' },
            { 'name': '4.35', 'value': '2.38571' },
            { 'name': '4.36', 'value': '2.38571' },
            { 'name': '4.37', 'value': '2.38571' },
            { 'name': '4.38', 'value': '2.38571' },
            { 'name': '4.39', 'value': '2.38571' },
            { 'name': '4.40', 'value': '2.38571' },
            { 'name': '4.41', 'value': '2.38571' },
            { 'name': '4.42', 'value': '2.38571' },
            { 'name': '4.43', 'value': '2.38571' },
            { 'name': '4.44', 'value': '2.38571' },
            { 'name': '4.45', 'value': '2.38571' },
            { 'name': '4.46', 'value': '2.38571' },
            { 'name': '4.47', 'value': '2.38571' },
            { 'name': '4.48', 'value': '2.38571' },
            { 'name': '4.49', 'value': '2.38571' },
            { 'name': '4.50', 'value': '2.38571' },
            { 'name': '4.51', 'value': '2.38571' },
            { 'name': '4.52', 'value': '2.38571' },
            { 'name': '4.53', 'value': '2.38571' },
            { 'name': '4.54', 'value': '2.38571' },
            { 'name': '4.55', 'value': '2.38571' },
            { 'name': '4.56', 'value': '2.38571' },
            { 'name': '4.57', 'value': '2.38571' },
            { 'name': '4.58', 'value': '2.38571' },
            { 'name': '4.59', 'value': '2.38571' },
            { 'name': '4.60', 'value': '2.38571' },
            { 'name': '4.61', 'value': '2.38571' },
            { 'name': '4.62', 'value': '2.38571' },
            { 'name': '4.63', 'value': '2.38571' },
            { 'name': '4.64', 'value': '2.38571' },
            { 'name': '4.65', 'value': '2.38571' },
            { 'name': '4.66', 'value': '2.38571' },
            { 'name': '4.67', 'value': '2.38571' },
            { 'name': '4.68', 'value': '2.38571' },
            { 'name': '4.69', 'value': '2.38571' },
            { 'name': '4.70', 'value': '2.38571' },
            { 'name': '4.71', 'value': '2.38571' },
            { 'name': '4.72', 'value': '2.38571' },
            { 'name': '4.73', 'value': '2.38571' },
            { 'name': '4.74', 'value': '2.38571' },
            { 'name': '4.75', 'value': '2.38571' },
            { 'name': '4.76', 'value': '2.38571' },
            { 'name': '4.77', 'value': '2.38571' },
            { 'name': '4.78', 'value': '2.38571' },
            { 'name': '4.79', 'value': '2.38571' },
            { 'name': '4.80', 'value': '2.38571' },
            { 'name': '4.81', 'value': '2.38571' },
            { 'name': '4.82', 'value': '2.38571' },
            { 'name': '4.83', 'value': '2.38571' },
            { 'name': '4.84', 'value': '2.38571' },
            { 'name': '4.85', 'value': '2.38571' },
            { 'name': '4.86', 'value': '2.38571' },
            { 'name': '4.87', 'value': '2.38571' },
            { 'name': '4.88', 'value': '2.38571' },
            { 'name': '4.89', 'value': '2.38571' },
            { 'name': '4.90', 'value': '2.38571' },
            { 'name': '4.91', 'value': '2.38571' },
            { 'name': '4.92', 'value': '2.38571' },
            { 'name': '4.93', 'value': '2.38571' },
            { 'name': '4.94', 'value': '2.38571' },
            { 'name': '4.95', 'value': '2.38571' },
            { 'name': '4.96', 'value': '2.38571' },
            { 'name': '4.97', 'value': '2.38571' },
            { 'name': '4.98', 'value': '2.38571' },
            { 'name': '4.99', 'value': '2.38571' },
            { 'name': '5.00', 'value': '2.38571' }
        ];
        this.array4lados = [
            { 'name': '1.00', 'value': '0.65710' },
            { 'name': '0.99', 'value': '0.67139' },
            { 'name': '0.98', 'value': '0.68568' },
            { 'name': '0.97', 'value': '0.69997' },
            { 'name': '0.96', 'value': '0.71426' },
            { 'name': '0.95', 'value': '0.72855' },
            { 'name': '0.94', 'value': '0.74284' },
            { 'name': '0.93', 'value': '0.75713' },
            { 'name': '0.92', 'value': '0.77142' },
            { 'name': '0.91', 'value': '0.78571' },
            { 'name': '0.90', 'value': '0.80000' },
            { 'name': '0.89', 'value': '0.81714' },
            { 'name': '0.88', 'value': '0.83428' },
            { 'name': '0.87', 'value': '0.85142' },
            { 'name': '0.86', 'value': '0.86856' },
            { 'name': '0.85', 'value': '0.88570' },
            { 'name': '0.84', 'value': '0.90284' },
            { 'name': '0.83', 'value': '0.91998' },
            { 'name': '0.82', 'value': '0.93712' },
            { 'name': '0.81', 'value': '0.95426' },
            { 'name': '0.80', 'value': '0.97140' },
            { 'name': '0.79', 'value': '0.99283' },
            { 'name': '0.78', 'value': '1.01426' },
            { 'name': '0.77', 'value': '1.03569' },
            { 'name': '0.76', 'value': '1.05712' },
            { 'name': '0.75', 'value': '1.07855' },
            { 'name': '0.74', 'value': '1.09998' },
            { 'name': '0.73', 'value': '1.12141' },
            { 'name': '0.72', 'value': '1.14284' },
            { 'name': '0.71', 'value': '1.16427' },
            { 'name': '0.70', 'value': '1.18570' },
            { 'name': '0.69', 'value': '1.20856' },
            { 'name': '0.68', 'value': '1.23142' },
            { 'name': '0.67', 'value': '1.25428' },
            { 'name': '0.66', 'value': '1.27714' },
            { 'name': '0.65', 'value': '1.30000' },
            { 'name': '0.64', 'value': '1.32286' },
            { 'name': '0.63', 'value': '1.34572' },
            { 'name': '0.62', 'value': '1.36858' },
            { 'name': '0.61', 'value': '1.39144' },
            { 'name': '0.60', 'value': '1.41430' },
            { 'name': '0.59', 'value': '1.43716' },
            { 'name': '0.58', 'value': '1.46002' },
            { 'name': '0.57', 'value': '1.48288' },
            { 'name': '0.56', 'value': '1.50574' },
            { 'name': '0.55', 'value': '1.52860' },
            { 'name': '0.54', 'value': '1.55146' },
            { 'name': '0.53', 'value': '1.57432' },
            { 'name': '0.52', 'value': '1.59718' },
            { 'name': '0.51', 'value': '1.62004' },
            { 'name': '0.50', 'value': '1.64290' },
            { 'name': '0.49', 'value': '1.66575' },
            { 'name': '0.48', 'value': '1.68860' },
            { 'name': '0.47', 'value': '1.71145' },
            { 'name': '0.46', 'value': '1.73430' },
            { 'name': '0.45', 'value': '1.75715' },
            { 'name': '0.44', 'value': '1.78000' },
            { 'name': '0.43', 'value': '1.80285' },
            { 'name': '0.42', 'value': '1.82570' },
            { 'name': '0.41', 'value': '1.84855' },
            { 'name': '0.40', 'value': '1.87140' },
            { 'name': '0.39', 'value': '1.89426' },
            { 'name': '0.38', 'value': '1.91712' },
            { 'name': '0.37', 'value': '1.93998' },
            { 'name': '0.36', 'value': '1.96284' },
            { 'name': '0.35', 'value': '1.98570' },
            { 'name': '0.34', 'value': '2.00856' },
            { 'name': '0.33', 'value': '2.03142' },
            { 'name': '0.32', 'value': '2.05428' },
            { 'name': '0.31', 'value': '2.07714' },
            { 'name': '0.30', 'value': '2.10000' },
            { 'name': '0.29', 'value': '2.10000' },
            { 'name': '0.28', 'value': '2.10000' },
            { 'name': '0.27', 'value': '2.10000' },
            { 'name': '0.26', 'value': '2.10000' },
            { 'name': '0.25', 'value': '2.10000' },
            { 'name': '0.24', 'value': '2.10000' },
            { 'name': '0.23', 'value': '2.10000' },
            { 'name': '0.22', 'value': '2.10000' },
            { 'name': '0.21', 'value': '2.10000' },
            { 'name': '0.20', 'value': '2.10000' },
            { 'name': '0.19', 'value': '2.10143' },
            { 'name': '0.18', 'value': '2.10286' },
            { 'name': '0.17', 'value': '2.10429' },
            { 'name': '0.16', 'value': '2.10572' },
            { 'name': '0.15', 'value': '2.10715' },
            { 'name': '0.14', 'value': '2.10858' },
            { 'name': '0.13', 'value': '2.11001' },
            { 'name': '0.12', 'value': '2.11144' },
            { 'name': '0.11', 'value': '2.11287' },
            { 'name': '0.10', 'value': '2.11430' }
        ];
    }
    GeometriaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildForm();
        this.buildCalculo();
        this.geometriaForm.valueChanges.subscribe(function (x) {
            _this.ArrayResultados = [];
            _this.calcular(_this.geometriaForm.value);
            console.log(x);
        });
    };
    GeometriaComponent.prototype.ngOnChanges = function (changes) {
        this.definePressao(changes);
        this.getAltura(changes);
        this.getLargura(changes);
        this.buildCalculo();
        this.calcular(this.geometriaForm);
    };
    GeometriaComponent.prototype.buildForm = function () {
        this.geometriaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            Geometria: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            Apoio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            ladoApoio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            Aplicacao: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            Inclinacao: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            Largura: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            Altura: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            Pressao: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            TipoVidro: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            TipoPavimento: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            TipoTratamento: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    };
    GeometriaComponent.prototype.buildCalculo = function () {
        this.geometriaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            Geometria: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](sessionStorage.getItem('Geometria')),
            Apoio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](sessionStorage.getItem('Apoio')),
            ladoApoio: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](sessionStorage.getItem('ladoApoio')),
            Aplicacao: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](sessionStorage.getItem('Aplicacao')),
            Inclinacao: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](sessionStorage.getItem('Inclinacao')),
            Largura: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](sessionStorage.getItem('Largura')),
            Altura: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](sessionStorage.getItem('Altura')),
            AlturaC: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](sessionStorage.getItem('AlturaC')),
            Pressao: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](sessionStorage.getItem('Pressao')),
            TipoVidro: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](sessionStorage.getItem('TipoVidro')),
            TipoPavimento: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](sessionStorage.getItem('TipoPavimento')),
            TipoTratamento: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](sessionStorage.getItem('TipoPavimento')),
        });
    };
    GeometriaComponent.prototype.storeItem = function (el) {
        sessionStorage.setItem(el.name, el.value);
    };
    GeometriaComponent.prototype.getGeometria = function () {
        this.geometria = sessionStorage.getItem('Geometria');
        return this.geometria;
    };
    GeometriaComponent.prototype.getApoio = function () {
        this.apoio = sessionStorage.getItem('Apoio');
        return this.apoio;
    };
    Object.defineProperty(GeometriaComponent.prototype, "geoForm", {
        get: function () {
            return this.geometria = this.geometriaForm.controls.Geometria;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GeometriaComponent.prototype, "Altura", {
        get: function () {
            return this.geometriaForm.controls.Altura.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GeometriaComponent.prototype, "Largura", {
        get: function () {
            return this.geometriaForm.controls.Largura.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GeometriaComponent.prototype, "TipoVidroAplicado", {
        get: function () {
            return this.geometriaForm.controls.TipoVidro.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GeometriaComponent.prototype, "Apoio", {
        get: function () {
            return this.geometriaForm.controls.Apoio.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GeometriaComponent.prototype, "getTipoTratamento", {
        get: function () {
            return this.geometriaForm.controls.TipoTratamento.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GeometriaComponent.prototype, "getInclinacao", {
        get: function () {
            return this.geometriaForm.controls.Inclinacao.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GeometriaComponent.prototype, "getAplicacao", {
        get: function () {
            return this.geometriaForm.controls.Aplicacao.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GeometriaComponent.prototype, "getPavimento", {
        get: function () {
            return this.geometriaForm.controls.TipoPavimento.value;
        },
        enumerable: true,
        configurable: true
    });
    GeometriaComponent.prototype.flecha = function (element) {
        console.log("Elemento Flecha: " + element);
        console.log("alpha Flecha atuante: " + this.alpha);
        console.log("Pressao Flecha atuante: " + this.pressaoCalculo);
        if (this.TipoVidroAplicado === 'laminado') {
            this.flechaAtuante = this.alpha * (this.pressaoCalculo / Number(1.5)) * (Math.pow(Number(this.ApscFlecha), 4) / Math.pow(element / 1.30, 3));
        }
        else {
            this.flechaAtuante = this.alpha * (this.pressaoCalculo / Number(1.5)) * (Math.pow(Number(this.ApscFlecha), 4) / Math.pow(element, 3));
        }
        console.log(this.alpha, this.pressaoCalculo / Number(1.5), this.ApscFlecha, Math.pow(Number(this.ApscFlecha), 4), Math.pow(element, 3), element, (Math.pow(Number(this.ApscFlecha), 4) / Math.pow(element, 3)));
        console.log("Flecha Atuante: " + this.flechaAtuante);
        this.flechaMinina = (this.Apoio === '4lados') ?
            Math.min(this.ApscFlecha / Number(60 * 1000) * Math.pow(10, 6), Number(30)) :
            (this.Apoio === '3lados') ?
                Math.min(this.menorValor / Number(100 * 1000), Number(50)) * Math.pow(10, 6) :
                Math.min(this.menorValor / Number(150 * 1000), Number(50)) * Math.pow(10, 6);
        console.log("Flecha Minima: " + this.flechaMinina + "****************************");
    };
    GeometriaComponent.prototype.pressaoP = function (element) {
        this.PP = Number(2.5) * Number(this.gravidade) * Number(element);
        console.log("Esse \u00E9 o PP da espessura " + element + "=> " + this.PP);
        // this.ladosLivres();
    };
    GeometriaComponent.prototype.search = function (nameKey, myArray) {
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i].name === nameKey) {
                return myArray[i];
            }
        }
    };
    GeometriaComponent.prototype.ladosLivres = function (tipoApoio, ladoApoio) {
        var _this = this;
        console.log(tipoApoio, 'Tipo Apoio', ladoApoio, 'Lado Apoio', '****************************');
        switch (tipoApoio) {
            case '2lados':
                if (ladoApoio === 'altura') {
                    this.aspectRatioCalcEspessura = this.altura / this.largura;
                    this.deflexao = Number(this.altura / this.largura).toFixed(2);
                    this.alpha = 2.11430;
                    this.ApscFlecha = this.Largura;
                }
                else {
                    this.aspectRatioCalcEspessura = this.largura / this.altura;
                    this.deflexao = Number(this.largura / this.altura).toFixed(2);
                    this.alpha = 2.11430;
                    this.ApscFlecha = this.Altura;
                }
                break;
            case '3lados':
                if (ladoApoio === 'MenorLivre') {
                    this.ApscFlecha = this.Largura;
                    this.aspectRatioCalcEspessura = this.largura / this.altura;
                    this.deflexao = Number(this.largura / this.altura).toFixed(2);
                    this.alpha = this.search("" + this.deflexao, this.array3lados);
                    [this.alpha].filter(function (x) { return _this.alpha = Number(x.value); });
                }
                else {
                    this.ApscFlecha = this.Altura;
                    this.aspectRatioCalcEspessura = this.altura / this.largura;
                    this.deflexao = Number(this.altura / this.largura).toFixed(2);
                    this.alpha = this.search("" + this.deflexao, this.array3lados);
                    [this.alpha].filter(function (x) { return _this.alpha = Number(x.value); });
                }
                break;
            default:
                this.aspectRatioCalcEspessura = this.maiorValor / this.menorValor;
                this.deflexao = Number(this.menorValor / this.maiorValor).toFixed(2);
                this.alpha = this.search("" + this.deflexao, this.array4lados);
                this.ApscFlecha = this.menorValor;
                console.log(this.alpha, '************************************apha depois do filtro');
                [this.alpha].filter(function (x) { return _this.alpha = Number(x.value); });
        }
        console.log(this.alpha, "************************alpha*************");
    };
    GeometriaComponent.prototype.definePressao = function (pressao) {
        if (pressao === null || pressao === 'null' || pressao === '' || pressao === undefined || Number(pressao) < this.pressaoMinima) {
            this.pressao = this.pressaoMinima;
        }
        else {
            this.pressao = this.geometriaForm.controls.Pressao.value;
        }
        return this.geometriaForm.controls.Pressao.setValue(this.pressao);
    };
    GeometriaComponent.prototype.minmax = function (value, min, max) {
        if (Number(value) < min || isNaN(Number(value))) {
            return min;
        }
        else if (Number(value) > max) {
            return max;
        }
        else {
            return value;
        }
    };
    GeometriaComponent.prototype.getAltura = function (object) {
        var altura = object.value;
        if (altura > 3.6) {
            this.maxLargura = 3.6;
            this.elApp.nativeElement.querySelector('#Largura')
                .setAttribute('max', "" + this.maxLargura);
        }
        else {
            this.maxLargura = 6;
            this.elApp.nativeElement.querySelector('#Largura')
                .setAttribute('max', "" + this.maxLargura);
        }
    };
    GeometriaComponent.prototype.getLargura = function (object) {
        var largura = object.value;
        if (largura > 3.6) {
            this.maxAltura = 3.6;
            this.elApp.nativeElement.querySelector('#Altura')
                .setAttribute('max', "" + this.maxAltura);
        }
        else {
            this.maxAltura = 6;
            this.elApp.nativeElement.querySelector('#Altura')
                .setAttribute('max', "" + this.maxAltura);
        }
    };
    GeometriaComponent.prototype.forma = function (geo) {
        var _this = this;
        var type = {
            'quadrado': function () { return _this.Altura * _this.Largura; },
            'triescaleno': function () { return Number(_this.Altura) * Number(2 / 3); },
            'triretangulo': function () { return Number(_this.Altura) * Number(2 / 3); },
            'trapezio': function () { return Number(_this.geometriaForm.controls.AlturaC) + Number(2 / 3) * (Number(_this.Altura) -
                Number(_this.geometriaForm.controls.AlturaC.value)); },
            'circular': function () { return Number(0.85) * Number(_this.Altura); },
            'semicirculo': function () { return Number(0.425) * (Number(_this.geometriaForm.controls.Largura) + Number(_this.geometriaForm.controls.AlturaC)); }
        };
        console.log(geo);
        geo === 'trapezio' || geo === 'semicirculo' ? this.InputC = true : this.InputC = false;
        this.area = type[geo]();
        console.log(this.area, 'Area');
    };
    GeometriaComponent.prototype.baseEspessuraVidro = function () {
        var _this = this;
        console.log(this.getTipoTratamento);
        switch (this.TipoVidroAplicado) {
            case 'monolitico':
                console.log('chamou a função monolitico');
                if (this.getTipoTratamento === 'comum') {
                    console.log('chamou a função monolitico com vidro comum');
                    this.espessuraVidro = [3, 4, 5, 6, 8, 10, 12, 15, 19];
                    // this.espessuraVidro = [8];
                }
                else {
                    console.log('chamou a função monolitico com vidro temperado');
                    this.espessuraVidro = [5, 6, 8, 10, 12, 15, 19];
                    // this.espessuraVidro = [8];
                }
                this.espessuraVidro.forEach(function (element) {
                    console.log("A espessura do vidro \u00E9 =>> " + element + " ");
                    _this.baseDiv = "A espessura do vidro \u00E9 " + Number(element);
                    _this.baseID = Number(element);
                    console.log("ID da Div => ****" + _this.baseID + "****");
                    _this.calculo(element);
                });
                break;
            case 'laminado':
                if (this.subtipoVidro === 'laminado-triplo') {
                    console.log('chamou a função laminado-triplo');
                    this.espessuraVidro = [{ a: 5, b: 5, c: 5 },
                        { a: 5, b: 6, c: 5 },
                        { a: 6, b: 6, c: 6 },
                        { a: 6, b: 8, c: 6 },
                        { a: 8, b: 8, c: 8 },
                        { a: 8, b: 10, c: 8 },
                        { a: 10, b: 10, c: 10 },
                        { a: 10, b: 12, c: 10 },
                        { a: 12, b: 12, c: 12 }];
                    this.espessuraVidro.forEach(function (element) {
                        console.log(element);
                        var laminado = Number(element.a) + Number(element.b) + Number(element.c);
                        console.log("A espessura do vidro \u00E9 " + Number(element.a) + " + " + Number(element.b) + " + " + Number(element.c) + " => " + laminado + " ");
                        _this.baseDiv = "A espessura do vidro \u00E9 " + Number(element.a) + " + " + Number(element.b) + " + " + Number(element.c);
                        _this.baseID = Number(element.a) + "-" + Number(element.b) + "-" + Number(element.b);
                        console.log("ID da Div => ****" + _this.baseID + "****");
                        _this.calculo(laminado);
                    });
                }
                else {
                    if (this.getTipoTratamento === 'comum') {
                        console.log('chamou a função laminado com vidro comum');
                        this.espessuraVidro = [{ a: 3, b: 3 },
                            { a: 3, b: 4 },
                            { a: 4, b: 4 },
                            { a: 4, b: 5 },
                            { a: 4, b: 6 },
                            { a: 5, b: 5 },
                            { a: 5, b: 6 },
                            { a: 6, b: 6 },
                            { a: 6, b: 8 },
                            { a: 8, b: 8 },
                            { a: 8, b: 10 },
                            { a: 10, b: 10 },
                            { a: 10, b: 12 },
                            { a: 12, b: 12 }];
                    }
                    else {
                        console.log('chamou a função laminado-Temperado');
                        this.espessuraVidro = [{ a: 5, b: 5 },
                            { a: 5, b: 6 },
                            { a: 6, b: 6 },
                            { a: 6, b: 8 },
                            { a: 8, b: 8 },
                            { a: 8, b: 10 },
                            { a: 10, b: 10 }];
                    }
                    this.espessuraVidro.forEach(function (element) {
                        console.log(element);
                        _this.laminadoValue = Number(element.a) + Number(element.b);
                        console.log("A espessura do vidro \u00E9 " + Number(element.a) + " + " + Number(element.b) + " => " + _this.laminadoValue + " ");
                        _this.baseDiv = "A espessura do vidro \u00E9 " + Number(element.a) + " + " + Number(element.b);
                        _this.baseID = Number(element.a) + "-" + Number(element.b);
                        console.log("ID da Div => ****" + _this.baseID + "****");
                        _this.calculo(_this.laminadoValue);
                    });
                }
                break;
            case 'insulado':
            // this.vidro2 = this.tipoVidroAplicado;
            // this.base(this.vidro2);
        }
    };
    GeometriaComponent.prototype.base = function (tipo) {
        var _this = this;
        if (tipo === 'monolitico') {
            if (this.getTipoTratamento === 'comum') {
                console.log('Insulado-1 monolitico com vidro comum');
                this.espessuraVidro = [3, 4, 5, 6, 8, 10, 12, 15, 19];
            }
            else {
                console.log('Insulado-1 monolitico com vidro temperado');
                this.espessuraVidro = [5, 6, 8, 10, 12, 15, 19];
            }
            this.espessuraVidro.forEach(function (element) {
                console.log("A espessura do vidro 1 \u00E9 " + element + " ");
                _this.insulado1Log = Number(element);
                _this.insulado1LogID = Number(element);
                _this.be1 = element;
                _this.numeroP = element;
                _this.base2(_this.vidro2);
            });
        }
        else {
            if (this.getTipoTratamento === 'comum') {
                console.log('Insulado-1 laminado com vidro comum');
                this.espessuraVidro = [{ a: 3, b: 3 },
                    { a: 3, b: 4 },
                    { a: 4, b: 4 },
                    { a: 4, b: 5 },
                    { a: 4, b: 6 },
                    { a: 5, b: 5 },
                    { a: 5, b: 6 },
                    { a: 6, b: 6 },
                    { a: 6, b: 8 },
                    { a: 8, b: 8 },
                    { a: 8, b: 10 },
                    { a: 10, b: 10 },
                    { a: 10, b: 12 },
                    { a: 12, b: 12 }];
            }
            else {
                console.log('Insulado-2 laminado-Temperado');
                this.espessuraVidro = [{ a: 5, b: 5 },
                    { a: 5, b: 6 },
                    { a: 6, b: 6 },
                    { a: 6, b: 8 },
                    { a: 8, b: 8 },
                    { a: 8, b: 10 },
                    { a: 10, b: 10 }];
            }
            this.espessuraVidro.forEach(function (element) {
                console.log(element);
                _this.laminadoValue = Number(element.a) + Number(element.b);
                console.log("A espessura do vidro 1 \u00E9 " + Number(element.a) + " + " + Number(element.b) + " => " + _this.laminadoValue + " ");
                _this.insulado1Log = eval(Number(element.a) + " + " + Number(element.b));
                _this.insulado1LogID = eval(Number(element.a) + "-" + Number(element.b));
                _this.numeroP = _this.laminadoValue;
                _this.be1 = Number(_this.laminadoValue) / (1.30 * 0.9);
                _this.base2(_this.vidro2);
            });
        }
    };
    GeometriaComponent.prototype.coeficienteTipoVidro = function () {
        switch (this.TipoVidroAplicado) {
            case 'float':
                this.fatorE3 = 1.00;
                this.omega = 2;
                break;
            case 'Impresso':
                this.fatorE3 = 1.10;
                this.omega = 2;
                break;
            case 'Aramado':
                this.fatorE3 = 1.20;
                this.omega = 2;
                break;
            case 'termo-endurecido':
                this.fatorE3 = 0.80;
                this.omega = 2;
                break;
            default:
                this.fatorE3 = 1;
                this.omega = 1;
                break;
        }
    };
    GeometriaComponent.prototype.calcular = function (form) {
        this.ArrayResultados = [];
        console.log(form);
        this.altura = Number(this.Altura);
        this.largura = Number(this.Largura);
        this.menorValor = Math.min(this.Altura, this.Largura);
        this.maiorValor = Math.max(this.Altura, this.Largura);
        this.tipoPavimento = this.getPavimento;
        console.log('form.Geometria');
        console.log(form.Geometria);
        this.forma(form.Geometria.value);
        this.ladosLivres(form.Apoio.value, form.ladoApoio.value);
        this.definePressao(form.Pressao.value);
        this.baseEspessuraVidro();
        console.log(this.Apoio, this.alpha, this.aspectRatioCalcEspessura, this.altura, this.largura, this.deflexao, this.pressao, this.menorValor);
    };
    GeometriaComponent.prototype.calculo = function (element) {
        this.PV = this.pressao;
        this.coefTipoVidro = this.coeficienteTipoVidro();
        this.fatorLaminado = (this.subtipoVidro === 'laminado-triplo') ? 1.50 : 1.30;
        switch (this.TipoVidroAplicado) {
            case 'laminado':
                console.log("element Inicial=>" + element);
                if (this.getTipoTratamento === 'temperado') {
                    this.elementNovoTemperado = (element / this.fatorLaminado) / (this.fatorE3 * Number('0.90')) / 0.77;
                    this.elementNovo = (element / this.fatorLaminado) / (this.fatorE3 * Number('0.90'));
                    this.pressaoP(this.elementNovo);
                    this.calcPressoes(this.elementNovoTemperado);
                    this.resultado(this.elementNovoTemperado, this.elementNovo);
                }
                else {
                    this.elementNovo = (element / this.fatorLaminado) / (this.fatorE3 * Number('0.90'));
                    console.log("Novo element=>" + this.elementNovo);
                    this.pressaoP(element);
                    this.calcPressoes(this.elementNovo);
                    this.resultado(this.elementNovo, this.elementNovo);
                }
                break;
            case 'monolitico':
                if (this.getTipoTratamento === 'temperado') {
                    this.elementTemperado = element / this.fatorE3 / 0.77;
                    element = element / this.fatorE3;
                    this.pressaoP(this.elementTemperado);
                    this.calcPressoes(this.elementTemperado);
                    this.resultado(this.elementTemperado, element);
                }
                else {
                    element = element / this.fatorE3;
                    this.pressaoP(element);
                    this.calcPressoes(element);
                    this.resultado(element, element);
                }
                break;
            case 'insulado':
                if (this.getTipoTratamento === 'temperado') {
                    this.elementNovoTemperado = (element) / 1.44 / 0.77;
                    this.elementNovo = (element) / 1.44;
                    this.calcPressoes(this.elementNovo);
                    this.resultado(this.elementNovoTemperado, this.elementNovo);
                }
                else {
                    this.elementNovo = (element) / 1.44;
                    this.calcPressoes(this.elementNovo);
                    this.resultado(this.elementNovo, this.elementNovo);
                }
                break;
            default:
                break;
        }
    };
    GeometriaComponent.prototype.calcPressoes = function (element) {
        this.calcAngulo = 0;
        this.angulo = Number(this.getInclinacao);
        if (this.angulo < 75) {
            this.calcAngulo = Math.cos(this.angulo * Math.PI / 180);
            console.log("Esse \u00E9 o Angulo do Calculo convertido " + this.calcAngulo);
        }
        console.log("\n        Angulo do input ==> " + (this.angulo) + "\n        Esse \u00E9 o fatorE3 => " + this.fatorE3 + "\n        Tipo Vidro => " + this.TipoVidroAplicado + "\n        Esse \u00E9 o Cosseno do angulo => " + Math.cos(this.angulo) + "\n        Valor do elemento => " + (element));
        if (this.apoio === '3lados' && 'MenorLivre') {
            this.fatorE3 = 1 * this.fatorE3;
            console.log("Esse \u00E9 o fatorE3 " + this.fatorE3);
        }
        else {
            this.fatorE3 = Number(2) * Number(this.fatorE3);
            console.log("Esse \u00E9 o 2 x fatorE3 " + this.fatorE3);
        }
        this.pressaoExterno1 = this.PV * 1.5;
        this.pressaoExterno2 = Number('1.2') * (Number(this.PV) + (Number(this.omega) * Number(this.PP) * Number(this.calcAngulo)));
        this.pressaoInterno1 = this.PP * 4.7;
        this.pressaoInterno2 = 600 + this.PP;
        this.tipoAplicacao = this.getAplicacao;
        console.log(this.tipoAplicacao, 'Tipo aplicacao');
        if (this.tipoAplicacao === 'externa') {
            if (this.angulo > 75) {
                this.pressaoCalculo = this.pressaoExterno1;
                console.log('Angulo maior que 75° EXTERNO');
            }
            else {
                this.pressaoCalculo = Math.max(this.pressaoExterno1, this.pressaoExterno2);
                console.log('Angulo menor que 75° EXTERNO');
            }
        }
        else {
            if (this.angulo > 75) {
                this.pressaoCalculo = Math.max(this.pressao, this.pressaoMinima);
                console.log('Angulo maior que 75° INTERNO');
            }
            else {
                this.pressaoCalculo = Math.max(this.pressaoInterno1, this.pressaoInterno2);
                console.log('Angulo menor que 75° INTERNO');
            }
        }
    };
    GeometriaComponent.prototype.resultado = function (element, element2, base, base2) {
        console.log("Angulo da pressao calculo =>> " + this.angulo);
        switch (this.tipoPavimento) {
            case 'Abaixo':
                this.tipoPavimentoValue = '0.90';
                break;
            case 'Acima':
                this.tipoPavimentoValue = '1.00';
                break;
            default:
                this.tipoPavimentoValue = '1.00';
                break;
        }
        console.log("Esse \u00E9 a espessura equivalente ===>> " + element + "***\n      Esse \u00E9 o Aspect Ratio =>> " + this.aspectRatioCalcEspessura + "\n      Esse \u00E9 o Deflex\u00E3o =>>" + this.deflexao + "\n      Esse \u00E9 o alpha =>> " + this.alpha + "\n      Tipo de Aplica\u00E7\u00E3o => " + this.tipoAplicacao + "\n      Angulo usado no Calculo => " + this.angulo + "\n      Press\u00E3o usada no Calculo => " + this.pressaoCalculo + "\n      Menor valor: " + this.menorValor + "\n      Area: " + this.area);
        console.log("\n      ********************\n      ***** Press\u00F5es *****\n      ********************\n      PV=> " + this.PV + "\n      PP=> " + this.PP + "\n      omega=> " + this.omega + "\n      calcAngulo=> " + this.calcAngulo + "\n      -----\n      Press\u00E3o externo 1 = PV *1.5 => " + this.pressaoExterno1 + "\n      Press\u00E3o externo 2 = 1.2 * (PV + omega * PP * calcAngulo) => " + this.pressaoExterno2 + "\n      Press\u00E3o interno 1 = PP * 4.7 => " + this.pressaoInterno1 + "\n      Press\u00E3o interno 2 = 600 + PP => " + this.pressaoInterno2 + "\n      ");
        console.log(this.pressaoCalculo, 'Pressão calcluco');
        this.resultado4lados = Math.sqrt((Number(this.area) * Number(this.pressaoCalculo)) / 100);
        this.resultado2ladosAlturaLivre = Number((Number(this.altura) * Math.sqrt(this.pressaoCalculo)) / Number(6.3));
        this.resultado2ladosLarguraLivre = Number((Number(this.largura) * Math.sqrt(this.pressaoCalculo)) / Number(6.3));
        this.resultado3ladosBordaMenor = Number((Math.min(this.altura, this.largura) * Math.sqrt(this.pressaoCalculo)) / Number(6.3));
        this.resultado3ladosBordaMaior = Math.sqrt(this.largura * Number(3) * this.altura * this.pressaoCalculo / 100);
        this.resultado3ladosBordaMaior2 = Number(3) * Math.min(this.altura, this.largura) * Math.sqrt(this.pressaoCalculo) / Number(6.3);
        console.log("Resultado 4 lados => " + this.resultado4lados + "\n      Resultado 2 lados Livres - Altura => " + this.resultado2ladosAlturaLivre + "\n      Resultado 2 lados Livres - Laterais => " + this.resultado2ladosLarguraLivre + "\n      Resultado 3 lados Borda menor Livre => " + this.resultado3ladosBordaMenor + "\n      Resultado 3 lados Borda MAIOR Livre => " + this.resultado3ladosBordaMaior + "\n      Resultado 3 lados Borda MAIOR Livre 2 => " + this.resultado3ladosBordaMaior2);
        console.log(this.geometriaForm.controls.ladoApoio.value + " e " + this.Apoio + "\n      ::::::\n       lado apoio e apoio\n      ::::");
        var numero = Math.max(this.altura, this.largura) / Math.min(this.altura, this.largura);
        switch (this.Apoio) {
            case '2lados':
                if (this.geometriaForm.controls.ladoApoio.value === 'altura') {
                    this.espessuraMinima = this.resultado2ladosLarguraLivre * Number(this.tipoPavimentoValue);
                    console.log("Espessura Minima =====>>>> " + this.espessuraMinima);
                }
                else {
                    this.espessuraMinima = this.resultado2ladosAlturaLivre * Number(this.tipoPavimentoValue);
                    console.log("Espessura Minima =====>>>> " + this.espessuraMinima);
                }
                break;
            case '3lados':
                if (this.geometriaForm.controls.ladoApoio.value === 'MenorLivre') {
                    this.espessuraMinima = this.resultado3ladosBordaMenor * Number(this.tipoPavimentoValue);
                    console.log("Espessura Minima =====>>>> " + this.espessuraMinima);
                }
                else {
                    if (numero <= Number(7.5)) {
                        console.log('Resultante Menor que 7.5 -- função 3 lados');
                        console.log("Numero da divis\u00E3o => " + numero);
                        console.log("Resultado Final => " + this.resultado3ladosBordaMaior);
                        this.espessuraMinima = Number(this.resultado3ladosBordaMaior) * Number(this.tipoPavimentoValue);
                        console.log("Espessura Minima =====>>>> " + this.espessuraMinima);
                    }
                    else {
                        console.log('Resultante Maior que 7.5 -- função 3 lados');
                        console.log("Numero da divis\u00E3o => " + numero);
                        console.log("Resultado Final => " + this.resultado3ladosBordaMaior2);
                        this.espessuraMinima = Number(this.resultado3ladosBordaMaior2) * Number(this.tipoPavimentoValue);
                        console.log("Espessura Minima =====>>>> " + this.espessuraMinima);
                    }
                }
                break;
            case '4lados': // 4lados apoiados
                if (this.aspectRatioCalcEspessura = Number(2.50)) {
                    // função 4 lados
                    console.log('Função 4 lados -- Ratio menor que 2.5');
                    console.log("Aspect Ratio Calc Espessura => " + this.aspectRatioCalcEspessura);
                    console.log("Espessura Final => " + this.resultado4lados);
                    this.espessuraMinima = Number(this.resultado4lados) * Number(this.tipoPavimentoValue);
                    console.log("Espessura Minima =====>>>> " + this.espessuraMinima);
                }
                else {
                    console.log('Ratio maior que 2.5');
                    console.log("Aspect Ratio Calc Espessura => " + this.aspectRatioCalcEspessura);
                    console.log("Espessura Final => " + this.resultado4lados2);
                    this.espessuraMinima = Number(this.resultado4lados2) * Number(this.tipoPavimentoValue);
                    console.log("Espessura Minima =====>>>> " + this.espessuraMinima);
                }
                break;
            default: //4lados apoiados
                if (this.aspectRatioCalcEspessura < Number(2.50)) {
                    console.log('Função 4 lados -- Ratio menor que 2.5');
                    console.log("Aspect Ratio Calc Espessura => " + this.aspectRatioCalcEspessura);
                    console.log("Espessura Final => " + this.resultado4lados);
                    this.espessuraMinima = Number(this.resultado4lados) * Number(this.tipoPavimentoValue);
                    console.log("Espessura Minima =====>>>> " + this.espessuraMinima);
                }
                else {
                    console.log('Ratio maior que 2.5');
                    console.log("Aspect Ratio Calc Espessura => " + this.aspectRatioCalcEspessura);
                    console.log("Espessura Final => " + this.resultado4lados2);
                    this.espessuraMinima = Number(this.resultado4lados2) * Number(this.tipoPavimentoValue);
                    console.log("Espessura Minima =====>>>> " + this.espessuraMinima);
                }
                break;
        }
        console.log(this.TipoVidroAplicado);
        if (this.TipoVidroAplicado === 'monolitico') {
            console.log("Elemento Flecha flesh: " + element2);
            this.flecha(element2);
        }
        else {
            console.log("Elemento Flecha flesh: " + this.laminadoValue);
            this.flecha(this.laminadoValue);
        }
        // this.primeiraDiv = document.querySelector(`div#id${this.baseID}`);
        // console.log(`Primeira div teste => ${this.primeiraDiv}`);
        if (this.primeiraDiv == null) {
            console.log("Espessura =====>>>> " + element);
            console.log("Fator E3 =====>>>> " + this.fatorE3);
            this.espessuraEquivalente = Number(element * this.fatorE3); //realizar esse calculo
            console.log("Espessura Minima =====>>>> " + this.espessuraEquivalente);
            //$('#resposta').innerHTML += `<div id='id${this.baseID}' style="border-radius:10px; border: 10px; padding:5px 0px 0px 10px;  background-color:#dfebe9; font-family: Arial, sans-serif;">${head}<p id="espessura${this.baseID}"></p><p id="espessura-minima${this.baseID}"></p><div id="resistencia${this.baseID}" style=" border-radius:0px 0px 10px 10px;margin-left:-10px; padding:10px; color: #fff"></div></div><br/>`;
            //$(`#espessura${this.baseID}`).innerHTML = `${this.baseDiv}<br/>Espessura equivalente: ${element.toFixed(2)}mm || Flecha Atuante: ${this.flechaAtuante.toFixed(2)}`;
            //$(`#espessura-minima${this.baseID}`).innerHTML = `Espessura Minima: ${this.espessuraMinima.toFixed(2)} || Flecha Admiss: ${this.flechaMinina.toFixed(2)}`;
            if (element < this.espessuraMinima) {
                //$(`#resistencia${this.baseID}`).style.backgroundColor = '#e63535';
                //$(`#resistencia${this.baseID}`).innerHTML = `KO`;
            }
            else {
                //$(`#resistencia${this.baseID}`).style.backgroundColor = '#5fba7d';
                //$(`#resistencia${this.baseID}`).innerHTML = `OK`;
            }
        }
        else {
            console.log("Espessura =====>>>> " + element);
            console.log("Fator E3 =====>>>> " + this.fatorE3);
            this.espessuraEquivalente = Number(element * this.fatorE3); //realizar esse calculo
            console.log("Espessura Minima =====>>>> " + this.espessuraEquivalente);
            //$(`#espessura${this.baseID}`).innerHTML = `${this.baseDiv}<br/>Espessura equivalente: ${element.toFixed(2)}mm || Flecha Atuante: ${this.flechaAtuante.toFixed(2)}`;
            //$(`#espessura-minima${this.baseID}`).innerHTML = `Espessura Minima: ${this.espessuraMinima.toFixed(2)} || Flecha Admiss: ${this.flechaMinina.toFixed(2)}`;
            if (element < this.espessuraMinima) {
                //$(`#resistencia${this.baseID}`).style.backgroundColor = '#e63535';
                //$(`#resistencia${this.baseID}`).innerHTML = `KO`;
            }
            else {
                //$(`#resistencia${this.baseID}`).style.backgroundColor = '#5fba7d';
                //$(`#resistencia${this.baseID}`).innerHTML = `OK`;
            }
        }
        console.log(element2, this.flechaMinina.toFixed(2), this.flechaAtuante.toFixed(2), '******* flecha******');
        console.log(element, this.espessuraMinima.toFixed(2), '*******Espessura******');
        this.ArrayResultados.push({
            EspessurasVidros: base2 ? base + " + " + base2 : "" + base,
            EspessuraVidro: Number(element),
            EspessuraMinima: Number(this.espessuraMinima.toFixed(2)),
            EspessuraBroken: Number(this.espessuraMinima.toFixed(2)) < Number(element) ? 'OK' : 'KO',
            FlechaMinima: Number(this.flechaMinina.toFixed(2)),
            FlechaAtuante: Number(this.flechaAtuante.toFixed(2)),
            FlechaBroken: Number(this.flechaMinina.toFixed(2)) > Number(this.flechaAtuante.toFixed(2)) ? 'OK' : 'KO'
        });
        console.log(this.ArrayResultados, 'ArayResultado');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('App', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], GeometriaComponent.prototype, "elApp", void 0);
    GeometriaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-geometria',
            template: __webpack_require__(/*! raw-loader!./geometria.component.html */ "./node_modules/raw-loader/index.js!./src/app/customers/calculadora/geometria/geometria.component.html"),
            styles: [__webpack_require__(/*! ./geometria.component.scss */ "./src/app/customers/calculadora/geometria/geometria.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GeometriaComponent);
    return GeometriaComponent;
}());



/***/ }),

/***/ "./src/app/customers/containers/customers.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/customers/containers/customers.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".geometria__options {\n  display: flex;\n  flex-wrap: wrap;\n  place-content: space-around;\n}\n.geometria__button {\n  flex: 1;\n  flex-basis: 30%;\n  display: flex;\n  place-content: space-around;\n}\n.geometria__button img {\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJzL2NvbnRhaW5lcnMvRDpcXFN0ZFxcX19XXFxnbGFzc2lmeS1hZG1pbi9zcmNcXGFwcFxcY3VzdG9tZXJzXFxjb250YWluZXJzXFxjdXN0b21lcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2N1c3RvbWVycy9jb250YWluZXJzL2N1c3RvbWVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUNBUjtBREVJO0VBQ0ksT0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7QUNBUjtBRENRO0VBQ0ksVUFBQTtBQ0NaIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXJzL2NvbnRhaW5lcnMvY3VzdG9tZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdlb21ldHJpYXtcclxuICAgICZfX29wdGlvbnN7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgcGxhY2UtY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgfVxyXG4gICAgJl9fYnV0dG9ue1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgZmxleC1iYXNpczogMzAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcGxhY2UtY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuZ2VvbWV0cmlhX19vcHRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwbGFjZS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uZ2VvbWV0cmlhX19idXR0b24ge1xuICBmbGV4OiAxO1xuICBmbGV4LWJhc2lzOiAzMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBsYWNlLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5nZW9tZXRyaWFfX2J1dHRvbiBpbWcge1xuICB3aWR0aDogOTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/customers/containers/customers.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/customers/containers/customers.component.ts ***!
  \*************************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_customers_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../store/customers.actions */ "./src/app/customers/store/customers.actions.ts");
/* harmony import */ var _store_customers_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/customers.selectors */ "./src/app/customers/store/customers.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/confirm-modal/confirm-modal.component */ "./src/app/shared/components/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _shared_components_customers_modal_customers_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/customers-modal/customers-modal.component */ "./src/app/shared/components/customers-modal/customers-modal.component.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CustomersComponent = /** @class */ (function () {
    function CustomersComponent(modalService, store, afAuth) {
        this.modalService = modalService;
        this.store = store;
        this.afAuth = afAuth;
        this.modalConfig = {
            class: 'modal-dialog-centered'
        };
    }
    CustomersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading$ = this.store.select(_store_customers_selectors__WEBPACK_IMPORTED_MODULE_4__["getIsLoading"]);
        this.customersSub = this.store.select(_store_customers_selectors__WEBPACK_IMPORTED_MODULE_4__["getCustomers"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (customers) {
            if (_this.user && !customers) {
                _this.store.dispatch(new _store_customers_actions__WEBPACK_IMPORTED_MODULE_3__["CustomersQuery"]());
            }
            return customers;
        }))
            .subscribe(function (customers) {
            if (customers && customers.length !== 0) {
                var index = Number(customers[customers.length - 1].id);
                _this.lastCustomerIndex = index;
            }
            else {
                _this.lastCustomerIndex = 0;
            }
            _this.customers = customers;
        });
        this.getGeometria();
    };
    Object.defineProperty(CustomersComponent.prototype, "user", {
        get: function () {
            return this.afAuth.auth.currentUser;
        },
        enumerable: true,
        configurable: true
    });
    CustomersComponent.prototype.ngOnDestroy = function () {
        if (this.customersSub) {
            this.customersSub.unsubscribe();
        }
    };
    CustomersComponent.prototype.onAddCustomer = function () {
        var _this = this;
        this.modalRef = this.modalService.show(_shared_components_customers_modal_customers_modal_component__WEBPACK_IMPORTED_MODULE_7__["CustomersModalComponent"], this.modalConfig);
        this.modalRef.content.heading = 'Add new customer';
        this.modalRef.content.customer.id = this.lastCustomerIndex + 1;
        this.modalRef.content.customerData.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (customerData) {
            _this.store.dispatch(new _store_customers_actions__WEBPACK_IMPORTED_MODULE_3__["CustomersAdded"]({ customer: customerData }));
        });
    };
    CustomersComponent.prototype.openEditCustomerModal = function (customer) {
        var _this = this;
        this.modalRef = this.modalService.show(_shared_components_customers_modal_customers_modal_component__WEBPACK_IMPORTED_MODULE_7__["CustomersModalComponent"], this.modalConfig);
        this.modalRef.content.heading = 'Edit customer';
        var customerCopy = {
            key: customer.key,
            id: customer.id || null,
            name: customer.name || null,
            description: customer.description || null
        };
        this.modalRef.content.customer = customerCopy;
        this.modalRef.content.customerData.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (customerData) {
            _this.store.dispatch(new _store_customers_actions__WEBPACK_IMPORTED_MODULE_3__["CustomersEdited"]({ customer: customerData }));
        });
    };
    CustomersComponent.prototype.openConfirmModal = function (customer) {
        var _this = this;
        this.modalRef = this.modalService.show(_shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalComponent"], this.modalConfig);
        this.modalRef.content.confirmation.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (confirmation) {
            if (confirmation) {
                _this.store.dispatch(new _store_customers_actions__WEBPACK_IMPORTED_MODULE_3__["CustomersDeleted"]({ customer: customer }));
            }
        });
    };
    CustomersComponent.prototype.onCustomerEdit = function (customer) {
        this.openEditCustomerModal(customer);
    };
    CustomersComponent.prototype.onCustomerDelete = function (customer) {
        this.openConfirmModal(customer);
    };
    CustomersComponent.prototype.storeGeometria = function (el) {
        sessionStorage.setItem('Geometria', el.id);
        this.getGeometria();
    };
    CustomersComponent.prototype.getGeometria = function () {
        this.geometria = sessionStorage.getItem('Geometria');
        return this.geometria;
    };
    CustomersComponent.prototype.showFig = function () {
        if (this.geometria = 'quadrado') {
            return this.apoioQuadrado = true;
        }
    };
    CustomersComponent.prototype.apoio = function (el) {
        return el;
    };
    CustomersComponent.prototype.storeApoio = function (el) {
        return sessionStorage.setItem('Apoio', el.id);
    };
    CustomersComponent.prototype.getOptions = function (el) {
        return console.log(el);
    };
    CustomersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customers',
            template: __webpack_require__(/*! raw-loader!./customers.component.html */ "./node_modules/raw-loader/index.js!./src/app/customers/containers/customers.component.html"),
            styles: [__webpack_require__(/*! ./customers.component.scss */ "./src/app/customers/containers/customers.component.scss")]
        }),
        __metadata("design:paramtypes", [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBModalService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"]])
    ], CustomersComponent);
    return CustomersComponent;
}());



/***/ }),

/***/ "./src/app/customers/customers-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/customers/customers-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CustomersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersRoutingModule", function() { return CustomersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_customers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/customers.component */ "./src/app/customers/containers/customers.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _containers_customers_component__WEBPACK_IMPORTED_MODULE_2__["CustomersComponent"] }
];
var CustomersRoutingModule = /** @class */ (function () {
    function CustomersRoutingModule() {
    }
    CustomersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CustomersRoutingModule);
    return CustomersRoutingModule;
}());



/***/ }),

/***/ "./src/app/customers/customers.module.ts":
/*!***********************************************!*\
  !*** ./src/app/customers/customers.module.ts ***!
  \***********************************************/
/*! exports provided: CustomersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersModule", function() { return CustomersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _containers_customers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/customers.component */ "./src/app/customers/containers/customers.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _store_customers_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/customers.reducer */ "./src/app/customers/store/customers.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_customers_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/customers.effects */ "./src/app/customers/store/customers.effects.ts");
/* harmony import */ var _customers_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customers-routing.module */ "./src/app/customers/customers-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _calculadora_geometria_geometria_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./calculadora/geometria/geometria.component */ "./src/app/customers/calculadora/geometria/geometria.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var CustomersModule = /** @class */ (function () {
    function CustomersModule() {
    }
    CustomersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                _customers_routing_module__WEBPACK_IMPORTED_MODULE_9__["CustomersRoutingModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["ModalModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["ButtonsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["InputsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["IconsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forFeature('customers', _store_customers_reducer__WEBPACK_IMPORTED_MODULE_5__["customersReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forFeature([_store_customers_effects__WEBPACK_IMPORTED_MODULE_8__["CustomersEffects"]])
            ],
            declarations: [_containers_customers_component__WEBPACK_IMPORTED_MODULE_2__["CustomersComponent"], _calculadora_geometria_geometria_component__WEBPACK_IMPORTED_MODULE_11__["GeometriaComponent"]],
            exports: [_containers_customers_component__WEBPACK_IMPORTED_MODULE_2__["CustomersComponent"]],
        })
    ], CustomersModule);
    return CustomersModule;
}());



/***/ }),

/***/ "./src/app/customers/store/customers.actions.ts":
/*!******************************************************!*\
  !*** ./src/app/customers/store/customers.actions.ts ***!
  \******************************************************/
/*! exports provided: CustomersActionTypes, CustomersQuery, CustomersLoaded, CustomersAdded, CustomersEdited, CustomersDeleted, CustomersError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersActionTypes", function() { return CustomersActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersQuery", function() { return CustomersQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersLoaded", function() { return CustomersLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersAdded", function() { return CustomersAdded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersEdited", function() { return CustomersEdited; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersDeleted", function() { return CustomersDeleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersError", function() { return CustomersError; });
var CustomersActionTypes;
(function (CustomersActionTypes) {
    CustomersActionTypes["CUSTOMERS_QUERY"] = "[Customers] Query";
    CustomersActionTypes["CUSTOMERS_LOADED"] = "[Customers] Fetched";
    CustomersActionTypes["CUSTOMERS_ADDED"] = "[Customers] Added";
    CustomersActionTypes["CUSTOMERS_EDITED"] = "[Customers] Edited";
    CustomersActionTypes["CUSTOMERS_DELETED"] = "[Customers] Deleted";
    CustomersActionTypes["CUSTOMERS_ERROR"] = "[Customers] Error";
})(CustomersActionTypes || (CustomersActionTypes = {}));
var CustomersQuery = /** @class */ (function () {
    function CustomersQuery() {
        this.type = CustomersActionTypes.CUSTOMERS_QUERY;
    }
    return CustomersQuery;
}());

var CustomersLoaded = /** @class */ (function () {
    function CustomersLoaded(payload) {
        this.payload = payload;
        this.type = CustomersActionTypes.CUSTOMERS_LOADED;
    }
    return CustomersLoaded;
}());

var CustomersAdded = /** @class */ (function () {
    function CustomersAdded(payload) {
        this.payload = payload;
        this.type = CustomersActionTypes.CUSTOMERS_ADDED;
    }
    return CustomersAdded;
}());

var CustomersEdited = /** @class */ (function () {
    function CustomersEdited(payload) {
        this.payload = payload;
        this.type = CustomersActionTypes.CUSTOMERS_EDITED;
    }
    return CustomersEdited;
}());

var CustomersDeleted = /** @class */ (function () {
    function CustomersDeleted(payload) {
        this.payload = payload;
        this.type = CustomersActionTypes.CUSTOMERS_DELETED;
    }
    return CustomersDeleted;
}());

var CustomersError = /** @class */ (function () {
    function CustomersError(payload) {
        this.payload = payload;
        this.type = CustomersActionTypes.CUSTOMERS_ERROR;
    }
    return CustomersError;
}());



/***/ }),

/***/ "./src/app/customers/store/customers.effects.ts":
/*!******************************************************!*\
  !*** ./src/app/customers/store/customers.effects.ts ***!
  \******************************************************/
/*! exports provided: CustomersEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersEffects", function() { return CustomersEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/customers.service */ "./src/app/customers/services/customers.service.ts");
/* harmony import */ var _customers_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers.actions */ "./src/app/customers/store/customers.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/store/auth.selectors */ "./src/app/auth/store/auth.selectors.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CustomersEffects = /** @class */ (function () {
    function CustomersEffects(actions$, customersService, store) {
        var _this = this;
        this.actions$ = actions$;
        this.customersService = customersService;
        this.store = store;
        this.query$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_customers_actions__WEBPACK_IMPORTED_MODULE_3__["CustomersActionTypes"].CUSTOMERS_QUERY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var user = _a[1];
            return _this.customersService.get(user.uid)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                var customersData = data.map(function (res) {
                    var key = res.payload.key;
                    var customer = res.payload.val();
                    return {
                        key: key,
                        id: customer.id,
                        name: customer.name,
                        description: customer.description
                    };
                });
                return (new _customers_actions__WEBPACK_IMPORTED_MODULE_3__["CustomersLoaded"]({ customers: customersData }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _customers_actions__WEBPACK_IMPORTED_MODULE_3__["CustomersError"]({ error: error }));
            }));
        }));
        this.added$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_customers_actions__WEBPACK_IMPORTED_MODULE_3__["CustomersActionTypes"].CUSTOMERS_ADDED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var payload = _a[0], user = _a[1];
            return _this.customersService.add(payload.customer, user.uid);
        }));
        this.edit$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_customers_actions__WEBPACK_IMPORTED_MODULE_3__["CustomersActionTypes"].CUSTOMERS_EDITED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var payload = _a[0], user = _a[1];
            return _this.customersService.update(payload.customer, user.uid)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _customers_actions__WEBPACK_IMPORTED_MODULE_3__["CustomersError"]({ error: error }));
            }));
        }));
        this.delete$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_customers_actions__WEBPACK_IMPORTED_MODULE_3__["CustomersActionTypes"].CUSTOMERS_DELETED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var payload = _a[0], user = _a[1];
            return _this.customersService.delete(payload.customer, user.uid);
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], CustomersEffects.prototype, "query$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], CustomersEffects.prototype, "added$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], CustomersEffects.prototype, "edit$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], CustomersEffects.prototype, "delete$", void 0);
    CustomersEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"], _services_customers_service__WEBPACK_IMPORTED_MODULE_2__["CustomersService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]])
    ], CustomersEffects);
    return CustomersEffects;
}());



/***/ }),

/***/ "./src/app/customers/store/customers.reducer.ts":
/*!******************************************************!*\
  !*** ./src/app/customers/store/customers.reducer.ts ***!
  \******************************************************/
/*! exports provided: customersReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customersReducer", function() { return customersReducer; });
/* harmony import */ var _customers_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customers.state */ "./src/app/customers/store/customers.state.ts");
/* harmony import */ var _customers_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customers.actions */ "./src/app/customers/store/customers.actions.ts");


function customersReducer(state, action) {
    if (state === void 0) { state = _customers_state__WEBPACK_IMPORTED_MODULE_0__["customersInitialState"]; }
    switch (action.type) {
        case _customers_actions__WEBPACK_IMPORTED_MODULE_1__["CustomersActionTypes"].CUSTOMERS_QUERY: {
            return Object.assign({}, state, {
                isLoading: true,
            });
        }
        case _customers_actions__WEBPACK_IMPORTED_MODULE_1__["CustomersActionTypes"].CUSTOMERS_LOADED: {
            return Object.assign({}, state, {
                customers: action.payload.customers,
                isLoading: false,
            });
        }
        case _customers_actions__WEBPACK_IMPORTED_MODULE_1__["CustomersActionTypes"].CUSTOMERS_ERROR: {
            return Object.assign({}, state, {
                isLoading: false,
                error: action.payload.error
            });
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/customers/store/customers.selectors.ts":
/*!********************************************************!*\
  !*** ./src/app/customers/store/customers.selectors.ts ***!
  \********************************************************/
/*! exports provided: getCustomersState, getCustomers, getIsLoading, getError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomersState", function() { return getCustomersState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomers", function() { return getCustomers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLoading", function() { return getIsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return getError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var getCustomersState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('customers');
var getCustomers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCustomersState, function (customers) { return customers.customers; });
var getIsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCustomersState, function (customers) { return customers.isLoading; });
var getError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCustomersState, function (customers) { return customers.error; });


/***/ }),

/***/ "./src/app/customers/store/customers.state.ts":
/*!****************************************************!*\
  !*** ./src/app/customers/store/customers.state.ts ***!
  \****************************************************/
/*! exports provided: customersInitialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customersInitialState", function() { return customersInitialState; });
var customersInitialState = {
    customers: null,
    isLoading: true,
    error: null
};


/***/ })

}]);
//# sourceMappingURL=customers-customers-module.js.map
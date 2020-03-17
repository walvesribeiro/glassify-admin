import { Component, OnInit, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-geometria',
  templateUrl: './geometria.component.html',
  styleUrls: ['./geometria.component.scss']
})
export class GeometriaComponent implements OnInit, OnChanges {

  @ViewChild('App', {static: false}) elApp: ElementRef;

  geometriaForm: FormGroup;
  calculoForm: FormGroup;
  geometria: any;
  largura: any;
  altura: any;
  apoio: any;
  maxAltura = 6;
  maxLargura = 6;
  gravidade = 9.80665;
  espessuraVidro: any;
  pressaoMinima = 600;
  InputC: boolean;
  tipoVidroAplicado: any;
  tipoTratamentoTermico: string;
  baseDiv: string;
  baseID: any;
  PV: any;
  pressao: any;
  coefTipoVidro: any;
  fatorLaminado: number;
  elementNovoTemperado: number;
  fatorE3: number;
  elementNovo: number;
  elementTemperado: number;
  calcAngulo: number;
  angulo: number;
  tipoVidro: any;
  pressaoExterno1: number;
  pressaoExterno2: number;
  pressaoInterno1: number;
  pressaoInterno2: any;
  PP: number;
  omega: any;
  flechaAtuante: number;
  alpha: number;
  pressaoCalculo: number;
  menorValor: number;
  flechaMinina: number;
  subtipoVidro: string;
  insulado1Log: number;
  insulado1LogID: number;
  be1: any;
  numeroP: any;
  vidro2: any;
  be2: any;
  insulado2Log: string;
  numeroP2: any;
  tipoPavimento: any;
  tipoPavimentoValue: string;
  aspectRatioCalcEspessura: any;
  deflexao: any;
  tipoAplicacao: any;
  area: any;
  resultado4lados: number;
  resultado4lados2: number;
  resultado2ladosAlturaLivre: number;
  resultado2ladosLarguraLivre: number;
  resultado3ladosBordaMenor: number;
  resultado3ladosBordaMaior: number;
  resultado3ladosBordaMaior2: number;
  espessuraMinima: number;
  flech: any;
  primeiraDiv: any;
  espessuraEquivalente: number;
  maiorValor: number;

  constructor() { }

  ngOnInit() {
    this.buildForm();
    this.buildCalculo();
    this.geometriaForm.valueChanges.subscribe(
      (x: any) => {this.Enviar(); console.log(x)}
    );

  }

  ngOnChanges(changes: any): void {
    this.definePressao(changes);
    this.getAltura(changes);
    this.getLargura(changes);
    this.buildCalculo();
    this.Enviar();
  }

  buildForm() {
    this.geometriaForm = new FormGroup({
      Geometria: new FormControl(),
      Apoio: new FormControl(),
      ladoApoio: new FormControl(),
      Aplicacao: new FormControl(),
      Inclinacao: new FormControl(),
      Largura: new FormControl(),
      Altura: new FormControl(),
      Pressao: new FormControl(),
      TipoVidro: new FormControl(),
    });
  }

  buildCalculo() {
    this.geometriaForm = new FormGroup({
      Geometria: new FormControl(sessionStorage.getItem('Geometria')),
      Apoio: new FormControl(sessionStorage.getItem('Apoio')),
      ladoApoio: new FormControl(sessionStorage.getItem('ladoApoio')),
      Aplicacao: new FormControl(sessionStorage.getItem('Aplicacao')),
      Inclinacao: new FormControl(sessionStorage.getItem('Inclinacao')),
      Largura: new FormControl(sessionStorage.getItem('Largura')),
      Altura: new FormControl(sessionStorage.getItem('Altura')),
      AlturaC: new FormControl(sessionStorage.getItem('AlturaC')),
      Pressao: new FormControl(sessionStorage.getItem('Pressao')),
      TipoVidro: new FormControl(sessionStorage.getItem('TipoVidro')),
    });
  }
  storeItem(el: any) {
    sessionStorage.setItem(el.name, el.value);
  }

  getGeometria() {
    this.geometria = sessionStorage.getItem('Geometria');
    return this.geometria;
  }
  getApoio() {
    this.apoio = sessionStorage.getItem('Apoio');
    return this.apoio;
  }
  get geoForm() {
    return this.geometriaForm.controls.Geometria = this.geometria;
  }

  flecha(element: any) {
    console.log(`Elemento Flecha: ${element}`);
    console.log(`alpha Flecha atuante: ${this.alpha}`);
    console.log(`Pressao Flecha atuante: ${this.pressaoCalculo}`);
    this.flechaAtuante = this.alpha * (this.pressaoCalculo / Number(1.5)) * (Math.pow(this.menorValor, 4) / Math.pow(element, 3));
    console.log(`Flecha Atuante: ${this.flechaAtuante}`);
    this.flechaMinina = (this.apoio === '4apoios') ?
      Math.min( this.menorValor / Number(60 * 1000) * Math.pow(10, 6), Number(30) ) :
      ((this.apoio === '3apoiosMenorLivre' || '3apoiosMaiorLivre') ?
        Math.min( this.menorValor / Number(100 * 1000), Number(50)) * Math.pow(10, 6) :
          Math.min( this.menorValor / Number(150 * 1000), Number(50)) * Math.pow(10, 6) );
    console.log(`Flecha Minima: ${this.flechaMinina}`);
  }

  pressaoP(element: any) {
    this.PP = Number(2.5) * Number(this.gravidade) * Number(element);
    console.log(`Esse é o PP da espessura ${element}=> ${this.PP}`);
    this.ladosLivres();
  }
  search(nameKey: any, myArray: any) {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            return myArray[i];
        }
    }
}
  ladosLivres() {
    switch (this.apoio) {
        case '2apoiosTopoLivre':
                this.aspectRatioCalcEspessura = this.altura / this.largura;
                this.deflexao = Number(this.altura  / this.largura).toFixed(2);
                this.alpha = 2.11430;
            break;
        case '2apoiosLadoLivre':
                this.aspectRatioCalcEspessura = this.largura / this.altura;
                this.deflexao = Number(this.largura / this.altura ).toFixed(2);
                this.alpha = 2.11430;
            break;
        case '3apoiosMenorLivre':
                this.aspectRatioCalcEspessura = this.largura / this.altura;
                this.deflexao = Number(this.largura / this.altura ).toFixed(2);
                this.alpha = this.search(`${this.deflexao}`, this.array3lados);
                // this.alpha = this.alpha;
            break;
        case '3apoiosMaiorLivre':
                this.aspectRatioCalcEspessura = this.altura / this.largura;
                this.deflexao = Number(this.altura / this.largura).toFixed(2);
                this.alpha = this.search(`${this.deflexao}`, this.array3lados);
                this.alpha = this.alpha;
            break;
        case '4apoios': //4lados apoiados
                this.aspectRatioCalcEspessura = this.maiorValor / this.menorValor;
                this.deflexao = Number(this.menorValor / this.maiorValor).toFixed(2);
                this.alpha = this.search(`${this.deflexao}`, this.array4lados);
                // this.alpha = this.alpha;
            break;
        default: //4lados apoiados
                this.aspectRatioCalcEspessura = this.maiorValor / this.menorValor;
                this.deflexao = Number(this.menorValor / this.maiorValor).toFixed(2);
                this.alpha = this.search(`${this.deflexao}`, this.array4lados);
                // this.alpha = this.alpha;
            break;
    }
}

  definePressao(pressao: string | null | undefined) {
    if (pressao !== null || pressao !== '' || pressao !== undefined) {
        this.pressao = this.pressaoMinima;
    } else {
        this.pressao = this.geometriaForm.controls.Pressao.value;
    }
    this.geometriaForm.controls.Pressao.setValue(this.pressao);
  }

  minmax(value: Number, min: Number, max: Number) {
    if (Number(value) < min || isNaN(Number(value))) {
      return min;
    } else if (Number(value) > max) {
      return max;
    } else {
      return value;
    }
  }

  getAltura(object: any) {
    const altura = object.value;
    if (altura > 3.6) {
        this.maxLargura = 3.6;
        this.elApp.nativeElement.querySelector('#Largura')
          .setAttribute('max', `${this.maxLargura}`);
    } else {
        this.maxLargura = 6;
        this.elApp.nativeElement.querySelector('#Largura')
          .setAttribute('max', `${this.maxLargura}`);
    }
  }

  getLargura(object: any) {
    const largura = object.value;
    if (largura > 3.6) {
      this.maxAltura = 3.6;
      this.elApp.nativeElement.querySelector('#Altura')
        .setAttribute('max', `${this.maxAltura}`);
    } else {
      this.maxAltura = 6;
      this.elApp.nativeElement.querySelector('#Altura')
        .setAttribute('max', `${this.maxAltura}`);
    }
  }

  forma(geo: any) {
    const type: any = {
        'quadrado': () => this.geometriaForm.controls.Altura.value * this.geometriaForm.controls.Largura.value, // ok
        'triescaleno': () => Number(this.geometriaForm.controls.Altura.value) * Number(2 / 3), // ok
        'triretangulo': () => Number(this.geometriaForm.controls.Altura.value) * Number(2 / 3), // ok
        'trapezio': () => Number(this.geometriaForm.controls.AlturaC) + Number(2 / 3) * (Number(this.geometriaForm.controls.Altura.value) -
          Number(this.geometriaForm.controls.AlturaC.value)),
        'circular': () => Number(0.85) * Number(this.geometriaForm.controls.Altura.value), // ok
        'semicirculo': () => Number(0.425) * (Number(this.geometriaForm.controls.Largura) + Number(this.geometriaForm.controls.AlturaC))
    };
    console.log(geo.value);

    geo.value === 'trapezio' || geo.value === 'semicirculo'  ? this.InputC = true : this.InputC = false;
    const area = type[geo.value]();
    console.log(area);
  }


  Enviar() {
    console.log(this.geometriaForm.value);

  }

  baseEspessuraVidro() {
    switch (this.tipoVidroAplicado) {
      case 'monolitico':
        console.log('chamou a função monolitico');
        if (this.tipoTratamentoTermico == 'comum') {
            console.log('chamou a função monolitico com vidro comum');
            this.espessuraVidro = [3, 4, 5, 6, 8, 10, 12, 15, 19];
        } else {
            console.log('chamou a função monolitico com vidro temperado');
            this.espessuraVidro = [5, 6, 8, 10, 12, 15, 19];
        }
        this.espessuraVidro.forEach( (element: any) => {
            console.log(`A espessura do vidro é =>> ${element} `);
            this.baseDiv = `A espessura do vidro é ${Number(element)}`;
            this.baseID = Number(element);
            console.log(`ID da Div => ****${this.baseID}****`);
            this.calculo(element);
        });
        break;
  case 'laminado':
      if (this.subtipoVidro === 'laminado-triplo') {
          console.log('chamou a função laminado-triplo');
          this.espessuraVidro = [{a: 5, b: 5, c: 5},
                                {a: 5, b: 6, c: 5},
                                {a: 6, b: 6, c: 6},
                                {a: 6, b: 8, c: 6},
                                {a: 8, b: 8, c: 8},
                                {a: 8, b: 10, c: 8},
                                {a: 10, b: 10, c: 10},
                                {a: 10, b: 12, c: 10},
                                {a: 12, b: 12, c: 12}];

          this.espessuraVidro.forEach((element: any) => {
            console.log(element);
            const laminado = Number(element.a) + Number(element.b) + Number(element.c);
            console.log(`A espessura do vidro é ${Number(element.a)} + ${Number(element.b)} + ${Number(element.c)} => ${laminado} `);
            this.baseDiv = `A espessura do vidro é ${Number(element.a)} + ${Number(element.b)} + ${Number(element.c)}`;
            this.baseID = `${Number(element.a)}-${Number(element.b)}-${Number(element.b)}`;
            console.log(`ID da Div => ****${this.baseID}****`);
            this.calculo(laminado);
          });
      } else {
          if (this.tipoTratamentoTermico == 'comum') {
              console.log('chamou a função laminado com vidro comum');
              this.espessuraVidro = [{a: 3, b: 3},
                 {a: 3, b: 4},
                 {a: 4, b: 4},
                 {a: 4, b: 5},
                 {a: 4, b: 6},
                 {a: 5, b: 5},
                 {a: 5, b: 6},
                 {a: 6, b: 6},
                 {a: 6, b: 8},
                 {a: 8, b: 8},
                 {a: 8, b: 10},
                 {a: 10, b: 10},
                 {a: 10, b: 12},
                 {a: 12, b: 12}];
          } else {
              console.log('chamou a função laminado-Temperado');
              this.espessuraVidro = [{a: 5, b: 5},
                 {a: 5, b: 6},
                 {a: 6, b: 6},
                 {a: 6, b: 8},
                 {a: 8, b: 8},
                 {a: 8, b: 10},
                 {a: 10, b: 10}];
          }
          this.espessuraVidro.forEach((element: any) => {
              console.log(element);
              const laminado = Number(element.a) + Number(element.b);
              console.log(`A espessura do vidro é ${Number(element.a)} + ${Number(element.b)} => ${laminado} `);
              this.baseDiv = `A espessura do vidro é ${Number(element.a)} + ${Number(element.b)}`;
              this.baseID = `${Number(element.a)}-${Number(element.b)}`;
              console.log(`ID da Div => ****${this.baseID}****`);
              this.calculo(laminado);
          });
      }
      break;

      case 'insulado':
        // vidro1 = $('#subtipoVidro1').value;
        // vidro2 = $('#subtipoVidro2').value;
      }
    }
      base(tipo: any) {
          if (tipo === 'monolitico') {
              if (this.tipoTratamentoTermico == 'comum') {
                  console.log('Insulado-1 monolitico com vidro comum');
                  this.espessuraVidro = [3, 4, 5, 6, 8, 10, 12, 15, 19];
              } else {
                  console.log('Insulado-1 monolitico com vidro temperado');
                  this.espessuraVidro = [5, 6, 8, 10, 12, 15, 19];
              }
              this.espessuraVidro.forEach((element: any) => {
                  console.log(`A espessura do vidro 1 é ${element} `);
                  this.insulado1Log = Number(element);
                  this.insulado1LogID = Number(element);
                  this.be1 = element;
                  this.numeroP = element;
                  this.base2(this.vidro2);
              });
          } else {
              if (this.tipoTratamentoTermico === 'comum') {
                  console.log('Insulado-1 laminado com vidro comum');
                  this.espessuraVidro = [{a: 3, b: 3},
                     {a: 3, b: 4},
                     {a: 4, b: 4},
                     {a: 4, b: 5},
                     {a: 4, b: 6},
                     {a: 5, b: 5},
                     {a: 5, b: 6},
                     {a: 6, b: 6},
                     {a: 6, b: 8},
                     {a: 8, b: 8},
                     {a: 8, b: 10},
                     {a: 10, b: 10},
                     {a: 10, b: 12},
                     {a: 12, b: 12}];
              } else {
                  console.log('Insulado-2 laminado-Temperado');
                  this.espessuraVidro = [{a: 5, b: 5},
                     {a: 5, b: 6},
                     {a: 6, b: 6},
                     {a: 6, b: 8},
                     {a: 8, b: 8},
                     {a: 8, b: 10},
                     {a: 10, b: 10}];
              }
              this.espessuraVidro.forEach((element: any) => {
                  console.log(element);
                  const laminado = Number(element.a) + Number(element.b);
                  console.log(`A espessura do vidro 1 é ${Number(element.a)} + ${Number(element.b)} => ${laminado} `);
                  this.insulado1Log = eval(`${Number(element.a)} + ${Number(element.b)}`);
                  this.insulado1LogID = eval(`${Number(element.a)}-${Number(element.b)}`);
                  this.numeroP = laminado;
                  this.be1 = Number(laminado) / (1.30 * 0.9);
                  this.base2(this.vidro2);
              });
          }
      }

      base2 = (tipo: string) => {
          if (tipo === 'monolitico') {
              if (this.tipoTratamentoTermico === 'comum') {
                  console.log('Insulado-2 monolitico com vidro comum');
                  this.espessuraVidro = [3, 4, 5, 6, 8, 10, 12, 15, 19];
              } else {
                  console.log('Insulado-2 monolitico com vidro temperado');
                  this.espessuraVidro = [5, 6, 8, 10, 12, 15, 19];
              }
              this.espessuraVidro.forEach((element: any) => {
                  console.log(`A espessura do vidro 2 é ${element} `);
                  this.baseID = `${this.insulado1LogID}-${element}`;
                  console.log(`ID da Div => ****${this.baseID}****`);
                  this.be2 = element;
                  this.insulado2Log = `${element}`;
                  this.numeroP2 = this.be2;
                  this.resultado(this.be1, this.be2);
              });
          } else {
              if (this.tipoTratamentoTermico == 'comum') {
                  console.log('Insulado-2 laminado com vidro comum');
                  this.espessuraVidro = [{a: 3, b: 3},
                     {a: 3, b: 4},
                     {a: 4, b: 4},
                     {a: 4, b: 5},
                     {a: 4, b: 6},
                     {a: 5, b: 5},
                     {a: 5, b: 6},
                     {a: 6, b: 6},
                     {a: 6, b: 8},
                     {a: 8, b: 8},
                     {a: 8, b: 10},
                     {a: 10, b: 10},
                     {a: 10, b: 12},
                     {a: 12, b: 12}];
              } else {
                  console.log('Insulado-2 laminado-Temperado');
                  this.espessuraVidro = [{a: 5, b: 5},
                     {a: 5, b: 6},
                     {a: 6, b: 6},
                     {a: 6, b: 8},
                     {a: 8, b: 8},
                     {a: 8, b: 10},
                     {a: 10, b: 10}];
              }
              this.espessuraVidro.forEach((element: any) => {
                  console.log(element);
                  const laminado = Number(element.a) + Number(element.b);
                  console.log(`A espessura do vidro 2 é ${Number(element.a)} + ${Number(element.b)} => ${laminado} `);
                  this.baseID = `${this.insulado1LogID}-${Number(element.a)}-${Number(element.b)}`;
                  console.log(`ID da Div => ****${this.baseID}****`);
                  this.numeroP2 = laminado;
                  this.be2 = Number(laminado) / (1.30 * 0.9);
                  this.insulado2Log = `${element.a} + ${element.b}`;
                  this.resultado(this.be1, this.be2);
              });
          }
      }
      coeficienteTipoVidro() {
        switch (this.tipoVidro) {
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
    }
            calculo(element: any) {
              this.PV = this.pressao;
              this.coefTipoVidro = this.coeficienteTipoVidro();
              this.fatorLaminado = (this.subtipoVidro == 'laminado-triplo') ?  1.50 : 1.30;
              switch (this.tipoVidroAplicado) {
               case 'laminado':
                  console.log(`element Inicial=>${element}`);
                  if (this.tipoTratamentoTermico == 'temperado') {
                      this.elementNovoTemperado = (element / this.fatorLaminado) / (this.fatorE3 * Number('0.90')) / 0.77;
                      this.elementNovo = (element / this.fatorLaminado) / (this.fatorE3 * Number('0.90'));
                      this.pressaoP(this.elementNovo);
                      this.calcPressoes(this.elementNovoTemperado);
                      this.resultado(this.elementNovoTemperado, this.elementNovo);
                  } else {
                      this.elementNovo = (element / this.fatorLaminado) / (this.fatorE3 * Number('0.90'));
                      console.log(`Novo element=>${this.elementNovo}`);
                      this.pressaoP(element);
                      this.calcPressoes(this.elementNovo);
                      this.resultado(this.elementNovo, this.elementNovo);
                      }
                  break;
              case 'monolitico':
                  if (this.tipoTratamentoTermico == 'temperado') {
                      this.elementTemperado = element / this.fatorE3 / 0.77;
                      element = element / this.fatorE3;
                      this.pressaoP(this.elementTemperado);
                      this.calcPressoes(this.elementTemperado);
                      this.resultado(this.elementTemperado, element);
                  } else {
                      element = element / this.fatorE3;
                      this.pressaoP(element);
                      this.calcPressoes(element);
                      this.resultado(element, element);
                  }
                  break;
              case 'insulado':
              if (this.tipoTratamentoTermico === 'temperado') {
                      this.elementNovoTemperado = (element) / 1.44 / 0.77;
                      this.elementNovo = (element) / 1.44;
                      this.calcPressoes(this.elementNovo);
                      this.resultado(this.elementNovoTemperado, this.elementNovo);
                  } else {
                      this.elementNovo = (element) / 1.44;
                      this.calcPressoes(this.elementNovo);
                      this.resultado(this.elementNovo, this.elementNovo);
                  }

                  break;
              default:
              break;
              }
          }

          calcPressoes(element: any) {
            this.calcAngulo = 0;
            if (this.angulo < 75) {
              this.calcAngulo = Math.cos(this.angulo * Math.PI / 180);
              console.log(`Esse é o Angulo do Calculo convertido ${this.calcAngulo}`);
            }
            console.log(`Angulo do input ==> ${(this.angulo)}`);
            console.log(`Esse é o fatorE3 => ${this.fatorE3}
                            Tipo Vidro => ${this.tipoVidro}//`);
            console.log(`Esse é o Cosseno do angulo => ${Math.cos(this.angulo)}`);
            console.log(`Valor do elemento => ${(element)}`);

            if (this.apoio == '3apoiosMenorLivre') {
                this.fatorE3 = 1 * this.fatorE3;
                console.log(`Esse é o fatorE3 ${this.fatorE3}`);
            } else {
                this.fatorE3 = Number(2) * Number(this.fatorE3);
                console.log(`Esse é o 2 x fatorE3 ${this.fatorE3}`);
            }

            this.pressaoExterno1 = this.PV * 1.5;
            this.pressaoExterno2 = Number('1.2') * (Number(this.PV) + (Number(this.omega) * Number(this.PP) * Number(this.calcAngulo)));
            this.pressaoInterno1 = this.PP * 4.7;
            this.pressaoInterno2 = 600 + this.PP;
        }

 resultado(element: any, element2: any) {
   console.log(element2);
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
      console.log(`Esse é a espessura equivalente ===>> ${element}***`);
      console.log(`Esse é o Aspect Ratio =>> ${this.aspectRatioCalcEspessura}`);
      console.log(`Esse é o Deflexão =>>${this.deflexao}`);
      console.log(`Esse é o alpha =>> ${this.alpha}`);
      console.log(`Tipo de Aplicação => ${this.tipoAplicacao}`);
      console.log(`Angulo usado no Calculo => ${this.angulo}`);
      console.log(`Pressão usada no Calculo => ${this.pressaoCalculo}`);
      console.log(`Menor valor: ${this.menorValor}`);
      console.log(`Area: ${this.area}`);

      console.log(`
      ********************
      ***** Pressões *****
      ********************
      PV=> ${this.PV}
      PP=> ${this.PP}
      omega=> ${this.omega}
      calcAngulo=> ${this.calcAngulo}
      -----
      Pressão externo 1 = PV *1.5 => ${this.pressaoExterno1}
      Pressão externo 2 = 1.2 * (PV + omega * PP * calcAngulo) => ${this.pressaoExterno2}
      Pressão interno 1 = PP * 4.7 => ${this.pressaoInterno1}
      Pressão interno 2 = 600 + PP => ${this.pressaoInterno2}
      `);

      this.resultado4lados = Math.sqrt((Number(this.area) * Number(this.pressaoCalculo)) / 100);
      console.log(`Resultado 4 lados => ${this.resultado4lados}`);
      this.resultado4lados2 = Number((Math.min(this.altura, this.largura) * Math.sqrt(this.pressaoCalculo)) / Number(6.3));
      console.log(`Resultado 4 lados 2 => ${this.resultado4lados2}`);

      this.resultado2ladosAlturaLivre = Number((Number(this.altura) * Math.sqrt(this.pressaoCalculo)) / Number(6.3));
      console.log(`Resultado 2 lados Livres - Altura => ${this.resultado2ladosAlturaLivre}`);

      this.resultado2ladosLarguraLivre = Number((Number(this.largura) * Math.sqrt(this.pressaoCalculo)) / Number(6.3));
      console.log(`Resultado 2 lados Livres - Laterais => ${this.resultado2ladosLarguraLivre}`);

      this.resultado3ladosBordaMenor = Number((Math.min(this.altura, this.largura) * Math.sqrt(this.pressaoCalculo)) / Number(6.3));
      console.log(`Resultado 3 lados Borda menor Livre => ${this.resultado3ladosBordaMenor}`);

      this.resultado3ladosBordaMaior = Math.sqrt(this.largura * Number(3) * this.altura * this.pressaoCalculo / 100);
      console.log(`Resultado 3 lados Borda MAIOR Livre => ${this.resultado3ladosBordaMaior}`);

      this.resultado3ladosBordaMaior2 = Number(3) * Math.min(this.altura, this.largura) * Math.sqrt(this.pressaoCalculo) / Number(6.3);
      console.log(`Resultado 3 lados Borda MAIOR Livre 2 => ${this.resultado3ladosBordaMaior2}`);

      const numero = Math.max(this.altura, this.largura) / Math.min(this.altura, this.largura);
      switch (this.apoio) {
          case '2apoiosTopoLivre':
                  this.espessuraMinima = this.resultado2ladosAlturaLivre  * Number(this.tipoPavimentoValue);
                  console.log(`Espessura Minima =====>>>> ${this.espessuraMinima}`);
              break;
          case '2apoiosLadoLivre':
                  this.espessuraMinima = this.resultado2ladosLarguraLivre  * Number(this.tipoPavimentoValue);
                  console.log(`Espessura Minima =====>>>> ${this.espessuraMinima}`);
              break;
          case '3apoiosMenorLivre':
              this.espessuraMinima = this.resultado3ladosBordaMenor  * Number(this.tipoPavimentoValue);
              console.log(`Espessura Minima =====>>>> ${this.espessuraMinima}`);
              break;
          case '3apoiosMaiorLivre':
              if (numero <= Number(7.5)) {
                  console.log('Resultante Menor que 7.5 -- função 3 lados');
                  console.log(`Numero da divisão => ${numero}`);
                  console.log(`Resultado Final => ${this.resultado3ladosBordaMaior}`);
                  this.espessuraMinima = Number(this.resultado3ladosBordaMaior) * Number(this.tipoPavimentoValue);
                  console.log(`Espessura Minima =====>>>> ${this.espessuraMinima}`);
              } else {
                  console.log('Resultante Maior que 7.5 -- função 3 lados');
                  console.log(`Numero da divisão => ${numero}`);
                  console.log(`Resultado Final => ${this.resultado3ladosBordaMaior2}`);
                  this.espessuraMinima = Number(this.resultado3ladosBordaMaior2) * Number(this.tipoPavimentoValue);
                  console.log(`Espessura Minima =====>>>> ${this.espessuraMinima}`);
              }
              break;
          case '4apoios': //4lados apoiados
              if (this.aspectRatioCalcEspessura <= Number(2.50)) {
                  //função 4 lados
                  console.log('Função 4 lados -- Ratio menor que 2.5');
                  console.log(`Aspect Ratio Calc Espessura => ${this.aspectRatioCalcEspessura}`);
                  console.log(`Espessura Final => ${this.resultado4lados}`);
                  this.espessuraMinima = Number(this.resultado4lados) * Number(this.tipoPavimentoValue);
                  console.log(`Espessura Minima =====>>>> ${this.espessuraMinima}`);
              } else {
                  console.log('Ratio maior que 2.5');
                  console.log(`Aspect Ratio Calc Espessura => ${this.aspectRatioCalcEspessura}`);
                  console.log(`Espessura Final => ${this.resultado4lados2}`);
                  this.espessuraMinima = Number(this.resultado4lados2) * Number(this.tipoPavimentoValue);
                  console.log(`Espessura Minima =====>>>> ${this.espessuraMinima}`);
              }
              break;
          default: //4lados apoiados
              if (this.aspectRatioCalcEspessura <= Number(2.50)) {
                  console.log('Função 4 lados -- Ratio menor que 2.5');
                  console.log(`Aspect Ratio Calc Espessura => ${this.aspectRatioCalcEspessura}`);
                  console.log(`Espessura Final => ${this.resultado4lados}`);
                  this.espessuraMinima = Number(this.resultado4lados) * Number(this.tipoPavimentoValue);
                  console.log(`Espessura Minima =====>>>> ${this.espessuraMinima}`);
              } else {
                  console.log('Ratio maior que 2.5');
                  console.log(`Aspect Ratio Calc Espessura => ${this.aspectRatioCalcEspessura}`);
                  console.log(`Espessura Final => ${this.resultado4lados2}`);
                  this.espessuraMinima = Number(this.resultado4lados2) * Number(this.tipoPavimentoValue);
                  console.log(`Espessura Minima =====>>>> ${this.espessuraMinima}`);
              }
              break;
      }
      console.log(`Elemento Flecha flesh: ${this.flech}`);
      this.flecha(this.flech);
          this.primeiraDiv = document.querySelector(`div#id${this.baseID}`);
          console.log(`Primeira div teste => ${this.primeiraDiv}`);
          if (this.primeiraDiv == null ) {
              console.log(`Espessura =====>>>> ${element}`);
              console.log(`Fator E3 =====>>>> ${this.fatorE3}`);
              this.espessuraEquivalente = Number(element * this.fatorE3); //realizar esse calculo
              console.log(`Espessura Minima =====>>>> ${this.espessuraEquivalente}`);
              //$('#resposta').innerHTML += `<div id='id${this.baseID}' style="border-radius:10px; border: 10px; padding:5px 0px 0px 10px;  background-color:#dfebe9; font-family: Arial, sans-serif;">${head}<p id="espessura${this.baseID}"></p><p id="espessura-minima${this.baseID}"></p><div id="resistencia${this.baseID}" style=" border-radius:0px 0px 10px 10px;margin-left:-10px; padding:10px; color: #fff"></div></div><br/>`;
              //$(`#espessura${this.baseID}`).innerHTML = `${this.baseDiv}<br/>Espessura equivalente: ${element.toFixed(2)}mm || Flecha Atuante: ${this.flechaAtuante.toFixed(2)}`;

              //$(`#espessura-minima${this.baseID}`).innerHTML = `Espessura Minima: ${this.espessuraMinima.toFixed(2)} || Flecha Admiss: ${this.flechaMinina.toFixed(2)}`;
              if (element < this.espessuraMinima) {
                  //$(`#resistencia${this.baseID}`).style.backgroundColor = '#e63535';
                  //$(`#resistencia${this.baseID}`).innerHTML = `KO`;
              } else {
                  //$(`#resistencia${this.baseID}`).style.backgroundColor = '#5fba7d';
                  //$(`#resistencia${this.baseID}`).innerHTML = `OK`;
              }
          } else {
              console.log(`Espessura =====>>>> ${element}`);
              console.log(`Fator E3 =====>>>> ${this.fatorE3}`);
              this.espessuraEquivalente = Number(element * this.fatorE3); //realizar esse calculo
              console.log(`Espessura Minima =====>>>> ${this.espessuraEquivalente}`);
              //$(`#espessura${this.baseID}`).innerHTML = `${this.baseDiv}<br/>Espessura equivalente: ${element.toFixed(2)}mm || Flecha Atuante: ${this.flechaAtuante.toFixed(2)}`;

              //$(`#espessura-minima${this.baseID}`).innerHTML = `Espessura Minima: ${this.espessuraMinima.toFixed(2)} || Flecha Admiss: ${this.flechaMinina.toFixed(2)}`;
              if (element < this.espessuraMinima) {
                  //$(`#resistencia${this.baseID}`).style.backgroundColor = '#e63535';
                  //$(`#resistencia${this.baseID}`).innerHTML = `KO`;
              } else {
                  //$(`#resistencia${this.baseID}`).style.backgroundColor = '#5fba7d';
                  //$(`#resistencia${this.baseID}`).innerHTML = `OK`;
              }
          }


  }

  array3lados = [
    {'name':'0.30', 'value': '0.68571'},
    {'name':'0.31', 'value': '0.69714'},
    {'name':'0.32', 'value': '0.72000'},
    {'name':'0.33', 'value': '0.73143'},
    {'name':'0.34', 'value': '0.76572'},
    {'name':'0.35', 'value': '0.80000'},
    {'name':'0.36', 'value': '0.82286'},
    {'name':'0.37', 'value': '0.84572'},
    {'name':'0.38', 'value': '0.86857'},
    {'name':'0.39', 'value': '0.89143'},
    {'name':'0.40', 'value': '0.91429'},
    {'name':'0.41', 'value': '0.93715'},
    {'name':'0.42', 'value': '0.96000'},
    {'name':'0.43', 'value': '0.98286'},
    {'name':'0.44', 'value': '1.00572'},
    {'name':'0.45', 'value': '1.02858'},
    {'name':'0.46', 'value': '1.05143'},
    {'name':'0.47', 'value': '1.07429'},
    {'name':'0.48', 'value': '1.09715'},
    {'name':'0.49', 'value': '1.12000'},
    {'name':'0.50', 'value': '1.14286'},
    {'name':'0.51', 'value': '1.16471'},
    {'name':'0.52', 'value': '1.18656'},
    {'name':'0.53', 'value': '1.20841'},
    {'name':'0.54', 'value': '1.23026'},
    {'name':'0.55', 'value': '1.25210'},
    {'name':'0.56', 'value': '1.27395'},
    {'name':'0.57', 'value': '1.29580'},
    {'name':'0.58', 'value': '1.31765'},
    {'name':'0.59', 'value': '1.33950'},
    {'name':'0.60', 'value': '1.36135'},
    {'name':'0.61', 'value': '1.38320'},
    {'name':'0.62', 'value': '1.40505'},
    {'name':'0.63', 'value': '1.42689'},
    {'name':'0.64', 'value': '1.44874'},
    {'name':'0.65', 'value': '1.47059'},
    {'name':'0.66', 'value': '1.49244'},
    {'name':'0.67', 'value': '1.51429'},
    {'name':'0.68', 'value': '1.53048'},
    {'name':'0.69', 'value': '1.54667'},
    {'name':'0.70', 'value': '1.56286'},
    {'name':'0.71', 'value': '1.57757'},
    {'name':'0.72', 'value': '1.59229'},
    {'name':'0.73', 'value': '1.60700'},
    {'name':'0.74', 'value': '1.62172'},
    {'name':'0.75', 'value': '1.63643'},
    {'name':'0.76', 'value': '1.65114'},
    {'name':'0.77', 'value': '1.66586'},
    {'name':'0.78', 'value': '1.68057'},
    {'name':'0.79', 'value': '1.69529'},
    {'name':'0.80', 'value': '1.71000'},
    {'name':'0.81', 'value': '1.72471'},
    {'name':'0.82', 'value': '1.73943'},
    {'name':'0.83', 'value': '1.75414'},
    {'name':'0.84', 'value': '1.76886'},
    {'name':'0.85', 'value': '1.78357'},
    {'name':'0.86', 'value': '1.79828'},
    {'name':'0.87', 'value': '1.81300'},
    {'name':'0.88', 'value': '1.82771'},
    {'name':'0.89', 'value': '1.84243'},
    {'name':'0.90', 'value': '1.85714'},
    {'name':'0.91', 'value': '1.86571'},
    {'name':'0.92', 'value': '1.87428'},
    {'name':'0.93', 'value': '1.88286'},
    {'name':'0.94', 'value': '1.89143'},
    {'name':'0.95', 'value': '1.90000'},
    {'name':'0.96', 'value': '1.90857'},
    {'name':'0.97', 'value': '1.91714'},
    {'name':'0.98', 'value': '1.92571'},
    {'name':'0.99', 'value': '1.93429'},
    {'name':'1.00', 'value': '1.94286'},
    {'name':'1.01', 'value': '1.95143'},
    {'name':'1.02', 'value': '1.96000'},
    {'name':'1.03', 'value': '1.96857'},
    {'name':'1.04', 'value': '1.97714'},
    {'name':'1.05', 'value': '1.98572'},
    {'name':'1.06', 'value': '1.99429'},
    {'name':'1.07', 'value': '2.00286'},
    {'name':'1.08', 'value': '2.01143'},
    {'name':'1.09', 'value': '2.02000'},
    {'name':'1.10', 'value': '2.02857'},
    {'name':'1.11', 'value': '2.03715'},
    {'name':'1.12', 'value': '2.04572'},
    {'name':'1.13', 'value': '2.05429'},
    {'name':'1.14', 'value': '2.06286'},
    {'name':'1.15', 'value': '2.07143'},
    {'name':'1.16', 'value': '2.08000'},
    {'name':'1.17', 'value': '2.08858'},
    {'name':'1.18', 'value': '2.09715'},
    {'name':'1.19', 'value': '2.10572'},
    {'name':'1.20', 'value': '2.11429'},
    {'name':'1.21', 'value': '2.12000'},
    {'name':'1.22', 'value': '2.12572'},
    {'name':'1.23', 'value': '2.13143'},
    {'name':'1.24', 'value': '2.13715'},
    {'name':'1.25', 'value': '2.14286'},
    {'name':'1.26', 'value': '2.14857'},
    {'name':'1.27', 'value': '2.15429'},
    {'name':'1.28', 'value': '2.16000'},
    {'name':'1.29', 'value': '2.16572'},
    {'name':'1.30', 'value': '2.17143'},
    {'name':'1.31', 'value': '2.17714'},
    {'name':'1.32', 'value': '2.18286'},
    {'name':'1.33', 'value': '2.18857'},
    {'name':'1.34', 'value': '2.19429'},
    {'name':'1.35', 'value': '2.20000'},
    {'name':'1.36', 'value': '2.20571'},
    {'name':'1.37', 'value': '2.21143'},
    {'name':'1.38', 'value': '2.21714'},
    {'name':'1.39', 'value': '2.22286'},
    {'name':'1.40', 'value': '2.22857'},
    {'name':'1.41', 'value': '2.23428'},
    {'name':'1.42', 'value': '2.24000'},
    {'name':'1.43', 'value': '2.24571'},
    {'name':'1.44', 'value': '2.25143'},
    {'name':'1.45', 'value': '2.25714'},
    {'name':'1.46', 'value': '2.26285'},
    {'name':'1.47', 'value': '2.26857'},
    {'name':'1.48', 'value': '2.27428'},
    {'name':'1.49', 'value': '2.28000'},
    {'name':'1.50', 'value': '2.28571'},
    {'name':'1.51', 'value': '2.28714'},
    {'name':'1.52', 'value': '2.28857'},
    {'name':'1.53', 'value': '2.29000'},
    {'name':'1.54', 'value': '2.29143'},
    {'name':'1.55', 'value': '2.29286'},
    {'name':'1.56', 'value': '2.29428'},
    {'name':'1.57', 'value': '2.29571'},
    {'name':'1.58', 'value': '2.29714'},
    {'name':'1.59', 'value': '2.29857'},
    {'name':'1.60', 'value': '2.30000'},
    {'name':'1.61', 'value': '2.30143'},
    {'name':'1.62', 'value': '2.30286'},
    {'name':'1.63', 'value': '2.30429'},
    {'name':'1.64', 'value': '2.30572'},
    {'name':'1.65', 'value': '2.30715'},
    {'name':'1.66', 'value': '2.30857'},
    {'name':'1.67', 'value': '2.31000'},
    {'name':'1.68', 'value': '2.31143'},
    {'name':'1.69', 'value': '2.31286'},
    {'name':'1.70', 'value': '2.31429'},
    {'name':'1.71', 'value': '2.31572'},
    {'name':'1.72', 'value': '2.31715'},
    {'name':'1.73', 'value': '2.31858'},
    {'name':'1.74', 'value': '2.32000'},
    {'name':'1.75', 'value': '2.32143'},
    {'name':'1.76', 'value': '2.32286'},
    {'name':'1.77', 'value': '2.32429'},
    {'name':'1.78', 'value': '2.32572'},
    {'name':'1.79', 'value': '2.32715'},
    {'name':'1.80', 'value': '2.32857'},
    {'name':'1.81', 'value': '2.33000'},
    {'name':'1.82', 'value': '2.33143'},
    {'name':'1.83', 'value': '2.33286'},
    {'name':'1.84', 'value': '2.33429'},
    {'name':'1.85', 'value': '2.33572'},
    {'name':'1.86', 'value': '2.33714'},
    {'name':'1.87', 'value': '2.33857'},
    {'name':'1.88', 'value': '2.34000'},
    {'name':'1.89', 'value': '2.34143'},
    {'name':'1.90', 'value': '2.34286'},
    {'name':'1.91', 'value': '2.34429'},
    {'name':'1.92', 'value': '2.34571'},
    {'name':'1.93', 'value': '2.34714'},
    {'name':'1.94', 'value': '2.34857'},
    {'name':'1.95', 'value': '2.35000'},
    {'name':'1.96', 'value': '2.35143'},
    {'name':'1.97', 'value': '2.35286'},
    {'name':'1.98', 'value': '2.35428'},
    {'name':'1.99', 'value': '2.35571'},
    {'name':'2.00', 'value': '2.35714'},
    {'name':'2.01', 'value': '2.35728'},
    {'name':'2.02', 'value': '2.35743'},
    {'name':'2.03', 'value': '2.35757'},
    {'name':'2.04', 'value': '2.35771'},
    {'name':'2.05', 'value': '2.35785'},
    {'name':'2.06', 'value': '2.35800'},
    {'name':'2.07', 'value': '2.35814'},
    {'name':'2.08', 'value': '2.35828'},
    {'name':'2.09', 'value': '2.35843'},
    {'name':'2.10', 'value': '2.35857'},
    {'name':'2.11', 'value': '2.35871'},
    {'name':'2.12', 'value': '2.35885'},
    {'name':'2.13', 'value': '2.35900'},
    {'name':'2.14', 'value': '2.35914'},
    {'name':'2.15', 'value': '2.35928'},
    {'name':'2.16', 'value': '2.35942'},
    {'name':'2.17', 'value': '2.35957'},
    {'name':'2.18', 'value': '2.35971'},
    {'name':'2.19', 'value': '2.35985'},
    {'name':'2.20', 'value': '2.36000'},
    {'name':'2.21', 'value': '2.36014'},
    {'name':'2.22', 'value': '2.36028'},
    {'name':'2.23', 'value': '2.36042'},
    {'name':'2.24', 'value': '2.36057'},
    {'name':'2.25', 'value': '2.36071'},
    {'name':'2.26', 'value': '2.36085'},
    {'name':'2.27', 'value': '2.36100'},
    {'name':'2.28', 'value': '2.36114'},
    {'name':'2.29', 'value': '2.36128'},
    {'name':'2.30', 'value': '2.36142'},
    {'name':'2.31', 'value': '2.36157'},
    {'name':'2.32', 'value': '2.36171'},
    {'name':'2.33', 'value': '2.36185'},
    {'name':'2.34', 'value': '2.36200'},
    {'name':'2.35', 'value': '2.36214'},
    {'name':'2.36', 'value': '2.36228'},
    {'name':'2.37', 'value': '2.36242'},
    {'name':'2.38', 'value': '2.36257'},
    {'name':'2.39', 'value': '2.36271'},
    {'name':'2.40', 'value': '2.36285'},
    {'name':'2.41', 'value': '2.36299'},
    {'name':'2.42', 'value': '2.36314'},
    {'name':'2.43', 'value': '2.36328'},
    {'name':'2.44', 'value': '2.36342'},
    {'name':'2.45', 'value': '2.36357'},
    {'name':'2.46', 'value': '2.36371'},
    {'name':'2.47', 'value': '2.36385'},
    {'name':'2.48', 'value': '2.36399'},
    {'name':'2.49', 'value': '2.36414'},
    {'name':'2.50', 'value': '2.36428'},
    {'name':'2.51', 'value': '2.36442'},
    {'name':'2.52', 'value': '2.36457'},
    {'name':'2.53', 'value': '2.36471'},
    {'name':'2.54', 'value': '2.36485'},
    {'name':'2.55', 'value': '2.36499'},
    {'name':'2.56', 'value': '2.36514'},
    {'name':'2.57', 'value': '2.36528'},
    {'name':'2.58', 'value': '2.36542'},
    {'name':'2.59', 'value': '2.36557'},
    {'name':'2.60', 'value': '2.36571'},
    {'name':'2.61', 'value': '2.36585'},
    {'name':'2.62', 'value': '2.36599'},
    {'name':'2.63', 'value': '2.36614'},
    {'name':'2.64', 'value': '2.36628'},
    {'name':'2.65', 'value': '2.36642'},
    {'name':'2.66', 'value': '2.36656'},
    {'name':'2.67', 'value': '2.36671'},
    {'name':'2.68', 'value': '2.36685'},
    {'name':'2.69', 'value': '2.36699'},
    {'name':'2.70', 'value': '2.36714'},
    {'name':'2.71', 'value': '2.36728'},
    {'name':'2.72', 'value': '2.36742'},
    {'name':'2.73', 'value': '2.36756'},
    {'name':'2.74', 'value': '2.36771'},
    {'name':'2.75', 'value': '2.36785'},
    {'name':'2.76', 'value': '2.36799'},
    {'name':'2.77', 'value': '2.36814'},
    {'name':'2.78', 'value': '2.36828'},
    {'name':'2.79', 'value': '2.36842'},
    {'name':'2.80', 'value': '2.36856'},
    {'name':'2.81', 'value': '2.36871'},
    {'name':'2.82', 'value': '2.36885'},
    {'name':'2.83', 'value': '2.36899'},
    {'name':'2.84', 'value': '2.36914'},
    {'name':'2.85', 'value': '2.36928'},
    {'name':'2.86', 'value': '2.36942'},
    {'name':'2.87', 'value': '2.36956'},
    {'name':'2.88', 'value': '2.36971'},
    {'name':'2.89', 'value': '2.36985'},
    {'name':'2.90', 'value': '2.36999'},
    {'name':'2.91', 'value': '2.37013'},
    {'name':'2.92', 'value': '2.37028'},
    {'name':'2.93', 'value': '2.37042'},
    {'name':'2.94', 'value': '2.37056'},
    {'name':'2.95', 'value': '2.37071'},
    {'name':'2.96', 'value': '2.37085'},
    {'name':'2.97', 'value': '2.37099'},
    {'name':'2.98', 'value': '2.37113'},
    {'name':'2.99', 'value': '2.37128'},
    {'name':'3.00', 'value': '2.37142'},
    {'name':'3.01', 'value': '2.37156'},
    {'name':'3.02', 'value': '2.37171'},
    {'name':'3.03', 'value': '2.37185'},
    {'name':'3.04', 'value': '2.37199'},
    {'name':'3.05', 'value': '2.37213'},
    {'name':'3.06', 'value': '2.37228'},
    {'name':'3.07', 'value': '2.37242'},
    {'name':'3.08', 'value': '2.37256'},
    {'name':'3.09', 'value': '2.37271'},
    {'name':'3.10', 'value': '2.37285'},
    {'name':'3.11', 'value': '2.37299'},
    {'name':'3.12', 'value': '2.37313'},
    {'name':'3.13', 'value': '2.37328'},
    {'name':'3.14', 'value': '2.37342'},
    {'name':'3.15', 'value': '2.37356'},
    {'name':'3.16', 'value': '2.37370'},
    {'name':'3.17', 'value': '2.37385'},
    {'name':'3.18', 'value': '2.37399'},
    {'name':'3.19', 'value': '2.37413'},
    {'name':'3.20', 'value': '2.37428'},
    {'name':'3.21', 'value': '2.37442'},
    {'name':'3.22', 'value': '2.37456'},
    {'name':'3.23', 'value': '2.37470'},
    {'name':'3.24', 'value': '2.37485'},
    {'name':'3.25', 'value': '2.37499'},
    {'name':'3.26', 'value': '2.37513'},
    {'name':'3.27', 'value': '2.37528'},
    {'name':'3.28', 'value': '2.37542'},
    {'name':'3.29', 'value': '2.37556'},
    {'name':'3.30', 'value': '2.37570'},
    {'name':'3.31', 'value': '2.37585'},
    {'name':'3.32', 'value': '2.37599'},
    {'name':'3.33', 'value': '2.37613'},
    {'name':'3.34', 'value': '2.37628'},
    {'name':'3.35', 'value': '2.37642'},
    {'name':'3.36', 'value': '2.37656'},
    {'name':'3.37', 'value': '2.37670'},
    {'name':'3.38', 'value': '2.37685'},
    {'name':'3.39', 'value': '2.37699'},
    {'name':'3.40', 'value': '2.37713'},
    {'name':'3.41', 'value': '2.37727'},
    {'name':'3.42', 'value': '2.37742'},
    {'name':'3.43', 'value': '2.37756'},
    {'name':'3.44', 'value': '2.37770'},
    {'name':'3.45', 'value': '2.37785'},
    {'name':'3.46', 'value': '2.37799'},
    {'name':'3.47', 'value': '2.37813'},
    {'name':'3.48', 'value': '2.37827'},
    {'name':'3.49', 'value': '2.37842'},
    {'name':'3.50', 'value': '2.37856'},
    {'name':'3.51', 'value': '2.37870'},
    {'name':'3.52', 'value': '2.37885'},
    {'name':'3.53', 'value': '2.37899'},
    {'name':'3.54', 'value': '2.37913'},
    {'name':'3.55', 'value': '2.37927'},
    {'name':'3.56', 'value': '2.37942'},
    {'name':'3.57', 'value': '2.37956'},
    {'name':'3.58', 'value': '2.37970'},
    {'name':'3.59', 'value': '2.37985'},
    {'name':'3.60', 'value': '2.37999'},
    {'name':'3.61', 'value': '2.38013'},
    {'name':'3.62', 'value': '2.38027'},
    {'name':'3.63', 'value': '2.38042'},
    {'name':'3.64', 'value': '2.38056'},
    {'name':'3.65', 'value': '2.38070'},
    {'name':'3.66', 'value': '2.38084'},
    {'name':'3.67', 'value': '2.38099'},
    {'name':'3.68', 'value': '2.38113'},
    {'name':'3.69', 'value': '2.38127'},
    {'name':'3.70', 'value': '2.38142'},
    {'name':'3.71', 'value': '2.38156'},
    {'name':'3.72', 'value': '2.38170'},
    {'name':'3.73', 'value': '2.38184'},
    {'name':'3.74', 'value': '2.38199'},
    {'name':'3.75', 'value': '2.38213'},
    {'name':'3.76', 'value': '2.38227'},
    {'name':'3.77', 'value': '2.38242'},
    {'name':'3.78', 'value': '2.38256'},
    {'name':'3.79', 'value': '2.38270'},
    {'name':'3.80', 'value': '2.38284'},
    {'name':'3.81', 'value': '2.38299'},
    {'name':'3.82', 'value': '2.38313'},
    {'name':'3.83', 'value': '2.38327'},
    {'name':'3.84', 'value': '2.38342'},
    {'name':'3.85', 'value': '2.38356'},
    {'name':'3.86', 'value': '2.38370'},
    {'name':'3.87', 'value': '2.38384'},
    {'name':'3.88', 'value': '2.38399'},
    {'name':'3.89', 'value': '2.38413'},
    {'name':'3.90', 'value': '2.38427'},
    {'name':'3.91', 'value': '2.38442'},
    {'name':'3.92', 'value': '2.38456'},
    {'name':'3.93', 'value': '2.38470'},
    {'name':'3.94', 'value': '2.38485'},
    {'name':'3.95', 'value': '2.38499'},
    {'name':'3.96', 'value': '2.38513'},
    {'name':'3.97', 'value': '2.38528'},
    {'name':'3.98', 'value': '2.38542'},
    {'name':'3.99', 'value': '2.38557'},
    {'name':'4.00', 'value': '2.38571'},
    {'name':'4.01', 'value': '2.38571'},
    {'name':'4.02', 'value': '2.38571'},
    {'name':'4.03', 'value': '2.38571'},
    {'name':'4.04', 'value': '2.38571'},
    {'name':'4.05', 'value': '2.38571'},
    {'name':'4.06', 'value': '2.38571'},
    {'name':'4.07', 'value': '2.38571'},
    {'name':'4.08', 'value': '2.38571'},
    {'name':'4.09', 'value': '2.38571'},
    {'name':'4.10', 'value': '2.38571'},
    {'name':'4.11', 'value': '2.38571'},
    {'name':'4.12', 'value': '2.38571'},
    {'name':'4.13', 'value': '2.38571'},
    {'name':'4.14', 'value': '2.38571'},
    {'name':'4.15', 'value': '2.38571'},
    {'name':'4.16', 'value': '2.38571'},
    {'name':'4.17', 'value': '2.38571'},
    {'name':'4.18', 'value': '2.38571'},
    {'name':'4.19', 'value': '2.38571'},
    {'name':'4.20', 'value': '2.38571'},
    {'name':'4.21', 'value': '2.38571'},
    {'name':'4.22', 'value': '2.38571'},
    {'name':'4.23', 'value': '2.38571'},
    {'name':'4.24', 'value': '2.38571'},
    {'name':'4.25', 'value': '2.38571'},
    {'name':'4.26', 'value': '2.38571'},
    {'name':'4.27', 'value': '2.38571'},
    {'name':'4.28', 'value': '2.38571'},
    {'name':'4.29', 'value': '2.38571'},
    {'name':'4.30', 'value': '2.38571'},
    {'name':'4.31', 'value': '2.38571'},
    {'name':'4.32', 'value': '2.38571'},
    {'name':'4.33', 'value': '2.38571'},
    {'name':'4.34', 'value': '2.38571'},
    {'name':'4.35', 'value': '2.38571'},
    {'name':'4.36', 'value': '2.38571'},
    {'name':'4.37', 'value': '2.38571'},
    {'name':'4.38', 'value': '2.38571'},
    {'name':'4.39', 'value': '2.38571'},
    {'name':'4.40', 'value': '2.38571'},
    {'name':'4.41', 'value': '2.38571'},
    {'name':'4.42', 'value': '2.38571'},
    {'name':'4.43', 'value': '2.38571'},
    {'name':'4.44', 'value': '2.38571'},
    {'name':'4.45', 'value': '2.38571'},
    {'name':'4.46', 'value': '2.38571'},
    {'name':'4.47', 'value': '2.38571'},
    {'name':'4.48', 'value': '2.38571'},
    {'name':'4.49', 'value': '2.38571'},
    {'name':'4.50', 'value': '2.38571'},
    {'name':'4.51', 'value': '2.38571'},
    {'name':'4.52', 'value': '2.38571'},
    {'name':'4.53', 'value': '2.38571'},
    {'name':'4.54', 'value': '2.38571'},
    {'name':'4.55', 'value': '2.38571'},
    {'name':'4.56', 'value': '2.38571'},
    {'name':'4.57', 'value': '2.38571'},
    {'name':'4.58', 'value': '2.38571'},
    {'name':'4.59', 'value': '2.38571'},
    {'name':'4.60', 'value': '2.38571'},
    {'name':'4.61', 'value': '2.38571'},
    {'name':'4.62', 'value': '2.38571'},
    {'name':'4.63', 'value': '2.38571'},
    {'name':'4.64', 'value': '2.38571'},
    {'name':'4.65', 'value': '2.38571'},
    {'name':'4.66', 'value': '2.38571'},
    {'name':'4.67', 'value': '2.38571'},
    {'name':'4.68', 'value': '2.38571'},
    {'name':'4.69', 'value': '2.38571'},
    {'name':'4.70', 'value': '2.38571'},
    {'name':'4.71', 'value': '2.38571'},
    {'name':'4.72', 'value': '2.38571'},
    {'name':'4.73', 'value': '2.38571'},
    {'name':'4.74', 'value': '2.38571'},
    {'name':'4.75', 'value': '2.38571'},
    {'name':'4.76', 'value': '2.38571'},
    {'name':'4.77', 'value': '2.38571'},
    {'name':'4.78', 'value': '2.38571'},
    {'name':'4.79', 'value': '2.38571'},
    {'name':'4.80', 'value': '2.38571'},
    {'name':'4.81', 'value': '2.38571'},
    {'name':'4.82', 'value': '2.38571'},
    {'name':'4.83', 'value': '2.38571'},
    {'name':'4.84', 'value': '2.38571'},
    {'name':'4.85', 'value': '2.38571'},
    {'name':'4.86', 'value': '2.38571'},
    {'name':'4.87', 'value': '2.38571'},
    {'name':'4.88', 'value': '2.38571'},
    {'name':'4.89', 'value': '2.38571'},
    {'name':'4.90', 'value': '2.38571'},
    {'name':'4.91', 'value': '2.38571'},
    {'name':'4.92', 'value': '2.38571'},
    {'name':'4.93', 'value': '2.38571'},
    {'name':'4.94', 'value': '2.38571'},
    {'name':'4.95', 'value': '2.38571'},
    {'name':'4.96', 'value': '2.38571'},
    {'name':'4.97', 'value': '2.38571'},
    {'name':'4.98', 'value': '2.38571'},
    {'name':'4.99', 'value': '2.38571'},
    {'name':'5.00', 'value': '2.38571'}
];

array4lados = [
    {'name':'1.00', 'value': '0.65710'},
    {'name':'0.99', 'value': '0.67139'},
    {'name':'0.98', 'value': '0.68568'},
    {'name':'0.97', 'value': '0.69997'},
    {'name':'0.96', 'value': '0.71426'},
    {'name':'0.95', 'value': '0.72855'},
    {'name':'0.94', 'value': '0.74284'},
    {'name':'0.93', 'value': '0.75713'},
    {'name':'0.92', 'value': '0.77142'},
    {'name':'0.91', 'value': '0.78571'},
    {'name':'0.90', 'value': '0.80000'},
    {'name':'0.89', 'value': '0.81714'},
    {'name':'0.88', 'value': '0.83428'},
    {'name':'0.87', 'value': '0.85142'},
    {'name':'0.86', 'value': '0.86856'},
    {'name':'0.85', 'value': '0.88570'},
    {'name':'0.84', 'value': '0.90284'},
    {'name':'0.83', 'value': '0.91998'},
    {'name':'0.82', 'value': '0.93712'},
    {'name':'0.81', 'value': '0.95426'},
    {'name':'0.80', 'value': '0.97140'},
    {'name':'0.79', 'value': '0.99283'},
    {'name':'0.78', 'value': '1.01426'},
    {'name':'0.77', 'value': '1.03569'},
    {'name':'0.76', 'value': '1.05712'},
    {'name':'0.75', 'value': '1.07855'},
    {'name':'0.74', 'value': '1.09998'},
    {'name':'0.73', 'value': '1.12141'},
    {'name':'0.72', 'value': '1.14284'},
    {'name':'0.71', 'value': '1.16427'},
    {'name':'0.70', 'value': '1.18570'},
    {'name':'0.69', 'value': '1.20856'},
    {'name':'0.68', 'value': '1.23142'},
    {'name':'0.67', 'value': '1.25428'},
    {'name':'0.66', 'value': '1.27714'},
    {'name':'0.65', 'value': '1.30000'},
    {'name':'0.64', 'value': '1.32286'},
    {'name':'0.63', 'value': '1.34572'},
    {'name':'0.62', 'value': '1.36858'},
    {'name':'0.61', 'value': '1.39144'},
    {'name':'0.60', 'value': '1.41430'},
    {'name':'0.59', 'value': '1.43716'},
    {'name':'0.58', 'value': '1.46002'},
    {'name':'0.57', 'value': '1.48288'},
    {'name':'0.56', 'value': '1.50574'},
    {'name':'0.55', 'value': '1.52860'},
    {'name':'0.54', 'value': '1.55146'},
    {'name':'0.53', 'value': '1.57432'},
    {'name':'0.52', 'value': '1.59718'},
    {'name':'0.51', 'value': '1.62004'},
    {'name':'0.50', 'value': '1.64290'},
    {'name':'0.49', 'value': '1.66575'},
    {'name':'0.48', 'value': '1.68860'},
    {'name':'0.47', 'value': '1.71145'},
    {'name':'0.46', 'value': '1.73430'},
    {'name':'0.45', 'value': '1.75715'},
    {'name':'0.44', 'value': '1.78000'},
    {'name':'0.43', 'value': '1.80285'},
    {'name':'0.42', 'value': '1.82570'},
    {'name':'0.41', 'value': '1.84855'},
    {'name':'0.40', 'value': '1.87140'},
    {'name':'0.39', 'value': '1.89426'},
    {'name':'0.38', 'value': '1.91712'},
    {'name':'0.37', 'value': '1.93998'},
    {'name':'0.36', 'value': '1.96284'},
    {'name':'0.35', 'value': '1.98570'},
    {'name':'0.34', 'value': '2.00856'},
    {'name':'0.33', 'value': '2.03142'},
    {'name':'0.32', 'value': '2.05428'},
    {'name':'0.31', 'value': '2.07714'},
    {'name':'0.30', 'value': '2.10000'},
    {'name':'0.29', 'value': '2.10000'},
    {'name':'0.28', 'value': '2.10000'},
    {'name':'0.27', 'value': '2.10000'},
    {'name':'0.26', 'value': '2.10000'},
    {'name':'0.25', 'value': '2.10000'},
    {'name':'0.24', 'value': '2.10000'},
    {'name':'0.23', 'value': '2.10000'},
    {'name':'0.22', 'value': '2.10000'},
    {'name':'0.21', 'value': '2.10000'},
    {'name':'0.20', 'value': '2.10000'},
    {'name':'0.19', 'value': '2.10143'},
    {'name':'0.18', 'value': '2.10286'},
    {'name':'0.17', 'value': '2.10429'},
    {'name':'0.16', 'value': '2.10572'},
    {'name':'0.15', 'value': '2.10715'},
    {'name':'0.14', 'value': '2.10858'},
    {'name':'0.13', 'value': '2.11001'},
    {'name':'0.12', 'value': '2.11144'},
    {'name':'0.11', 'value': '2.11287'},
    {'name':'0.10', 'value': '2.11430'}
];


}

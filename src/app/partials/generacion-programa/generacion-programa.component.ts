import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

// Toastr
import { ToastrService } from 'ngx-toastr';
import { Automata } from 'src/app/models/automata';
import { Rules } from 'src/app/models/rules';
import { AutomatasService } from 'src/app/service/automatas.service';

@Component({
  selector: 'app-generacion-programa',
  templateUrl: './generacion-programa.component.html',
  styleUrls: ['./generacion-programa.component.scss']
})

export class GeneracionProgramaComponent implements OnInit {
  formgroup!:FormGroup;
  rules?: Automata;
  data = [] as any;
  cadena = [] as any;


  constructor( private toastr:ToastrService, private service: AutomatasService, private formBuild: FormBuilder){

  }

  ngOnInit(): void {
    this.formgroup = this.formBuild.group({
      varInicial: ['', Validators.required],
      regla: ['', Validators.required],
      numPalabra: ['', Validators.required]
    })
  }
  variableInicial: String = '';


  agregar() {
    let regla = this.formgroup.get('regla')!.value;
    let varInit = this.formgroup.get('varInicial')!.value;

    let auxRegla: Rules = new Rules;
    auxRegla.variable = varInit;
    auxRegla.string = regla;
    console.log(auxRegla)

    this.data.push({variable: varInit, string: regla});

    console.log('Hola', this.data);


    this.toastr.success(`Su regla, ha sido añadida exitosamente.`, 'Regla añadida');
  }

  variableInitial(event: Event) {
    const element = event.target as HTMLInputElement;
    this.variableInicial = element.value;
  }

  enviar() {
    const automata = {
      numPalabras: this.formgroup.get('numPalabra')!.value,
      initVar: this.formgroup.get('varInicial')!.value,
      rules: this.data
    }

    console.log(automata)

    this.service.createAutomata(automata).subscribe(res => {
      this.cadena = res;
      console.log(this.cadena)
      console.log(res)
    })

    this.toastr.success('Se envió la información a nuestra API para obtener los datos con respecto al autómata a crear.', 'Información enviada')
  }

  limpiar() {
    this.variableInicial = '';

    this.toastr.info('Se limpio todo lo almacenado en la ejecucción del programa.', 'Campos limpiados');
  }

  aniadirRegla() {

  }
}

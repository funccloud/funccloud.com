import { Component, Input, input } from '@angular/core';

@Component({
    selector: 'app-case',
    imports: [],
    templateUrl: './case.component.html',
    styleUrl: './case.component.scss'
})
export class CaseComponent {
  image = input('');
  title = input('');
  objective = input('');
  desafio = input('');
  solucao = input('');
  resultados = input('');
}

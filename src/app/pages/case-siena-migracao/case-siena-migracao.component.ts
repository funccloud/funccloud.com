import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { CaseComponent } from '../../components/case/case.component';

@Component({
  selector: 'app-case-siena-migracao',
  standalone: true,
  imports: [BaseComponent, CaseComponent],
  templateUrl: './case-siena-migracao.component.html',
  styleUrl: './case-siena-migracao.component.scss'
})
export class CaseSienaMigracaoComponent {
  readonly image = 'assets/images/fc/cases/siena.png';
  readonly title = 'Como a Siena otimizou os processos com a nuvem do Google';
  readonly objective = 'Com o objetivo de otimizar o desempenho de suas equipes e ter maior controle sobre uso dos documentos, dispositivos e acesso a informação de clientes, a empresa buscou a FuncCloud para auxiliá-la na migração para nuvem.';
  readonly desafio = 'Antes da implementação das ferramentas colaborativas do Google Workspace e migração de sistemas para o Google Cloud Platform, o Grupo Siena enfrentava problemas no controle de acesso a documentos e dispositivos corporativos, dificuldade em possibilitar trabalho remoto quando necessário, queda constante dos sistemas e uso de papel para realização de alguns processos.';
  readonly solucao = 'O processo de migração para nuvem do Google foi dividido em três partes. Na primeira parte migramos os emails e os documentos para o Google Workspace. Na segunda parte fizemos upload do inventário de dispositivos e configuramos políticas de permissionamento tanto na nuvem , quanto dos dispositivos Android e Windows. Na terceira parte fizemos a migração dos sistemas para o Google Compute Engine.';
  readonly resultados = `Processos otimizados com as soluções Gmail, Planilhas, Documentos, Drive e Gerenciamento de dispositivos:
Maior controle sobre uso dos dispositivos corporativos;
Local centralizado para todos os documentos da empresa;
Maior disponibilidade nos sistemas;
Como visto, a parceria do Grupo Siena com a FuncCloud proporcionou resultados muito positivos. A movimentação para nuvem do Google aumentou a produtividade, acelerou processos e, o mais importante, criou um ambiente colaborativo e propiciou sistemas mais disponíveis. Dessa forma, é possível, oferecer um serviço ainda melhor aos clientes e expandir os negócios.`;
}

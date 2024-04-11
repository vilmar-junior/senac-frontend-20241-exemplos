import { Component, OnInit } from '@angular/core';
import { Vacina } from '../../shared/model/vacina';
import { VacinaService } from '../../shared/service/vacina.service';

@Component({
  selector: 'app-vacina-listagem',
  //standalone: true,
  //imports: [],
  templateUrl: './vacina-listagem.component.html',
  styleUrl: './vacina-listagem.component.scss'
})
export class VacinaListagemComponent implements OnInit  {

  public vacinas: Array<Vacina> = new Array();

  constructor(private vacinaService: VacinaService){}

  ngOnInit(): void {
    this.consultarTodas();
  }

  private consultarTodas(){
    this.vacinaService.consultarTodas().subscribe(
      resultado => {
         this.vacinas = resultado; 
      },
      erro => {
        console.log('Erro ao buscar todas as vacinas' + erro)
      }
    );
  }
}

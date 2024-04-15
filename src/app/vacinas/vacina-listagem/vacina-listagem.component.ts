import { Component, OnInit } from '@angular/core';
import { Vacina } from '../../shared/model/vacina';
import { VacinaService } from '../../shared/service/vacina.service';
import { VacinaSeletor } from '../../shared/model/seletor/vacina.seletor';

@Component({
  selector: 'app-vacina-listagem',
  //standalone: true,
  //imports: [],
  templateUrl: './vacina-listagem.component.html',
  styleUrl: './vacina-listagem.component.scss'
})
export class VacinaListagemComponent implements OnInit  {

  public vacinas: Array<Vacina> = new Array();
  public seletor: VacinaSeletor = new VacinaSeletor();

  constructor(private vacinaService: VacinaService){}

  ngOnInit(): void {
    this.consultarTodas();
    this.seletor.nomePais = "teste";
  }

  public pesquisar(){
    this.vacinaService.consultarComSeletor(this.seletor).subscribe(
      resultado => {
        this.vacinas = resultado; 
      },
      erro => {
        console.log('Erro ao buscar todas as vacinas' + erro)
      }
    )
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

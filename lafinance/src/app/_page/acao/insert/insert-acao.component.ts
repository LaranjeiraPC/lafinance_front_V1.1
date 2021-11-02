import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insert-acao',
  templateUrl: './insert-acao.component.html',
  styleUrls: ['./insert-acao.component.scss']
})
export class InsertAcaoComponent implements OnInit {

  value2: string = ""; 
  date3: Date = new Date;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-next-card',
  templateUrl: './next-card.component.html',
  styleUrls: ['./next-card.component.css']
})
export class NextCardComponent implements OnInit {

  photoCover:string ="https://digital.unesc.net/hubfs/internet-das-coisas-a-tecnologia-que-esta-cada-vez-mais-presente-em-tudo.png"

  cardTitle:string="Internet das Coisas"

  cardDescrition:string="A tecnologia que está cada vez mais presente em tudo. O nome já é autoexplicativo – Internet das Coisas faz alusão à objetos físicos com capacidade computacional de coletar e transmitir dados, através da rede e conectados entre si e à internet, podendo ser operados remotamente."

  Id:string="0"


  constructor() { }

  ngOnInit(): void {
  }

}

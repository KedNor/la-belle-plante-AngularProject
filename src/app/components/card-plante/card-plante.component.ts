import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-plante',
  templateUrl: './card-plante.component.html',
  styleUrls: ['./card-plante.component.scss'],
})
export class CardPlanteComponent implements OnInit {
  @Input() listImage: any;
  constructor() {}

  ngOnInit(): void {}
}

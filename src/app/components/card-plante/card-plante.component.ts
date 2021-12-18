import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-plante',
  templateUrl: './card-plante.component.html',
  styleUrls: ['./card-plante.component.scss'],
})
export class CardPlanteComponent implements OnInit {
  @Input() listImage: any;
  @Output() clickLike = new EventEmitter();
  stars = [1, 2, 3, 4, 5];
  rating = 0;
  hoverState = 0;

  constructor() {}

  ngOnInit(): void {}

  onClickLike() {
    console.log('click');
    this.clickLike.emit();
  }

  enter(i: number) {
    this.hoverState = i;
  }

  leave() {
    this.hoverState = 0;
  }

  updateRating(i: number) {
    this.rating = i;
  }
}

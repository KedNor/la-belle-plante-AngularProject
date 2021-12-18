import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star-avis',
  templateUrl: './star-avis.component.html',
  styleUrls: ['./star-avis.component.scss'],
})
export class StarAvisComponent implements OnInit {
  starState: string[];
  @Output() stars: string[] = ['1', '2', '3', '4', '5'];
  @Output() selectedValue: string;

  constructor() {
    this.selectedValue = 'star';
    this.starState = this.starState = ['star', 'star', 'star', 'star', 'star'];
  }

  ngOnInit() {}

  onMouseOver(index: number) {
    console.log('star over', index);
    for (let i = 0; i < this.starState.length; i++) {
      if (i <= index) {
        this.starState[i] = 'star-fill';
      } else {
        this.starState[i] = 'star';
      }
    }
  }
  onMouseLeave() {
    // this.starState = ['star', 'star', 'star', 'star', 'star'];
    this.starState = this.starState.map((x) => (x = 'star'));
  }
}

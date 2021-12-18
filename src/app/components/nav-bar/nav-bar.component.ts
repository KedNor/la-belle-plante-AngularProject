import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  likeCounter: number;
  constructor(private dataService: DataService) {
    this.likeCounter = 0;
  }

  ngOnInit(): void {
    this.dataService.plantLiked$.subscribe(() => {
      console.log('Get new event from subject');
      this.likeCounter++;
    });
  }
}

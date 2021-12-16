import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss'],
})
export class PageAccueilComponent implements OnInit {
  listData: any;
  public result: string[] = [];
  constructor(private dataStore: DataService) {
    this.listData;
  }

  ngOnInit() {
    // let categorie = _.pluck(this.listData, 'product_breadcrumb_label');
    // this.result = [...new Set(categorie)];

    // Set renvoi un tableau sans les doublons
    // console.log(this.result);

    //uderscore
    // const listAllCataegorie = this.listData.map(
    //   (product) => product.product_breadcrumb_label
    // );
    // console.log(listAllCataegorie);
    // const listUniqCategories = _.uniq(listAllCataegorie);
    // console.log(listUniqCategories);

    //pure js

    // const listUniqJsCategories = [...new Set(listAllCataegorie)];
    // console.log(listUniqJsCategories);
    this.dataStore.getData().subscribe((data: any) => {
      this.listData = data;
      let categorie = _.pluck(this.listData, 'product_breadcrumb_label');
      this.result = [...new Set(categorie)];
      console.log(this.result);
    });
  }
}

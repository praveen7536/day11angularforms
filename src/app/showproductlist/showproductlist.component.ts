import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-showproductlist',
  templateUrl: './showproductlist.component.html',
  styleUrls: ['./showproductlist.component.css']
})
export class ShowproductlistComponent implements OnInit {
  products = [];

  constructor() { }

  ngOnInit(): void {
  }

}

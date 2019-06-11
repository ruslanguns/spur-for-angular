import { Component, OnInit } from '@angular/core';

declare function init_jquery();
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_jquery();
  }

}

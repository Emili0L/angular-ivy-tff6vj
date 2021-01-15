import { Component, OnInit } from '@angular/core';
import { recipelist } from  "../recipelist";

@Component({
  selector: 'app-rezepte',
  templateUrl: './rezepte.component.html',
  styleUrls: ['./rezepte.component.css']
})
export class RezepteComponent implements OnInit {
  recipelist = recipelist;
  constructor() { }

  ngOnInit() {
  }

}
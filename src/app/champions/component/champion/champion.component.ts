import {Component, Input, OnInit} from '@angular/core';
import {Champion} from "../../../core/models/champion.model";

@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.scss']
})
export class ChampionComponent implements OnInit {

  @Input() champion!: Champion;

  constructor() { }

  ngOnInit(): void {
  }

}

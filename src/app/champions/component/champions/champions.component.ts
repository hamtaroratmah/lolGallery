import {Component, OnInit} from '@angular/core';
import {Champion} from "../../../core/models/champion.model";
import {HttpClient} from "@angular/common/http";
import {ChampionService} from "../../../core/services/champions.services";

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss']
})
export class ChampionsComponent implements OnInit {

  jsonChampions!: any;
  champions: Champion[] = [];

  constructor(private http: HttpClient,
              private championService: ChampionService) {
  }

  ngOnInit(): void {
    this.championService.getAllChampions().subscribe(result => this.getChampions(result));
  }

  getChampions(result: JSON){
    this.jsonChampions = result;
    for(const temp in this.jsonChampions["data"]){
      this.champions.push(this.getChampionsFromJson(this.jsonChampions["data"][temp]));
    }
  }

  getChampionsFromJson(json: any): Champion{
    let images = [json["image"]["full"],json["image"]["sprite"]];
    let tags = json["tags"];
    return new Champion(json["key"],json["name"], json["title"],json["lore"], json["blurb"], tags, images);
  }

}

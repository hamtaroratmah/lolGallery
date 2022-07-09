import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
import {Champion} from "../models/champion.model";

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  constructor(private http: HttpClient) {
  }

  getAllChampions(): Observable<any>{
    return this.http
      .get<Champion[]>('https://ddragon.leagueoflegends.com/cdn/12.12.1/data/en_US/champion.json');
      // .pipe(tap(result=> console.log(result)));

  }

}

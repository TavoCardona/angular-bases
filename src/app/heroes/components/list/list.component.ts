import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public listHeroes: string[] = ['Spiderman', 'Thor', 'Hulk', 'Ironman'];
  public deleteHero?: string;


  removeLastHero(): void {
    this.deleteHero = this.listHeroes.pop();
  }




}

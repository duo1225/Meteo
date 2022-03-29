import { Component } from '@angular/core';
import { Meteo } from '../entities/meteo.entity';
import { MeteoService } from '../service/meteo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  meteos:any[];
  isLoading = false;
  constructor(
    private meteoService:MeteoService
  ) { 
  }

  ngOnInit(): void {
  
    this.meteoService.findAll().subscribe(
      res =>{
        this.meteos = res;
        console.log(this.meteos);
      },
      err =>{
        console.log(err);
      }
    );

  }

}

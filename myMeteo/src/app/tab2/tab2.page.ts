import { Component } from '@angular/core';
import { Meteo } from '../entities/meteo.entity';
import { MeteoService } from '../service/meteo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  ville:any;
  weather:any;

  constructor(
    private meteoService:MeteoService
  ) {}
  
  ngOnInit(): void {
  
   

  }
  myQuery(){
    //console.log(this.ville);
    this.meteoService.query(this.ville).subscribe(
      res =>{
        // res 是objet, 先转为字符串，再去掉不需要的字符，再转为object
        let resStr = JSON.stringify(res);
        resStr = resStr.replace(new RegExp('\\"',"gm"),'"');

        //把字符串转换为Object
        let resObj = JSON.parse(resStr);;
        //true resObj是对象
        console.log("resObj是对象",resObj instanceof Object);
  
        //console.log("this.weather['weather']类型",typeof resObj['weather']);//string
        // 把字符串转换为object
        let resObj2 = JSON.parse(resObj['weather'])
        console.log("resObj2类型",typeof resObj2);//Object
        console.log("resObj2内容",resObj2);
        this.weather = resObj2;

        //console.log("weather['weather']name : ", this.weather['weather'].name); 失败 name 不存在
        //console.log("weather['weather'] : ",this.weather['weather'] instanceof Object); false 不是对象
       // console.log("weather['weather']['name] : ", this.weather['weather']['name']); 不存在
      },
      err =>{
        console.log(err);
      }
    );
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-we-naregyme',
  imports: [],
  templateUrl: './main-we-naregyme.component.html',
  styleUrl: './main-we-naregyme.component.css'
})
export class MainWeNaregymeComponent {
  constructor(private router: Router){}

  onClickBtn(addr:string){
    let link: string = "https://time.centraluniversity.ru/tsentralnyy-universitet/messages/";
    link = link + addr
    this.router.navigateByUrl(link)
  }
}

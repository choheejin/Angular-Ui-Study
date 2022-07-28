import {Component, HostBinding, HostListener, OnInit} from '@angular/core';

@Component({
  selector: "web-header",
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @HostListener('window:scroll', ['$event']) handleScroll(event: Event){
    this._setBgColor();
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @HostBinding('style.background-color') bgColor  = '#F5F5EB';
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @HostBinding('style.filter') shadow = 'none';

  constructor() {}

  ngOnInit(): void {
    this._setBgColor();
  }

  private _setBgColor(){
    if(window.scrollY > 0){
      this.bgColor = 'white';
      this.shadow = 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))';
    } else {
      this.bgColor = '#F5F5EB';
      this.shadow = 'none';
    }
  }
}

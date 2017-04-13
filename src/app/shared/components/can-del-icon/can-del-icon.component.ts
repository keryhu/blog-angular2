import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-can-del-icon',
  templateUrl: './can-del-icon.component.html',
  styleUrls: ['./can-del-icon.component.css']
})
export class CanDelIconComponent implements OnInit {

  private el: ElementRef;
  constructor(el: ElementRef) { this.el=el;}

  @Input()
  public iconName:string;
  // 当用户关闭一个icon 的时候，将事件发送给前台，内容就是 icon 的名字
  @Output()
  private closeIconName=new EventEmitter<string>();

  ngOnInit() {
  }

  @HostListener('mouseenter') onMouseEnter() {
   this.el.nativeElement.style.cursor='pointer'
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.cursor='default'
  }

  closeIcon(){
    this.closeIconName.emit(this.iconName);
  }

}

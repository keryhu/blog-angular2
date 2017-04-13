import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tag-sort',
  templateUrl: './tag-sort.component.html',
  styleUrls: ['./tag-sort.component.css']
})
export class TagSortComponent implements OnInit {

  selectedTag='';

  constructor() { }


  // 从blog，source-code父component将所有的 tag标签传递过来。
  @Input()
  public tags:Array<string>;

  // 将用户选择的tag排序方法，告诉给 blog component 或者 sorce-code component
  @Output()
  private newTag = new EventEmitter<string>();

  ngOnInit() {
  }


  updateTag(){
    this.newTag.emit(this.selectedTag);
  }

  // 当前台父 blog或source-code component刷新浏览器，会读取url里面的tag参数，
  // 如果存在，则将该tag参数，设置到此component里面
  parentChangeTagByUrl(tag:string){
    this.selectedTag=tag;
  }
}

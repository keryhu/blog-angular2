import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tag-sort',
  templateUrl: './tag-sort.component.html',
  styleUrls: ['./tag-sort.component.css']
})
export class TagSortComponent implements OnInit {

  selectedTag='';

  /**
   * 前台需要实现这样一个功能，当刷新页面的时候，表情和页码不更改，当更改tag标签的时候，
   * 需要将页码调到第一页。
   * 因为页面刷新  ngOnInit 和 updateTag 方法都会运行，而更改tag标签，只有updateTag运行
   * 为了检测到底是刷新页面，还是更改tag，使用 clickNum 来观察
   * 当页面刷新的时候，，clickNum 只会为 1，，当更改tag的时候，clickNum肯定大于1。
   * @type {{selectedTag: string; clickNum: number}}
   */
  tagValue={
    'selectedTag':this.selectedTag,
    'clickNum':0
  };

  constructor() { }


  // 从blog，source-code父component将所有的 tag标签传递过来。
  @Input()
  public tags:Array<string>;

  // 将用户选择的tag排序方法，告诉给 blog component 或者 sorce-code component
  @Output()
  private newTag = new EventEmitter<Object>();

  ngOnInit() {
    // 只有在刷新浏览器的时候，此 init 才会运行，
    this.tagValue.clickNum=0;
  }



  updateTag(){
    ++this.tagValue.clickNum;
    this.tagValue.selectedTag=this.selectedTag;
    this.newTag.emit(this.tagValue);
  }

  // 当前台父 blog或source-code component刷新浏览器，会读取url里面的tag参数，
  // 如果存在，则将该tag参数，设置到此component里面
  parentChangeTagByUrl(tag:string){
    this.selectedTag=tag;
  }
}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-optional-sort',
  templateUrl: './optional-sort.component.html',
  styleUrls: ['./optional-sort.component.css']
})
export class OptionalSortComponent implements OnInit {


  // 定义所有的sort 对象，用户排序，当用户选择了哪个对象的时候，将对应的value
  // 传递给 blog component或source-code compinent

  // 这个设置的是，value值，不是 viewValue值
  public sortControl = new FormControl('updateTime,desc');
  // 前台显示的 items的text值，当你选择某一个item，对应的 sort值也更新了selectedSort里面
  public sorts = [
    {viewValue: '更新--近到远', value: 'updateTime,desc'},
    {viewValue: '更新--远到近', value: 'updateTime,asc'},
    {viewValue: '阅读--多到少', value: 'readingTimes,desc'},
    {viewValue: '阅读--少到多', value: 'readingTimes,asc'},
    {viewValue: '评论--多到少', value: 'commentTimes,desc'},
    {viewValue: '评论--少到多', value: 'commentTimes,asc'},
  ];

  // 将用户选择的排序方法，告诉给 blog component 或者 sorce-code component
  @Output()
  private updateSort = new EventEmitter<string>();

  constructor() {
  }

  // 当用户更改排序偏好的时候，将方法告诉前台blog或source-code component
  update(n) {
    console.log('OPTIONAL OSRT UPDATE ')
    this.updateSort.emit(n['value']);
  }

  ngOnInit() {
  }


  // 此方法，用户blog或source-code compoent，根据刷新后的url里面是否含有sort，
  // 操作此componet，来更新 选中的sort,传递进来的url里面的sort，
  parentComponentChangeSelectedSortByUrlParam(sort: string) {
    console.log('接受到的 父component传来的 sort 为 ： ' + sort);
    // 将sort值，传递给 formControl sort 对象，
    this.sortControl.setValue(sort);

  }


}

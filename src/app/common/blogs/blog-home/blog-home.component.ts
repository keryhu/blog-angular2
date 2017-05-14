import {Component, OnInit, ViewChild} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {URLSearchParams} from "@angular/http";
import {blogUrl} from "../../../core";

import {PaginationParam, Sort, OptionalSortComponent, TagSortComponent} from "../../../shared";
import {SimpleBlog} from "../simple-blog.model";
import {Subscription} from "rxjs";
import {SimpleBlogService} from "./simple-blog.service";


@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {
  //默认显示第一页,同时也是当前页面的变量
  private defaultPageNum = 1;
  // 总共有多少跳数据
  public totalNum;
  // 最多同时显示多少多少数据
  private mSize = 5;
  // 每夜显示的数目
  pageSize = 10;
  // url 分页面查询参数的设置。
  private urlQueryParam: PaginationParam = {};
  public simpleBlogs: SimpleBlog[];
  // 所有的标签
  public allTags = [];
  // 搜索框双向验证的value
  public key: string;
  private sub: Subscription;

  // 调用子compment，目的当url刷新后，更新url里面的sort值到子component，来刷新
  @ViewChild(OptionalSortComponent)
  private optionalSortComponent: OptionalSortComponent;

  // 调用子compment，目的当url刷新后，更新url里面的tag值到子component，来刷新
  @ViewChild(TagSortComponent)
  private tagSortComponent: TagSortComponent;

  constructor(private title: Title, private router: Router,
              private route: ActivatedRoute,
              private simpleBlogService: SimpleBlogService) {
  }

// use *ngFor trackBy 提升效率

  trackBySimpleBlogs(index: number, simpleBlog: SimpleBlog): number {
    return +simpleBlog.id;
  }

  ngOnInit() {
    this.simpleBlogs = this.route.snapshot.data['simpleBlog']['content'];
    this.allTags = this.route.snapshot.data['tags'];
    if (this.route.snapshot.data['simpleBlog']) {
      // 将后台获取到的数据总数，跟新到pagination插件中。
      this.totalNum = this.route.snapshot.data['simpleBlog']['totalElements'];
    }
    this.setTitle();
    // 当页面刷新的时候，获取到此参数，分别将页码，排序的对象设置到 对应的组件中
    this.getUrlParams();
  }

  setTitle() {
    this.title.setTitle('树己之路-博客');
  }

  // 将url 的 query param 转为object ，再通过@Input 传递给 child component
  getUrlParams() {
    if (this.route.snapshot.queryParams) {
      // 将 url param 的值，复制到   urlParamObject 上,然后传递给search-page component
      this.urlQueryParam = JSON.parse(JSON.stringify(this.route.snapshot.queryParams));

      // 根据url中的参数，在页码刷新的时候，配置相应的组件，例如页码，排序条件，搜索栏里的内容
      this.defaultPageNum = this.urlQueryParam.page ? (+this.urlQueryParam.page + 1) : 1;

      // url 里面含有sort 对象 的类型为 string 转为 sort 对象里面的值
      if (this.urlQueryParam.sort) {
        this.optionalSortComponent
          .parentComponentChangeSelectedSortByUrlParam(this.urlQueryParam.sort.toString());
      }

      // url 里面含有tag 对象 的类型为 string 转为 tag 对象里面的值
      if (this.urlQueryParam.tag) {
        this.tagSortComponent.parentChangeTagByUrl(this.urlQueryParam.tag);
      }

      // url 里面含有key 值 ，则更新到 input里面
      if (this.urlQueryParam.key) {
        this.key = this.urlQueryParam.key;
      }

    }
  }

  // 当用户点击搜索框回车促发的事件,只有用户输入完后，点击回车，才更新输入的value
  onKeyEnter(key: string) {

    console.log(key);
    // 当key为undefined或 trim为空的时候，如果url里面含有 key的值，则删掉，更新key为''，
    // 再更新数据
    if (!key || key.trim().length == 0) {
      delete this.urlQueryParam.key;
    }
    else {
      this.urlQueryParam.key = key.trim();
    }
    this.router.navigate([blogUrl],
      {queryParams: this.urlQueryParam});
    // 更新server 查询数据
    this.updateServerData();
  }

  // 当用户点击 页面切换的时候，促发的事件
  pageChange() {
    // 当点击 不同的页码的时候，刷新浏览器url的参数
    // 如果指向的是第一页，那么就删除掉url中page参数,否则将对应的数字-1，更新到url，page里
    this.defaultPageNum == 1 ? (delete this.urlQueryParam.page) :
      this.urlQueryParam.page = this.defaultPageNum - 1;

    this.router.navigate([blogUrl],
      {queryParams: this.urlQueryParam});
    // 更新server 查询数据
    this.updateServerData();
  }


  // 当用户更换排序偏好的时候，能够接受到更换后的新的value
  receiveUpdateSort(newSort: Sort) {

    // 如果是默认的 发布时间由近到远，则删除掉 url里面的 sort,
    // 因为js里面判断两个对象相对比较繁琐，其实我的目的只要比较两个string类型相等，
    // 所以这里转为string
    if (newSort.toString() == new Sort('publishTime', 'desc').toString()) {
      delete this.urlQueryParam.sort;
    }
    // 否则将新的sort排序，更新到url里面,目前只支持一个类型的排序，不支持多个值一起排序
    else {
      this.urlQueryParam.sort = newSort;
    }
    //  最后刷新浏览器记好了啊
    this.router.navigate([blogUrl],
      {queryParams: this.urlQueryParam});
    // 更新server 查询数据
    this.updateServerData();
  }

  //当用户更换tag标签偏好的时候，能够接受到更换后的新的value
  receiveNewTag(newTag: string) {
    // 如果newTag 为空，或者为"不限"，则删除掉 url里面的 tag,
    if (!newTag || newTag == '不限') {
      delete this.urlQueryParam.tag;
    }
    // 否则将新的tag，更新到url里面,
    else {
      this.urlQueryParam.tag = newTag;
    }
    //  最后刷新浏览器记好了啊
    this.router.navigate([blogUrl],
      {queryParams: this.urlQueryParam});
    // 更新server 查询数据
    this.updateServerData();

  }

  // 刷新后台数据，在用户刷新浏览器，更新tag标签，更换排序偏好的时候，都会促发此方法。
  updateServerData() {
    //设置 URLSearchParams 参数
    const p = new URLSearchParams();
    if (this.urlQueryParam.key) {
      p.set('key', this.urlQueryParam.key);
    }
    if (this.urlQueryParam.tag) {
      p.set('tag', this.urlQueryParam.tag)
    }
    if (this.urlQueryParam.page) {
      p.set('page', this.urlQueryParam.page.toString());
    }
    if (this.urlQueryParam.sort) {
      p.set('sort', this.urlQueryParam.sort.toString());
    }
    this.sub = this.simpleBlogService.getSimpleBlog(p)
      .subscribe(
        e=>{
          console.log(e);
          // 更新数据到前台
          this.simpleBlogs=e['content'];
          this.totalNum =e['totalElements'];
        },
        err=>{
          console.log(err)
        }
      )
  }

}


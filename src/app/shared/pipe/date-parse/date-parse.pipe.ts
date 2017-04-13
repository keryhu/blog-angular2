import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';
moment.locale('zh-cn');
/**
 *
 *  longDateFormat : {
            LT : 'Ah点mm分',
            LTS : 'Ah点m分s秒',
            L : 'YYYY-MM-DD',
            LL : 'YYYY年MMMD日',
            LLL : 'YYYY年MMMD日Ah点mm分',
            LLLL : 'YYYY年MMMD日ddddAh点mm分',
            l : 'YYYY-MM-DD',
            ll : 'YYYY年MMMD日',
            lll : 'YYYY年MMMD日Ah点mm分',
            llll : 'YYYY年MMMD日ddddAh点mm分'
        },
 */

// 默认的回复的格式，如果是回复 YYYY-MM-DD HH:mm:ss，
// 如果加上参数 fromNow，则回复的是： 如果一个月之内，回复的是 过去多久
//      ，如果超过一个月，则回复具体的 YYYY-MM-DD HH:mm:ss，

@Pipe({name: 'dateParse'})

export class DateParsePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const m = ['LT', 'LTS', 'L', 'LL', 'LLL', 'LLLL', 'l', 'll', 'lll', 'llll'];

    if (moment(value, moment.ISO_8601, true).isValid()) {
      if (args && m.some(e => e === args)) {
        return moment(value).format(args);
      }
      else if (args === 'birthday') {
        return moment(value).format('M月D日');
      }
      else if (args === 'fromNow') {
        // 现在时刻往前倒退一个月的时间点
        const old = moment().subtract(1, 'month');
        //如果一个月之内，回复的是 过去多久
           //   如果超过一个月，则回复具体的 YYYY-MM-DD HH:mm:ss，
        return moment(value).isAfter(old) ? moment(value).fromNow() :
          moment(value).format('YYYY-MM-DD HH:mm:ss');

      }
      else if (typeof args === 'undefined') {
        return moment(value).format('YYYY-MM-DD HH:mm:ss');
      }
    }
    else return value;
  }

}

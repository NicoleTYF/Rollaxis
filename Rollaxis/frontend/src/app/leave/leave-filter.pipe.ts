import { Pipe, PipeTransform } from '@angular/core';
import { Leave } from './leave';

@Pipe({
    name: 'leavefilter',
    pure: false
})
export class LeaveFilterPipe implements PipeTransform {
  transform(items: Leave[], filter: Leave): Leave[] {
    if (!items || !filter) {
      return items;
    }
    return items.filter((item: Leave) => this.applyFilter(item, filter));
  }
  
  applyFilter(leave: Leave, filter: Leave): boolean {
    for (let field in filter) {
      if (leave.Description.toLowerCase().indexOf(
          filter.Description.toLowerCase()) === -1  && 
          leave.Status != filter.Status && 
          leave.Type != filter.Type) { 
            return false;
        }
      }
    return true;
  }
}
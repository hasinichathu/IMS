import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class StudentFilter implements PipeTransform {

  transform(items: Array<any>, nameSearch: string, emailSearch: string, indexSearch: string) {
    if (items && items.length) {
      return items.filter(item => {
        if (nameSearch && item.NameWithInitials.toString().toLowerCase().indexOf(nameSearch.toLowerCase()) === -1) {
          return false;
        }
        if (emailSearch && item.Email.toLowerCase().indexOf(emailSearch.toLowerCase()) === -1) {
          return false;
        }
        if (indexSearch && item.IndexNumber.toLowerCase().indexOf(indexSearch.toLowerCase()) === -1) {
          return false;
        }
        return true;
      });
    } else {
      return items;
    }
  }

}
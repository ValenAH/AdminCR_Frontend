import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: any[], textToSearch: string, page: number, itemsPerPage : number){
    if(value.length === 0 || textToSearch === ''){
      return value.slice(page, page + itemsPerPage);
    }
    const filteredValue = [];
    for ( const product of value){
      if(product['name'].toUpperCase().includes(textToSearch)){
        filteredValue.push(product);
      }
    }
    return filteredValue.slice(page, page + itemsPerPage);
  }

}

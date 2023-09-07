import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: any[], textToSearch: string){
    if(value.length === 0 || textToSearch === ''){
      return value;
    }
    const filteredValue = [];
    for ( const product of value){
      if(product['name'].toUpperCase().includes(textToSearch)){
        filteredValue.push(product);
      }
    }
    return filteredValue;
  }

}

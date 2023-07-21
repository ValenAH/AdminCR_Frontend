import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customerFilter'
})
export class CustomerFilterPipe implements PipeTransform {

  transform(value: any[], textToSearch: string){
    if(value.length === 0 || textToSearch === ''){
      return value;
    }
    const filteredValue = [];
    for ( const customer of value){
      if(customer['name'].toUpperCase().includes(textToSearch)){
        filteredValue.push(customer);
      }
    }
    return filteredValue;
  }

}

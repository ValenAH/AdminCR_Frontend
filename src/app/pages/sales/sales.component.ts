import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Sale } from '../../common/models/sale.model';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.sass']
})
export class SalesComponent implements OnInit {


  sales: Sale[] = [
    {
      orderId: 'CR-1',
      customer: {
        customerId: '01',
        customerName: 'Mateo Ortiz Vargas',
        contactNumber: '30000000',
        address: 'Transversal 34 DD'
      },
      productList: [
        {
          productId:'01', productName: 'Emperador', description:'120x190', quantity: 1, price: 200
        },
        {
          productId:'02', productName: 'Magnate', description:'120x190', quantity: 1, price: 200
        }
      ],
      deliveryDate: '02/02/2023',
      paymentMethod: 'Efectivo',
      totalAmount: 400,
      orderStatus: 'Pendiente'
    },
    {
      orderId: 'CR-2',
      customer: {
        customerId: '02',
        customerName: 'Cristian Alzate',
        contactNumber: '20000000',
        address: 'Itagui'
      },
      productList: [
        {
          productId:'01', productName: 'Emperador', description:'120x190', quantity: 2, price: 200
        },
        {
          productId:'04', productName: 'Almohada', description:'sencilla', quantity: 3, price: 20
        }
      ],
      deliveryDate: '02/02/2023',
      paymentMethod: 'Datáfono',
      totalAmount: 420,
      orderStatus: 'Pendiente'
    }
  ]

  constructor(

  ) { }

  ngOnInit(): void {
  }



}

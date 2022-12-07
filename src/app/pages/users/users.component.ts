import { Component, OnInit } from '@angular/core';
import { User } from '../../common/models/user.model'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users: User[] = [
    {
      userId: 1,
      userName: 'Valentina Alzate',
      password: 'CReyes2022',
      rolId: 1,
    },
    {
      userId: 2,
      userName: 'Cristian Alzate',
      password: 'CReyes2022',
      rolId: 1,
    },
    {
      userId: 3,
      userName: 'Liliana Hincapie',
      password: 'CReyes2022',
      rolId: 1,
    },
  ]

}

import { AfterViewInit, Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { UsersListService } from 'src/app/services/users-list.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit, AfterViewInit {
  users!: User[];
  ngOnInit(): void {
    this.loadUsers();
  }
  ngAfterViewInit() {}
  constructor(private usersService: UsersListService) {}

  loadUsers(): void {
    this.usersService.getUsers().subscribe((user) => {
      this.users = user;
      console.log(this.users);
    });
  }
}

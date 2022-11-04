import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

  usuarios!: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.findAll().subscribe((data) => { 
      this.usuarios = data
      console.log(data)
      })

  }

  deleteUser(userID: number) {
    this.userService.delete(userID.toString()).subscribe(result => this.refreshList())
  }

  refreshList() {
    this.ngOnInit();
  }

}

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})

export class AdminUserComponent implements OnInit {

  usuarios!: User[]
  usuariosData!: UserData[]

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.findAll().subscribe((data) => { 
      this.usuarios = data
      const userArray: UserData[] = []
      this.usuarios.forEach(function(user){
        const userData = new UserData()
        userData.id = user.id
        userData.username = user.username
        userData.email = user.email
        console.log(user.roles[0].name)
        if (user.roles[0].name === "ROLE_ADMIN"){
          userData.roles = "Administrador"
        } else {
          userData.roles = "Usuario"
        }
        userArray.push(userData)
      })

    this.usuariosData = userArray
    
    })

  }

  deleteUser(userID: number) {
    this.userService.delete(userID.toString()).subscribe(result => this.refreshList())
  }

  changeRol(userID: number, rol: String) {
    this.userService.changeRole(userID.toString(),rol).subscribe(result => this.refreshList())
  }

  refreshList() {
    this.ngOnInit();
  }

}

export class UserData {
  id!: number;
  username!: string;
  email!: string;
  roles!: string;
}

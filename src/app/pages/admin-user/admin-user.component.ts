import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { LoginDataService } from 'src/app/services/login-data.service';
import { TokenStoreService } from 'src/app/services/token-store.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})

export class AdminUserComponent implements OnInit {

  isLoggedIn!: boolean;
  isAdmin!: boolean;
  subscription!: Subscription;
  rol!: string;

  usuarios!: User[]
  usuariosData!: UserData[]

  constructor(private userService: UserService, private loggedIn: LoginDataService, private tokenStorage: TokenStoreService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.loggedIn.changeLogged(true);
      this.rol = this.tokenStorage.getUser().roles;
      //this.loggedIn.username(this.tokenStorage.getUser().username);
      if (this.rol.includes('ROLE_ADMIN')){
        this.loggedIn.changeAdmin(true);
      }
    }
    //this.subscription = this.loggedIn.userName.subscribe(name => this.username = name)
    this.subscription = this.loggedIn.isAdmin.subscribe(admin => this.isAdmin = admin);
    this.subscription = this.loggedIn.isLoggedIn.subscribe(logged => this.isLoggedIn = logged)


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

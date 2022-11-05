package g25.escabio.controllers;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;

import g25.escabio.repository.UserRolesRepository;


@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("/api")
public class UserRolesController {
	
	@Autowired
	private UserRolesRepository repository;
	
	@PreAuthorize("hasRole('ADMIN')")
	//Modifica una entrada en la tabla de roles de los usuarios
	@PutMapping("/users")
	public void changeRole(@RequestParam(name = "userid") int userid, @RequestParam(name = "roleid") int roleid ) {
		repository.changeRole(userid, roleid);
	}

}

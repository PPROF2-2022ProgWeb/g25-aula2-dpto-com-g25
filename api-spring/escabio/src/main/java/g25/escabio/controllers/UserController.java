package g25.escabio.controllers;

import java.util.List;
//import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import g25.escabio.models.User;
import g25.escabio.repository.UserRepository;

import org.springframework.security.access.prepost.PreAuthorize;

@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("/api")

public class UserController {

	@Autowired
	private UserRepository repository;
	
	//Devuelve todas las entradas
		@GetMapping("/users")
		@PreAuthorize("hasRole('ADMIN')")
		public List<User> allUsers(){
			return repository.findAll();
		}
		
	@PreAuthorize("hasRole('ADMIN')")
	//Borra una entrada en la tabla
	@DeleteMapping("/users/{id}")
		public void deleteUser(@PathVariable Long id) {
			repository.deleteById(id);
	}
	
	//Cambia permisos de admin al usuario	
	
}

package g25.escabio.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import g25.escabio.models.Producto;
import g25.escabio.repository.ProductosRepository;

import org.springframework.security.access.prepost.PreAuthorize;


@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("/api")

public class ProductoController {
	
	@Autowired
	private ProductosRepository repository;
	
	//Devuelve todas las entradas
	@GetMapping("/productos")
	public List<Producto> allProducts(){
		return repository.findAll();
	}
	
	//Devuelve por nombre de producto
	@GetMapping("/productos/{nombre}")
	public List<Producto> findByTitle(@PathVariable("nombre") String nombre){
		return repository.findByNombreContaining(nombre);
	}
	
	//Devuelve por id de producto
		@GetMapping("/productos/id/{id}")
		public Optional<Producto> findById(@PathVariable Long id){
			return repository.findById(id);
		}
	
	@PreAuthorize("hasRole('ADMIN')")
	//Crea una nueva entrada libro en la tabla
	@PostMapping("/productos")
	public Producto createProducto(@RequestBody Producto producto) {
		return repository.save(producto);
	}
	
	@PreAuthorize("hasRole('ADMIN')")
	//Modifica una entrada en la tabla
	@PutMapping("/productos/{id}")
	public Producto updateProducto(@PathVariable Long id,@RequestBody Producto producto) {
		return repository.save(producto);
	}
	
	@PreAuthorize("hasRole('ADMIN')")
	//Borra una entrada en la tabla
	@DeleteMapping("/productos/{id}")
	public void deleteProducto(@PathVariable Long id) {
		repository.deleteById(id);
	}

}

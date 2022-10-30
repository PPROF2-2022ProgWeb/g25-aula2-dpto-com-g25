package g25.escabio.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import g25.escabio.models.Producto;

@Repository
public interface ProductosRepository extends JpaRepository<Producto, Long>{
	
	List<Producto> findByNombreContaining(String nombre);

}

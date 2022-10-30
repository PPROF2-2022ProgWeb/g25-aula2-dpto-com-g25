package g25.escabio.models;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "producto")
public class Producto {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_producto")
	private Long id;
	@Size(max = 255)
	@Column(name = "imagen")
	private String imagen;
	@Size(max = 100)
	@NotBlank
	@Column(name = "nombre")
	private String nombre;
	@Size(max = 200)
	@NotBlank
	@Column(name = "descripcion")
	private String descripcion;
	@Size(max = 350)
	@Column(name = "detalle")
	private String detalle;
	@Column(name = "precio")
	private float precio;
	@Column(name = "id_categoria")
	private int id_categoria;
	
	public Producto() {
	}
	
	public Producto(String imagen, String nombre, String descripcion, String detalle, float precio, int id_categoria) {
		this.imagen = imagen;
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.detalle = detalle;
		this.precio = precio;
		this.id_categoria = id_categoria;
	}

	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getDetalle() {
		return detalle;
	}

	public void setDetalle(String detalle) {
		this.detalle = detalle;
	}

	public float getPrecio() {
		return precio;
	}

	public void setPrecio(float precio) {
		this.precio = precio;
	}

	public int getId_categoria() {
		return id_categoria;
	}

	public void setId_categoria(int id_categoria) {
		this.id_categoria = id_categoria;
	}

	public Long getId() {
		return id;
	}

	@Override
	public String toString() {
		return "Producto [id=" + id + ", imagen=" + imagen + ", nombre=" + nombre + ", descripcion=" + descripcion
				+ ", detalle=" + detalle + ", precio=" + precio + ", id_categoria=" + id_categoria + "]";
	}
	
}

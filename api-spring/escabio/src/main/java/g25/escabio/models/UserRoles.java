package g25.escabio.models;

import javax.persistence.*;

@Entity
@Table(name = "user_roles")
public class UserRoles {
	@Id
	@Column(name = "user_id")
	private int user_id;
	@Column(name = "role_id")
	private int role_id;
	
	public UserRoles() {		
	}
	
	public UserRoles(int user_id, int role_id) {
		this.user_id = user_id;
		this.role_id = role_id;
	}

	public int getRole_id() {
		return role_id;
	}

	public void setRole_id(int role_id) {
		this.role_id = role_id;
	}

	public int getUser_id() {
		return user_id;
	}

	@Override
	public String toString() {
		return "UserRoles [user_id=" + user_id + ", role_id=" + role_id + "]";
	}
	
}

package g25.escabio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import g25.escabio.models.UserRoles;

@Repository
public interface UserRolesRepository extends JpaRepository<UserRoles, Long> {
	
	@Transactional
	@Modifying
	@Query("UPDATE UserRoles ur SET ur.role_id=?2 WHERE ur.user_id=?1")
	void changeRole(int user_id, int role_id);

}

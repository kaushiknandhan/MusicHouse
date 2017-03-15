package io.musichouse.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import io.musichouse.entity.User;


@Repository
public class UserRepositoryImpl implements UserRepository {

	@PersistenceContext
	private EntityManager em;

	@Override
	public User registerUser(User user) {
		em.persist(user);
		return user;
	}

	@Override
	public User findByEmail(String email) {
		TypedQuery<User> query = em.createQuery("select u from User u where u.email=:pemail",User.class);
		query.setParameter("pemail", email);
		List<User> existingUser = query.getResultList();
		if(existingUser.isEmpty()){
			return null;
		}else{
			return existingUser.get(0);
		}
		
	}

	@Override
	public List<User> findAllUser() {
		TypedQuery<User> query = em.createQuery("select u from User u",User.class);
		List<User> userList = query.getResultList();
		return userList;
	}

	@Override
	public User findUser(String userId) {
		return em.find(User.class, userId);
	}

	@Override
	public User updateUser(User user) {
		em.merge(user);
		return user;
	}

}

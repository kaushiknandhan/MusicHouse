package io.musichouse.repository;

import java.util.List;

import io.musichouse.entity.User;

public interface UserRepository {

	public User registerUser(User user);

	public User findByEmail(String email);

	public List<User> findAllUser();

	public User findUser(String userId);

	public User updateUser(User user);

}

package io.musichouse.service;

import java.util.List;

import io.musichouse.entity.User;
import io.musichouse.exception.NoUserFound;
import io.musichouse.exception.UserAlreadyExists;
import io.musichouse.exception.UserNotFoundException;

public interface UserService {

	public User registerUser(User user) throws UserAlreadyExists;

	public User loginUser(User user) throws UserNotFoundException;

	public List<User> findAllUsers();

	public User findUser(String userId) throws NoUserFound;

	public User updateUser(String userId, User user) throws NoUserFound;

}

package io.musichouse.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.musichouse.entity.User;
import io.musichouse.exception.NoUserFound;
import io.musichouse.exception.UserAlreadyExists;
import io.musichouse.exception.UserNotFoundException;
import io.musichouse.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public User registerUser(User user) throws UserAlreadyExists {
		User existingUser = userRepository.findByEmail(user.getEmail());
		if (existingUser == null) {
			User newUser = userRepository.registerUser(user);
			return newUser;
		} else {
			throw new UserAlreadyExists();
		}
	}

	@Override
	public User loginUser(User user) throws UserNotFoundException {
		User loggedInUser = userRepository.findByEmail(user.getEmail());
		if (loggedInUser != null && user.getPassword().equals(loggedInUser.getPassword())) {
			return loggedInUser;
		} else {
			throw new UserNotFoundException();
		}
	}

	@Override
	public List<User> findAllUsers() {
		List<User> existingUsers = userRepository.findAllUser();
		return existingUsers;
	}

	@Override
	public User findUser(String userId) throws NoUserFound {
		User existingUser = userRepository.findUser(userId);
		if(existingUser != null){
			return existingUser;	
		}else{
			throw new NoUserFound();
		}
		
	}

	@Override
	public User updateUser(String userId, User user) throws NoUserFound {
		User existingUser = userRepository.findUser(userId);
		if(existingUser != null){
			User updateUser = userRepository.updateUser(user);
			return updateUser;
		}else{
			throw new  NoUserFound();
		}
		
	}
}

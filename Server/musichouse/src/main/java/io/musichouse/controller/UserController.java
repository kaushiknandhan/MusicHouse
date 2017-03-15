package io.musichouse.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.musichouse.entity.User;
import io.musichouse.exception.NoUserFound;
import io.musichouse.exception.UserAlreadyExists;
import io.musichouse.exception.UserNotFoundException;
import io.musichouse.service.UserService;

@RestController
@RequestMapping(path = "/users")
public class UserController {

	@Autowired
	private UserService userService;

	@RequestMapping(path = "/register", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public User registerUser(@RequestBody User user) throws UserAlreadyExists {
		User newUser = userService.registerUser(user);
		return newUser;
	}

	@RequestMapping(path = "/login", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public User loginUser(@RequestBody User user) throws UserNotFoundException {
		User loggedInUser = userService.loginUser(user);
		return loggedInUser;
	}
	@RequestMapping(method=RequestMethod.GET,produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
	public List<User> findAllUsers(){
		List<User> userList = userService.findAllUsers();
		return userList;
	}
	@RequestMapping(path="{id}",method=RequestMethod.GET,produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
	public User findAllUsers(@PathVariable(value="id") String userId) throws NoUserFound{
		User existingUser = userService.findUser(userId);
		return existingUser;
	}
	
	@RequestMapping(path="{id}",method=RequestMethod.PUT,produces=MediaType.APPLICATION_JSON_UTF8_VALUE,consumes=MediaType.APPLICATION_JSON_UTF8_VALUE)
	public User updateUser(@PathVariable(value="id") String userId,@RequestBody User user) throws NoUserFound {
		User updatedUser = userService.updateUser(userId,user);
		return updatedUser;
	}
}

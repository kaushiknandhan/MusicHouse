package io.musichouse.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.BAD_REQUEST,reason="User Already exists with this Eamil")
public class UserAlreadyExists extends Exception {

	private static final long serialVersionUID = 1L;

}

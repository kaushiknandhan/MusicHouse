package io.musichouse.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code=HttpStatus.BAD_REQUEST, reason="No Bill is found with the given id")
public class NoBillWithIdFound extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

}

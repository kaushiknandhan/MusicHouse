package io.musichouse.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code=HttpStatus.NOT_FOUND,reason="No user found with the given Id")
public class NoUserFound extends Exception {

	private static final long serialVersionUID = 1L;

}

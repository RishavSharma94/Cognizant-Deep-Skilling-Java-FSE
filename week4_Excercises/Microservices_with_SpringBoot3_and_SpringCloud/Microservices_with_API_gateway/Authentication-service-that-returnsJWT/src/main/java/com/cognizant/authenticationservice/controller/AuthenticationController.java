package com.cognizant.authenticationservice.controller;

import com.cognizant.authenticationservice.model.AuthenticationResponse;
import com.cognizant.authenticationservice.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    @GetMapping("/authenticate")
    public AuthenticationResponse authenticate(Principal principal) {

        String token = authenticationService.generateToken(principal.getName());

        return new AuthenticationResponse(token);
    }

}
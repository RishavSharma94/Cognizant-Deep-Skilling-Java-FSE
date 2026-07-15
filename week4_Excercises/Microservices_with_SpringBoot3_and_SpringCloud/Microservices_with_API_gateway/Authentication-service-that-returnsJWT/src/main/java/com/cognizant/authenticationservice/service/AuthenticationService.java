package com.cognizant.authenticationservice.service;

import com.cognizant.authenticationservice.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    @Autowired
    private JwtUtil jwtUtil;

    public String generateToken(String username) {

        return jwtUtil.generateToken(username);

    }

}
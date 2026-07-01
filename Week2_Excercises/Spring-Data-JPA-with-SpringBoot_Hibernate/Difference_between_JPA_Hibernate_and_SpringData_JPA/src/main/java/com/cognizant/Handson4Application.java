package com.cognizant.handson4;

import com.cognizant.handson4.model.Employee;
import com.cognizant.handson4.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Handson4Application {

    @Autowired
    private EmployeeService employeeService;

    public static void main(String[] args) {
        SpringApplication.run(Handson4Application.class, args);
    }
}
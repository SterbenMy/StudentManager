package com.ims.studentsmanager.exception;

public class StudentNotFoundException extends RuntimeException{
    public StudentNotFoundException(String s)  {
        super(s);
    }
}

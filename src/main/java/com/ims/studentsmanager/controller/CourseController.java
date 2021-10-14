package com.ims.studentsmanager.controller;

import com.ims.studentsmanager.model.Course;
import com.ims.studentsmanager.service.CourseService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/courses")
public class CourseController {
    private final CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping
    public ResponseEntity<List<Course>> getAllCourses(){
        List<Course> courseList = courseService.findAllCourses();
        return new ResponseEntity<>(courseList, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable("id") Long id){
        Course course = courseService.findCourseById(id);
        return new ResponseEntity<>(course, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Course> addCourse(@RequestBody Course course){
        Course addCourse = courseService.addCourse(course);
        return new ResponseEntity<>(addCourse, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Course> updateCourse(@RequestBody Course course){
        Course updateCourse = courseService.updateCourse(course);
        return new ResponseEntity<>(updateCourse, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCourse(@PathVariable("id") Long id){
        courseService.deleteCourse(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
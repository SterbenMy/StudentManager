package com.ims.studentsmanager.service;

import com.ims.studentsmanager.exception.CourseNotFoundException;
import com.ims.studentsmanager.model.Course;
import com.ims.studentsmanager.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class CourseService {
    private final CourseRepository courseRepository;

    @Autowired
    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public List<Course> findAllCourses() {
        return courseRepository.findAll();
    }

    public Course updateCourse(Course course) {
        return courseRepository.save(course);
    }

    public Course findCourseById(Long id){
        return courseRepository.findCourseById(id).orElseThrow(()-> new CourseNotFoundException("Course by id " +id+ " was not found"));
    }

    public void deleteCourse(Long id){
        courseRepository.deleteById(id);
    }

    public Course addCourse(Course course){
        return courseRepository.save(course);
    }
}

package com.ims.studentsmanager.service;

import com.ims.studentsmanager.exception.TeacherNotFoundException;
import com.ims.studentsmanager.model.Teacher;
import com.ims.studentsmanager.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TeacherService {
    private final TeacherRepository teacherRepository;

    @Autowired
    public TeacherService(TeacherRepository teacherRepository) {
        this.teacherRepository = teacherRepository;
    }

    public List<Teacher> findAllTeachers() {
        return teacherRepository.findAll();
    }

    public Teacher updateTeacher(Teacher teacher) {
        return teacherRepository.save(teacher);
    }

    public Teacher findTeacherById(Long id){
        return teacherRepository.findTeacherById(id).orElseThrow(()-> new TeacherNotFoundException("Teacher by id " +id+ " was not found"));
    }

    public void deleteTeacher(Long id){
        teacherRepository.deleteById(id);
    }

    public Teacher addTeacher(Teacher teacher){
        return teacherRepository.save(teacher);
    }
}

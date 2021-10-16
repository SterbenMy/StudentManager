package com.ims.studentsmanager.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
@Table(name = "course")
public class Course implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private int number;
    @OneToOne(cascade = CascadeType.ALL)
    private Teacher teacher;
    //targetEntity = Student.class, fetch = FetchType.EAGER,
    @OneToMany( cascade = CascadeType.ALL)
//    @JoinColumn(name = "student_id", referencedColumnName = "id")
    List<Student> students = new ArrayList<>();
}

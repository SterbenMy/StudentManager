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
    @Column(nullable = true)
    private String name;
    @Column(nullable = true)
    private int number;
    @OneToOne(fetch=FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name="teacher_id")
    private Teacher teacher;
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "course_fk", referencedColumnName = "id")
    List<Student> students = new ArrayList<>();
}

<template>
  <div class="students-list">
    <el-row class="row-title-teacher">
      <el-col :span="24">
        <span>Students</span>
      </el-col>
    </el-row>
    <div class="scroll-card">
      <div class="div-card" v-for="student in students" :key="student.id">
        <el-card class="card">
          <div slot="header" class="clearfix">
            <span>Student: {{ student.name }}{{student.surname}}</span>
            <span>Courses: {{student.courses.length}} </span>
          </div>
          <div class="buttons-group">
            <el-button>Edit</el-button>
            <el-button>Details</el-button>
            <delete-student-component  :student-id="student.id"></delete-student-component>
          </div>
        </el-card>
      </div>
    </div>
    <div class="add-button">
      <!--      <el-button>Add new student</el-button>-->
      <add-student-component></add-student-component>
    </div>
  </div>
</template>

<script>

import DeleteStudentComponent from "@/components/students/DeleteStudentComponent";
import AddStudentComponent from "@/components/students/AddStudentComponent";
import StudentService from "@/services/StudentService";

export default {
  name: "StudentsList",
  components: {AddStudentComponent, DeleteStudentComponent},
  data() {
    return {
      students: [],
    };
  },
  methods: {
    getStudents() {
      StudentService.getStudents().then((response) => {
        this.students = response.data;
      });
    }
  },
  mounted() {
    this.getStudents();
  }
}
</script>

<style scoped lang="scss">
.students-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem 5rem;

  .row-title-teacher {
    padding: 5rem;
    width: 100%;

    span {
      font-size: 2rem;
    }
  }

  .scroll-card {
    height: 490px;
    width: 1200px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    &::-webkit-scrollbar {
      display: none;
    }

    .div-card {
      padding: 1rem;

      .card {
        width: 350px;
        border-radius: 0.5rem;

        .el-card__header {
          .clearfix {
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
  }
}
</style>
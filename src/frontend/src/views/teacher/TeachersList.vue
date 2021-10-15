<template>
  <div class="courses-list">
    <el-row class="row-title-teacher">
      <el-col :span="24">
        <span>Teachers</span>
      </el-col>
    </el-row>
    <div class="scroll-card">
      <div class="div-card" v-for="teacher in teachers" :key="teacher.id">
        <el-card class="card">
          <div slot="header" class="clearfix">
            <span>Teacher: {{ teacher.name }}{{teacher.surname}}</span>
            <span>Course: {{teacher.courses.length}} </span>
          </div>
          <div class="buttons-group">
            <el-button>Edit</el-button>
            <el-button>Details</el-button>
            <delete-teacher-component  :teacher-id="teacher.id"></delete-teacher-component>
          </div>
        </el-card>
      </div>
    </div>
    <div class="add-button">
      <!--      <el-button>Add new course</el-button>-->
      <add-teacher-component></add-teacher-component>
    </div>
  </div>
</template>

<script>
import DeleteTeacherComponent from "@/components/teachers/DeleteTeacherComponent";
import AddTeacherComponent from "@/components/teachers/AddTeacherComponent";
import TeacherService from "@/services/TeacherServices";

export default {
  name: "TeacherList",
  components: {AddTeacherComponent, DeleteTeacherComponent},
  data() {
    return {
      courses: [],
    };
  },
  methods: {
    getTeachers() {
      TeacherService.getTeachers().then((response) => {
        this.teachers = response.data;
      });
    }
  },
  mounted() {
    this.getTeachers();
  }
}
</script>

<style scoped lang="scss">
.courses-list {
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
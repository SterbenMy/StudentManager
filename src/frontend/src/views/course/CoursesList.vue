<template>
  <div class="courses-list">
    <el-row class="row-title-teacher">
      <el-col :span="24">
        <span>Courses</span>
      </el-col>
    </el-row>
    <div class="scroll-card">
      <div class="div-card" v-for="o in 10" :key="o">
        <el-card class="card">
          <div slot="header" class="clearfix">
            <span>Course name</span>
            <span>Students: 0 </span>
          </div>
          <div class="buttons-group">
            <el-button>Edit</el-button>
            <el-button>Details</el-button>
            <delete-course-component></delete-course-component>
          </div>
        </el-card>
      </div>
    </div>
    <div class="add-button">
      <el-button>Add new course</el-button>
    </div>
  </div>
</template>

<script>
import DeleteCourseComponent from "@/components/courses/DeleteCourseComponent";
export default {
  name: "CoursesList",
  components: {DeleteCourseComponent}
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
<template>

  <div class="home">
    <span class="span-welcome">Welcome to Student Manager App</span>
    <el-row class="el-row-home">
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <router-link :to="{ name: 'CoursesList' }"
        >
          <el-button> View Courses</el-button>
        </router-link>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <router-link :to="{ name: 'StudentsList' }"
        >
          <el-button>View Students</el-button>
        </router-link>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <router-link :to="{ name: 'TeachersList' }"
        >
          <el-button>View Teachers</el-button>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "Home",
}
</script>
<style scoped lang="scss">

.home {
  width: 100%;
  height: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .span-welcome {
    margin-bottom: 10rem;
    font-size: 2rem;
    font-weight: 600;
  }

  /deep/ {
    .el-row-home {
      .el-col {
        display: flex;
        justify-content: center;
        padding: 0.5rem 5rem;

        button {
          background-color: $--color-info;
          color: $--color-primary;
          padding: 1rem 4rem;
          border-radius: 1rem;
          border-color: $--color-info;

          &:hover {
            background-color: $--color-primary;
            color: #fff;
            border-color: $--color-primary;
          }
        }
      }
    }
  }
}
</style>
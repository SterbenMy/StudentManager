<template>
  <div class="course-edit">
    <el-row type="flex" class="row-edit-course-number">
      <el-col class="edit-course" :xs="24" :sm="24" :md="8" :lg="8">
        <span>Edit course {{ id }}</span>
        <div class="general-info">
          <el-form
              class="edit-general-form"
              :model="courseForm"
              :rules="rules"
              ref="editCourseForm"
          >
            <el-form-item label="Name:" prop="name">
              <el-input v-model="courseForm.name"></el-input>
            </el-form-item>
            <el-form-item label="Number:" prop="number">
              <el-input v-model="courseForm.number">
              </el-input>
            </el-form-item>
            <el-form-item label="Teacher:" prop="teacher">
              <el-select v-model="courseForm.teacher" value-key="id" placeholder="Select">
                <el-option
                    v-for="t in teachers"
                    :key="t.id"
                    :label="t.name"
                    :value="t">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Students:" prop="students">
              <el-select v-model="courseForm.students" value-key="id" multiple placeholder="Select">
                <el-option
                    v-for="s in students"
                    :key="s.id"
                    :label="s.name"
                    :value="s">
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
    <el-row class="row-actions-buttons" type="flex">
      <el-col class="col-actions-buttons" :span="24">
        <el-button @click="cancel()" class="cancel"> Cancel</el-button>
        <el-button @click="updateCourse('courseForm')" class="save">Save Changes</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: "EditCourseComponent",
  data() {
    return {
      teachers: [],
      students: [],
      courseForm: {},
      id: this.$route.params.id,
      rules: {
        name: [
          {
            required: true,
            message: "Name is required",
            trigger: ["blur", "change"],
          },
          {
            min: 3,
            message: "The minimum length is 3 characters.",
            trigger: ["blur", "change"],
          },
        ],
        number: [
          {
            required: true,
            message: "Surname is required",
            trigger: ["blur", "change"],
          },
        ],
      },
    }
  },
  methods: {
    async getTeachersList() {
      this.$store.dispatch("getTeachersList");
      this.teachers = await this.$store.getters.getTeachersList;
    },
    async getCourse() {
      await this.$store.dispatch("getCourse", this.id);
      this.courseForm = await this.$store.getters.getCourse;
    },
    async getStudentsList() {
      this.$store.dispatch("getStudentsList");
      this.students = await this.$store.getters.getStudentsList;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit!');
          this.updateCourse();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    updateCourse() {
      this.$store
          .dispatch("updateCourse", {
            id: this.$route.params.id,
            name: this.courseForm.name,
            number: this.courseForm.number,
            teacher: this.courseForm.teacher,
            students: this.courseForm.students,
          })
          .then(() => {
            this.$notify.success({
              title: "Success",
              message: "You have been successfully updated course",
            });

          })
          .catch(() => {
            this.$notify.error({
              title: "Error",
              message:
                  "Something went wrong on the server, please refresh the page try again",
            });
            console.log(this.courseForm);
          });
      this.$router.push({name: 'CoursesList'})
    },
    cancel() {
      this.$router.push({name: 'CoursesList'})
    },
  },
  mounted() {
    this.getStudentsList();
    this.getTeachersList();
    this.getCourse();
  },

};
</script>
<style lang="scss" scoped>
.course-edit {
  .row-edit-course-number {
    padding: 0.875rem 0.875rem;

    span {
      font-size: 1.5rem;
      font-weight: 500;
      color: #707070;
    }

    .edit-course {
      margin-right: 2.5rem;
      margin-top: 3.5rem;
    }
  }

  .row-actions-buttons {
    padding: 10.875rem 0.875rem;

    .col-actions-buttons {
      justify-content: flex-end;
      display: flex;
    }

    .cancel {
      border: none;
      font-size: 1rem;
      font-weight: 600;
      color: #707070;
      padding: 1rem 2rem;
      margin-right: 1rem;

      &:hover {
        border: none;
        background-color: transparent;
        color: $--color-primary;
      }
    }

    .save {
      background-color: $--color-primary;
      border: 1px solid $--color-primary;
      font-size: 1rem;
      font-weight: 600;
      color: #fff;
      border-radius: 0.5rem;
      padding: 1rem 2rem;

      &:hover {
        background-color: $--color-primary;
      }
    }
  }
}

</style>

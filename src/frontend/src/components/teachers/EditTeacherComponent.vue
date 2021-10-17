<template>
  <div class="teacher-edit">
    <el-row type="flex" class="row-edit-teacher-name">
      <el-col class="edit-teacher" :xs="24" :sm="24" :md="8" :lg="8">
        <span>Edit teacher {{ id }}</span>
        <div class="general-info">
          <el-form
              class="edit-general-form"
              :model="teacherForm"
              :rules="rules"
              ref="editTeacherForm"
          >
            <el-form-item label="Name:" prop="name">
              <el-input v-model="teacherForm.name"></el-input>
            </el-form-item>
            <el-form-item label="Surname:" prop="surname">
              <el-input v-model="teacherForm.surname">
              </el-input>
            </el-form-item>
            <el-form-item label="Email:" prop="email">
              <el-input v-model="teacherForm.email">
              </el-input>
            </el-form-item>
            <el-form-item label="Gender:" prop="gender">
              <el-input v-model="teacherForm.gender">
              </el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
    <el-row class="row-actions-buttons" type="flex">
      <el-col class="col-actions-buttons" :span="24">
        <el-button @click="cancel()" class="cancel"> Cancel</el-button>
        <el-button @click="updateTeacher('teacherForm')" class="save">Save Changes</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: "EditTeacherComponent",
  data() {
    return {
      teacherForm: {},
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
        surname: [
          {
            required: true,
            message: "Surname is required",
            trigger: ["blur", "change"],
          },
          {
            min: 3,
            message: "The minimum length is 3 characters.",
            trigger: ["blur", "change"],
          },
        ],
      },
    }
  },
  methods: {
    cancel(){
      this.$router.push({name: 'TeachersList'})
    },
    async getTeacher() {
      await this.$store.dispatch("getTeacher", this.id);
      this.teacherForm = await this.$store.getters.getTeacher;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit!');
          this.updateTeacher();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    updateTeacher() {
      this.$store
          .dispatch("updateTeacher", {
            id: this.$route.params.id,
            name: this.teacherForm.name,
            surname: this.teacherForm.surname,
            email: this.teacherForm.email,
            gender: this.teacherForm.gender,
          })
          .then(() => {
            this.$notify.success({
              title: "Success",
              message: "You have been successfully updated teacher",
            });
          })
          .catch(() => {
            this.$notify.error({
              title: "Error",
              message:
                  "Something went wrong on the server, please refresh the page try again",
            });
          });
      this.$router.push({name: 'TeachersList'})
    },
  },
  mounted() {
    this.getTeacher();
  },
};
</script>

<style lang="scss" scoped>
.teacher-edit {
  .row-edit-teacher-name {
    padding: 0.875rem 0.875rem;

    span {
      font-size: 1.5rem;
      font-weight: 500;
      color: #707070;
    }

    .edit-teacher {
      margin-right: 3.5rem;
      margin-top: 5rem;
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

@media only screen and (max-width: 992px) {
  .teacher-edit {
    .row-edit-teacher-name {
      flex-direction: column;
    }
  }
}
</style>

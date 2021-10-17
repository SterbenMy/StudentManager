<template>
  <div class="student-edit">
    <el-row type="flex" class="row-edit-student-name">
      <el-col class="edit-student" :xs="24" :sm="24" :md="8" :lg="8">
        <span>Edit student {{id}}</span>
        <div class="general-info">
          <el-form
              class="edit-general-form"
              :model="studentForm"
              :rules="rules"
              ref="editStudentForm"
          >
            <el-form-item label="Name:" prop="name">
              <el-input v-model="studentForm.name"></el-input>
            </el-form-item>
            <el-form-item label="Surname:" prop="surname">
              <el-input v-model="studentForm.surname">
              </el-input>
            </el-form-item>
            <el-form-item label="Email:" prop="email">
              <el-input v-model="studentForm.email">
              </el-input>
            </el-form-item>
            <el-form-item label="Gender:" prop="gender">
              <el-input v-model="studentForm.gender">
              </el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
    <el-row class="row-actions-buttons" type="flex">
      <el-col class="col-actions-buttons" :span="24">
        <el-button @click="cancel()" class="cancel"> Cancel </el-button>
        <el-button @click="updateStudent('studentForm')" class="save">Save Changes</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: "EditStudentComponent",
  data() {
    return {
      studentForm: {},
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
    async getStudent() {
      await this.$store.dispatch("getStudent", this.id);
      this.studentForm = await this.$store.getters.getStudent;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit!');
          this.updateStudent();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    updateStudent() {
      this.$store
          .dispatch("updateStudent", {
            id: this.$route.params.id,
            name: this.studentForm.name,
            surname: this.studentForm.surname,
            email: this.studentForm.email,
            gender: this.studentForm.gender,
          })
          .then(() => {
            this.$notify.success({
              title: "Success",
              message: "You have been successfully updated student",
            });
          })
          .catch(() => {
            this.$notify.error({
              title: "Error",
              message:
                  "Something went wrong on the server, please refresh the page try again",
            });
          });
      this.$router.push({name: 'StudentsList'})
    },
    cancel(){
      this.$router.push({name: 'StudentsList'})
    },
  },

  mounted() {
    this.getStudent();
  },
};
</script>
<style lang="scss" scoped>
.student-edit {
  .row-edit-student-name {
    padding: 0.875rem 0.875rem;
    span {
      font-size: 1.5rem;
      font-weight: 500;
      color: #707070;
    }

    .edit-student {
      margin-right: 2.5rem;
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
  .building-edit {
    .row-edit-building-floor {
      flex-direction: column;
    }
  }
}
</style>

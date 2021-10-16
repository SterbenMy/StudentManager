<template>
  <div v-loading="loading">
    <el-button @click="dialogVisible = true"> Add Student</el-button>
    <el-dialog
        custom-class="settings-dialog"
        title="Add student"
        :visible.sync="dialogVisible"
        :append-to-body="true"
        class="modal-add-building"
    >
      <el-form class="settings-dialog-form"
               :model="addStudentForm"
               :rules="rules"
               ref="addStudentForm"
      >

        <el-form-item label="Name:" prop="name">
          <el-input  v-model="addStudentForm.name">
          </el-input>
        </el-form-item>
        <el-form-item label="Surname:" prop="surname">
          <el-input v-model="addStudentForm.surname"></el-input>
        </el-form-item>
        <el-form-item label="Email:" prop="email">
          <el-input v-model="addStudentForm.email"></el-input>
        </el-form-item>
        <el-form-item label="Gender:" prop="gender">
          <el-input v-model="addStudentForm.gender"></el-input>
        </el-form-item>
        <div class="button-container-actions">
          <el-button @click="dialogVisible = false" class="button-cancel">
            Cancel
          </el-button>
          <el-button @click="submitForm('addStudentForm')" class="button-submit">
            Add Student
          </el-button>
        </div>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "AddStudentComponent",
  data() {
    return {
      dialogVisible: false,
      addStudentForm: {
        name: "",
        surname: "",
        email: "",
        gender: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "Name is required",
            trigger: ["blur", "change"],
          },
        ],
        surname: [
          {
            required: true,
            message: "Surname is required",
            trigger: ["blur", "change"],
          },
        ],
        email: [
          {
            required: true,
            message: "Email is required",
            trigger: ["blur", "change"],
          },
        ],
        gender: [
          {
            required: true,
            message: "Gender is required",
            trigger: ["blur", "change"],
          },
        ],
      },
    };
  },

  methods: {
    submitForm(formName) {
      /*this.$refs[formName].validate((valid) => {
        /*if (valid) {
          console.log('submit!');
          this.dialogVisible=false;
          this.addStudentForm.name="";
          this.addStudentForm.surname="";
          this.addStudentForm.email="";
          this.addStudentForm.gender="";
        } else {
          console.log('error submit!!');
          return false;
        }*/
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.addStudent();
          } else {
            return false;
          }
        });
      },
    addStudent() {
      this.$store
          .dispatch("create", {
            name: this.student.name,
            surname: this.student.surname,
            email: this.student.email,
            gender: this.student.gender,
          })
          .then(() => {
            this.$notify.success({
              title: "Success",
              message: "You have been successfully added students",
            });
            this.dialogVisible = false;
            this.resetStudent();
          })
          .catch(() => {
            this.$notify.error({
              title: "Error",
              message:
                  "Something went wrong on the server, please refresh the page try again",
            });
          });
    },
    resetStudent() {
      this.student.name = "";
      this.student.surname = "";
      this.student.email = "";
      this.student.gender = "";
    },
  },
  computed: {
    loading() {
      return this.$store.getters["student/requestStarted"];
    },
  },
}
</script>

<style scoped lang="scss">
/deep/ {
  .settings-dialog {
    margin-top: 2rem !important;
  }

  .el-dialog__header {
    padding-top: 2.25rem;
    padding-bottom: 1.675rem;
    .el-dialog__title {
      font-size: 1.5rem;
    }
  }

  .el-form-item__label {
    &::after {
      content: "(Required)";
      opacity: 0.5;
      margin-left: 0.25rem;
    }
  }

  .el-form-item__content {
    .el-textarea {
      .el-textarea__inner {
        min-height: 120px !important;
      }
    }
  }
}
</style>
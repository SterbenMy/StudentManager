<script src="../../store/modules/students.js"></script>
<template>
  <div>
    <div class="add-button">
      <el-button class="button-add" @click="dialogVisible = true"> Add Student</el-button>
    </div>
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
          <el-input v-model="addStudentForm.name">
          </el-input>
        </el-form-item>
        <el-form-item label="Surname:" prop="surname">
          <el-input v-model="addStudentForm.surname"></el-input>
        </el-form-item>
        <el-form-item label="Email:" prop="email">
          <el-input v-model="addStudentForm.email"></el-input>
        </el-form-item>
        <el-form-item label="Gender:" prop="gender">
          <el-select
              v-model="addStudentForm.gender"
              filterable
              placeholder="Choose gender"
              class="input select"
          >
            <el-option
                v-for="item in addStudentForm.genderOpt"
                :key="item.id"
                :label="item.name"
                :value="item.id"
            >
            </el-option>
          </el-select>
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
        gender:"",
        genderOpt: [{name: "MALE", id: 0}, {name: "FEMALE", id: 1}]
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
      },
    };
  },

  methods: {
    submitForm(formName) {
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
          .dispatch("createStudent", {
            name: this.addStudentForm.name,
            surname: this.addStudentForm.surname,
            email: this.addStudentForm.email,
            gender: this.addStudentForm.gender,
          })
          .then(() => {
            this.$notify.success({
              title: "Success",
              message: "You have been successfully added students",
            });
            this.dialogVisible = false;
            this.resetStudent();
            this.$router.go().catch(()=>{});
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
      this.addStudentForm.name = "";
      this.addStudentForm.surname = "";
      this.addStudentForm.email = "";
      this.addStudentForm.gender = "";
    },
  },
}
</script>

<style scoped lang="scss">
.add-button {
  padding: 2rem;
}

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
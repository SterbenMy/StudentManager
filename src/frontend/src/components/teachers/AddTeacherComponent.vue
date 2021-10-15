<template>
  <div>
    <el-button @click="dialogVisible = true"> Add Teacher</el-button>
    <el-dialog
        custom-class="settings-dialog"
        title="Add teacher"
        :visible.sync="dialogVisible"
        :append-to-body="true"
        class="modal-add-building"
    >
      <el-form class="settings-dialog-form"
               :model="addTeacherForm"
               :rules="rules"
               ref="addTeacherForm"
      >
        <el-form-item label="Name:" prop="name">
          <el-input v-model="addTeacherForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Surname:" prop="surname">
          <el-input  v-model="addTeacherForm.surname">
          </el-input>
        </el-form-item>
        <el-form-item label="Course:" prop="course">
          <el-input  v-model="addTeacherForm.course">
          </el-input>
        </el-form-item>
        <div class="button-container-actions">
          <el-button @click="dialogVisible = false" class="button-cancel">
            Cancel
          </el-button>
          <el-button @click="submitForm('addTeacherForm')" class="button-submit">
            Add teacher
          </el-button>
        </div>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "AddTeacherComponent",
  data() {
    return {
      dialogVisible: false,
      addTeacherForm: {
        name: "",
        surname: "",
        course: ""
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
        course: [
          {
            required: true,
            message: "Course is required",
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
          console.log('submit!');
          this.dialogVisible=false;
          this.addTeacherForm.name="";
          this.addTeacherForm.surname="";
          this.addTeacherForm.course="";
        } else {
          console.log('error submit!!');
          return false;
        }
      });
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
<template>
  <div>
    <el-button @click="dialogVisible = true"> Add Course</el-button>
    <el-dialog
        custom-class="settings-dialog"
        title="Add course"
        :visible.sync="dialogVisible"
        :append-to-body="true"
        class="modal-add-building"
    >
      <el-form class="settings-dialog-form"
               :model="addCourseForm"
               :rules="rules"
               ref="addCourseForm"
      >
        <el-form-item label="Number:" prop="number">
          <el-input v-model="addCourseForm.number" v-validate="'numeric'"></el-input>
        </el-form-item>
        <el-form-item label="Name:" prop="name">
          <el-input  v-model="addCourseForm.name">
          </el-input>
        </el-form-item>
        <div class="button-container-actions">
          <el-button @click="dialogVisible = false" class="button-cancel">
            Cancel
          </el-button>
          <el-button @click="submitForm('addCourseForm')" class="button-submit">
            Create Course
          </el-button>
        </div>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "AddCourseComponent",
  data() {
    return {
      dialogVisible: false,
      addCourseForm: {
        number: "",
        name: "",
      },
      rules: {
        number: [
          {
            required: true,
            message: "Number is required",
            trigger: ["blur", "change"],
          },
        ],
        name: [
          {
            required: true,
            message: "Name is required",
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
          this.createCourse();
          this.dialogVisible=false;
          this.addCourseForm.name="";
          this.addCourseForm.number="";
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    createCourse() {
      this.$store
          .dispatch("createCourse", {
            name: this.addCourseForm.name,
            number: this.addCourseForm.number,

          })
          .then(() => {
            this.$notify.success({
              title: "Success",
              message: "You have been successfully added course",
            });
            this.$router.go().catch(()=>{});
          })
          .catch(() => {
            this.$notify.error({
              title: "Error",
              message:
                  "Something went wrong on the server, please refresh the page try again",
            });
          });
    }
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
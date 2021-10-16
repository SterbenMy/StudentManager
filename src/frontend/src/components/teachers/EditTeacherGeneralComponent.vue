<template>
  <div class="general-info">
    <el-form
        class="edit-general-form"
        :model="editTeacherForm"
        :rules="rules"
        ref="editTeacherForm"
    >
      <el-form-item label="Name:" prop="name">
        <el-input v-model="editTeacherForm.name"></el-input>
      </el-form-item>
      <el-form-item label="Surname:" prop="surname">
        <el-input v-model="editTeacherForm.surname">
        </el-input>
      </el-form-item>
      <el-form-item label="Email:" prop="email">
        <el-input  v-model="editTeacherForm.email">
        </el-input>
      </el-form-item>
      <el-form-item label="Gender:" prop="gender">
        <el-input  v-model="editTeacherForm.gender">
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "EditTeacherGeneralComponent",
  data() {
    return {
      dialogVisible: false,
      editTeacherForm: {
        name: "",
        surname: "",
        email: "",
        gender: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "Address is required",
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
            message: "Description is required",
            trigger: ["blur", "change"],
          },
          {
            min: 13,
            message: "The minimum length is 13 characters.",
            trigger: ["blur", "change"],
          },
        ],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.general-info {
  margin-top: 1.3125rem;
  .edit-general-form {
    /deep/ {
      .el-form-item {
        .el-form-item__label {
          color: #2d2d2d;
          font-weight: 400;
          font-size: 0.875rem;
          line-height: 1.063rem;
          margin-bottom: 0.125rem;
          padding: 0;

          &::after {
            content: "(Required)";
            opacity: 0.5;
            margin-left: 0.25rem;
          }
        }

        .el-form-item__content {
          .el-input {
            .el-input__inner {
              color: #2d2d2d;
              font-weight: 400;
              font-size: 1rem;
              line-height: 1.25rem;
            }
          }

          .el-textarea {
            .el-textarea__inner {
              color: #2d2d2d;
              font-weight: 400;
              font-size: 1rem;
              line-height: 1.25rem;
              background-color: #eef3f5;
              border-radius: 0.5rem;
              border-color: transparent;
              min-height: 120px !important;
              resize: none;
              padding: 0.625rem 1rem;

              &:hover {
                border-color: $--color-primary;
              }
            }
          }
        }
      }
    }
  }
}

/* Removal content "*" for Validation */
/deep/ {
  .is-required {
    .el-form-item__label {
      &::before {
        content: "" !important;
        margin-right: 0 !important;
      }
    }
  }
}
</style>

<template>
  <div class="student-edit">
    <el-row type="flex" class="row-edit-student-name">
      <el-col class="edit-student" :xs="24" :sm="24" :md="8" :lg="8">
        <span>Edit student</span>
        <edit-student-general-component></edit-student-general-component>
      </el-col>
    </el-row>
    <el-row class="row-actions-buttons" type="flex">
      <el-col class="col-actions-buttons" :span="24">
        <el-button class="cancel"> Cancel </el-button>
        <el-button class="save">Save Changes</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import EditStudentGeneralComponent from "@/components/students/EditStudentGeneralComponent";

export default {
  components: {
    EditStudentGeneralComponent,
  },
  name: "EditStudentComponent",
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

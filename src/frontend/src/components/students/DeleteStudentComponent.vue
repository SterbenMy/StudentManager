<template>
  <el-button  type="primary" icon="el-icon-delete" circle  @click="handleDelete(studentId)">
  </el-button>
</template>

<script>
export default {
  name: "DeleteStudentComponent",
  props: {
    studentId: {
      required: true,
      type: Number,
    },
  },
  methods: {
    handleDelete(id) {
      this.$confirm("Are you sure to delete this student?", {
        confirmButtonText: "Delete",
        cancelButtonText: "Cancel",
        customClass: "delete-message-box",
      })
          .then(() => {
            this.$store.dispatch("deleteStudent", id);
            this.$router.go().catch(()=>{});
          })
          .catch(() => {
            return 0;
          });

    },
  },
}
</script>

<style scoped lang="scss">
.el-button {
  margin-left: 0.625rem;
}
</style>
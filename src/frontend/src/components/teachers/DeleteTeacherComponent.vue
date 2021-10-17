<template>
  <div>
    <el-button type="primary" icon="el-icon-delete"  @click="handleDelete(teacherId)">Delete</el-button>
  </div>
</template>

<script>
export default {
  name: "DeleteTeacherComponent",
  props: {
    teacherId: {
      required: true,
      type: Number,
    },
  },
  methods: {
    handleDelete(id) {
      this.$confirm("Are you sure to delete this teacher?", {
        confirmButtonText: "Delete",
        cancelButtonText: "Cancel",
        customClass: "delete-message-box",
      })
          .then(() => {
            this.$store.dispatch("deleteTeacher", id);
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
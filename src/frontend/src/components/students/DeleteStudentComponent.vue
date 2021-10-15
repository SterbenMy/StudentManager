<template>
  <div>
    <el-button @click="handleDelete(studentId)">Delete</el-button>
  </div>
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
            console.log(id);
          })
          .catch(() => {
            return 0;
          });
    },
  },
}
</script>

<style scoped lang="scss">

</style>
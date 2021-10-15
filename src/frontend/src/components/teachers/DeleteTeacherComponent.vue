<template>
  <div>
    <el-button @click="handleDelete(teacherId)">Delete</el-button>
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
<template>
  <div>
    <el-button @click="handleDelete(courseId)">Delete</el-button>
  </div>
</template>

<script>
export default {
  name: "DeleteCourseComponent",
  props: {
    courseId: {
      required: true,
      type: Number,
    },
  },
  methods: {
    handleDelete(id) {
      this.$confirm("Are you sure to delete this course?", {
        confirmButtonText: "Delete",
        cancelButtonText: "Cancel",
        customClass: "delete-message-box",
      })
          .then(() => {
            this.$store.dispatch("delete", id);
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
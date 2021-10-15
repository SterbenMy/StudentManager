<template>
  <div >
    <el-button @click="handleDelete()">Delete</el-button>
  </div>
</template>

<script>
export default {
  name: "DeleteCourseComponent",
  // trebuie de facut props care cere acel id in view-ul principal
  methods: {
    //parametru id la elementul din array
    handleDelete() {
      this.$confirm("Are you sure to delete this course?", {
        confirmButtonText: "Delete",
        cancelButtonText: "Cancel",
        customClass: "delete-message-box",
      })
          .then(() => {
            //tipa sterge aici vuex  delete this.element[id];
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
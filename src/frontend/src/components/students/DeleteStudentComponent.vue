<template>
  <el-button class="button-trash" @click="handleDelete(studentId)">
    <i class="icon-trash-2"></i>
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
.button-trash {
  margin-left: 0.625rem;
}
</style>
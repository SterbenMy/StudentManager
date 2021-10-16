<template>
  <div class="teachers-list">
    <div class="row-title-teacher">
      <span>Teachers</span>
    </div>
    <div>
      <add-teacher-component><el-button>Add teacher</el-button></add-teacher-component>
    </div>
    <div style="width: 100%">
      <el-table :data="teachers" >
        <el-table-column label="Name" class-name="table-column-name">
          <template slot-scope="scope">
            {{ scope.row.name }}
          </template>
        </el-table-column>
        <el-table-column
            label="Surname"
            class-name="table-column-surname"
        >
          <template slot-scope="scope">
            {{ scope.row.surname }}
          </template>
        </el-table-column>
        <el-table-column
            label="Email"
            class-name="table-column-email"
        >
          <template slot-scope="scope">
            {{ scope.row.email}}
          </template>
        </el-table-column>
        <el-table-column
            label="Gender"
            class-name="table-column-gender"
        >
          <template slot-scope="scope">
            {{ scope.row.gender }}
          </template>
        </el-table-column>
        <el-table-column
            class-name="table-column-actions-buttons"
            label="Actions"
            align="right"
        >
          <template v-if="!scope.row.visible" slot-scope="scope">
            <router-link
                :to="{ name: 'EditTeacherComponent', params: { id: scope.row.id } }"
            >
              <el-button type="primary" icon="el-icon-edit" circle></el-button>
            </router-link>
            <delete-teacher-component
                :teacher-id="scope.row.id"
            ><el-button type="danger" icon="el-icon-delete" circle></el-button></delete-teacher-component>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import DeleteTeacherComponent from "@/components/teachers/DeleteTeacherComponent";
import AddTeacherComponent from "@/components/teachers/AddTeacherComponent";
// import TeacherService from "@/services/TeacherServices";

export default {
  name: "TeacherList",
  components: {AddTeacherComponent, DeleteTeacherComponent},
  data() {
    return {
      teachers: [],
    };
  },
  methods: {
    async getList() {
      this.$store.dispatch("getList");
      this.teachers = await this.$store.getters.getTeachersList;
    },
  },
  mounted() {
    this.getList();
  },
}
</script>
<style scoped lang="scss">
.teachers-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem 5rem;

  .row-title-teacher {
    padding: 5rem;
    width: 100%;

    span {
      font-size: 2rem;
    }
  }

  .scroll-card {
    height: 490px;
    width: 1200px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    &::-webkit-scrollbar {
      display: none;
    }

    .div-card {
      padding: 1rem;

      .card {
        width: 350px;
        border-radius: 0.5rem;

        .el-card__header {
          .clearfix {
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
  }
}
</style>
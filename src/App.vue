<template>
  <div id="app">
    <h1>To Do App</h1>
    <add-task
      @create-task="createTask"
    ></add-task>
    <div class="empty" v-if="tasksEmpty">
      <span>You have no tasks</span>
    </div>

    <task 
      v-for="task in this.tasks"
      :key="task"
      :desc="task"
      @delete-task="deleteTask"
    />
  </div>
</template>

<script>
import AddTask from './AddTask.vue';
import Task from './Task.vue';

export default {
  name: 'App',
  components: {
    AddTask,
    Task
  },

  data() {
    return {
      tasks: []
    }
  },

  computed: {
    tasksEmpty() {
      return this.tasks.length === 0;
    }
  },

  methods: {
    createTask(description) {
      this.tasks.push(description);
    },

    deleteTask(description) {
      this.tasks = this.tasks.filter((task) => {
        return task !== description;
      });
    }
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

  .empty {
      display: flex;
      width: 800px;
      max-width: 100%;
      margin-left: auto;
      margin-right: auto;
      gap: 15px;
      padding: 20px;
      background: linear-gradient(135deg, #a4cbf3 0%, #c3cfe2 100%);
      border-radius: 12px;
      box-shadow: 
          0 8px 32px rgba(0, 0, 0, 0.1),
          0 2px 8px rgba(0, 0, 0, 0.08),
          inset 0 1px 0 rgba(255, 255, 255, 0.3);
      border: 1px solid rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      align-items: center;
  }
</style>
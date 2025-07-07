<template>
    <div class="actions">
        <div class="filter">
            <input 
                v-model="description" 
                placeholder="Describe your task" 
                @keyup.enter="createTask"
            />
        </div>
        <div class="create">
            <button @click="createTask" class="add-btn">+</button>
        </div>
    </div>
</template>

<style scoped>
    .actions {
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

    .filter input {
        width: 400px;
        max-width: 100%;
        padding: 12px 15px;
        border: none;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.7);
        box-shadow: 
            inset 0 2px 4px rgba(0, 0, 0, 0.1),
            0 1px 2px rgba(255, 255, 255, 0.5);
        font-size: 14px;
        color: #333;
        transition: all 0.3s ease;
    }

    .filter input:focus {
        outline: none;
        background: rgba(255, 255, 255, 0.9);
        box-shadow: 
            inset 0 2px 4px rgba(0, 0, 0, 0.15),
            0 0 0 3px rgba(59, 130, 246, 0.2);
    }

    .filter input::placeholder {
        color: #888;
    }

    .create {
        margin-left: auto;
    }

    .add-btn {
        width: 45px;
        height: 45px;
        border: none;
        margin-left: auto;
        border-radius: 40%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        box-shadow: 
            0 4px 15px rgba(102, 126, 234, 0.4),
            0 2px 8px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        position: relative;
        overflow: hidden;
    }

    .add-btn:hover {
        transform: translateY(-3px);
        box-shadow: 
            0 8px 25px rgba(102, 126, 234, 0.5),
            0 4px 12px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.4);
        background: linear-gradient(135deg, #7c8ce6 0%, #8a5aa8 100%);
    }

    .add-btn:active {
        outline: none;
        box-shadow: 
            0 8px 25px rgba(102, 126, 234, 0.5),
            0 4px 12px rgba(0, 0, 0, 0.15),
            0 0 0 3px rgba(102, 126, 234, 0.3);
    }
</style>

<script>
export default {
    name: 'AddTask',

    data() {
        return {
            description: ''
        };
    },

    methods: {
        createTask() {
            this.$emit('create-task', this.description);
            this.description = '';
        }
    }
}
</script>
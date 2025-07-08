<template>
    <div class="task" :class="{'complete': isComplete}">
        <button v-if="!editMode" class="edit-button" @click="setEditMode">
            <font-awesome-icon icon="edit" />
        </button>
    
        <div class="edit-section" v-if="editMode">
            <input class="edit" placeholder="Task description" v-model="localDescription">
            <button class="save-button" @click="updateTask">
                <font-awesome-icon icon="floppy-disk" />
            </button>
        </div>
        <div v-else>
            <span>
                {{ this.localDescription }}
            </span>
        </div>
        
        <div class="complete">
            <button class="complete-button" :class="{'completed': isComplete}" @click="markTaskCompleted">
                <font-awesome-icon icon="check" />
            </button>
        </div>
        <div class="delete">
            <button class="delete-button" @click="deleteTask">
                <font-awesome-icon icon="trash" />
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Task',
    props: {
        id: {
            type: String,
            required: true
        },

        desc: {
            type: String,
            required: true
        },

        status: {
            type: String,
            required: true
        }
    },

    data() {
        return {
            editMode: false,
            localDescription: this.desc
        }
    },

    computed: {
        isComplete() {
            return this.status === 'completed';
        }
    },

    methods: {
        deleteTask() {
            this.$emit('delete-task', this.id);
        },

        setEditMode() {
            this.editMode = true;
        },

        markTaskCompleted() {
            this.$emit('task-completed', this.id);
        },

        updateTask() {
            this.$emit('update-task', this.id, this.localDescription);
            this.editMode = false;
        }
    }
};
</script>

<style scoped>
    .task {
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

    .task.complete {
        background: linear-gradient(135deg, #4ade80, #22c55e);
    }

    .complete {
        margin-left: auto;
    }

    .complete-button, .delete-button, .edit-button, .save-button {
        width: 45px;
        height: 45px;
        border: none;
        border-radius: 40%;
        color: white;
        font-size: 16px;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .complete-button {
        background: linear-gradient(135deg, #9ca3af 0%, #6b7280 100%);
    }

    .complete-button:hover {
        box-shadow: 
            0 8px 25px rgba(156, 163, 175, 0.2),
            0 4px 12px rgba(0, 0, 0, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        background: linear-gradient(135deg, #9ca3af 0%, #6b7280 100%);
    }

    .complete-button.completed {
        background: linear-gradient(135deg, #4ade80, #22c55e);
    }

    .delete-button {
        background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
    }

    .delete-button:hover {
        box-shadow: 
            0 8px 25px rgba(255, 107, 107, 0.2),
            0 4px 12px rgba(0, 0, 0, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        background: linear-gradient(135deg, #ff7979 0%, #f56565 100%);
    }

    .delete-button:active {
        outline: none;
        box-shadow: 
            0 8px 25px rgba(255, 107, 107, 0.5),
            0 4px 12px rgba(0, 0, 0, 0.15),
            0 0 0 3px rgba(255, 107, 107, 0.3);
    }

    .edit-button, .save-button {
        background: linear-gradient(135deg, #93c5fd 0%, #3b82f6 100%);
    }

    .edit-button:hover, .save-button:hover {
        box-shadow: 
            0 8px 25px rgba(147, 197, 253, 0.2),
            0 4px 12px rgba(0, 0, 0, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        background: linear-gradient(135deg, #60a5fa 0%, #2563eb 100%);
    }

    .edit-button:active, .save-button:active {
        outline: none;
        box-shadow: 
            0 8px 25px rgba(147, 197, 253, 0.5),
            0 4px 12px rgba(0, 0, 0, 0.15),
            0 0 0 3px rgba(147, 197, 253, 0.3);
    }

    .edit-section {
        display: flex;
        gap: 10px;
    }

    .edit-section input {
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

    .edit-section input:focus {
        outline: none;
        background: rgba(255, 255, 255, 0.9);
        box-shadow: 
            inset 0 2px 4px rgba(0, 0, 0, 0.15),
            0 0 0 3px rgba(59, 130, 246, 0.2);
    }

    .edit-section input::placeholder {
        color: #888;
    }
</style>
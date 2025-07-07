<template>
    <div class="task">
        <span>
            {{ this.localDescription }}
        </span>
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
        desc: {
            type: String,
            required: true
        }
    },

    data() {
        return {
            localDescription: this.desc
        }
    },

    methods: {
        deleteTask() {
            this.$emit('delete-task', this.localDescription);
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

    .delete {
        margin-left: auto;
    }

    .delete-button {
        width: 45px;
        height: 45px;
        border: none;
        border-radius: 40%;
        background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
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
</style>
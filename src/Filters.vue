<template>
    <div class="filters">
        <span>Filters:</span>
        <button class="all-button" :class="{'active': isActiveAll}" @click="showAll">
            <font-awesome-icon icon="list" />
        </button>
        <button class="complete-button" :class="{'active': isActiveCompleted}" @click="filterCompleted">
            <font-awesome-icon icon="check" />
        </button>
        <button class="incomplete-button" :class="{'active': isActiveIncomplete}" @click="filterIncomplete">
            <font-awesome-icon icon="spinner" />
        </button>
    </div>
</template>

<style scoped>
    .filters {
        display: flex;
        margin-left: auto;
        margin-right: auto;
        align-items: center;
        gap: 10px;
    }

    .complete-button, .incomplete-button, .all-button {
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
        background: linear-gradient(135deg, #4ade80, #22c55e);
    }

    .complete-button.active {
        box-shadow: 0 0 5px rgba(34, 197, 94, 0.6), 0 0 10px rgba(34, 197, 94, 0.4);
        transform: scale(1.05);
    }

    .incomplete-button {
        background: linear-gradient(135deg, #ff9500 0%, #ff8c00 100%);
    }

    .incomplete-button.active {
        box-shadow: 0 0 5px rgba(255, 140, 0, 0.6), 0 0 10px rgba(255, 140, 0, 0.4);
        transform: scale(1.05);
    }
    
    .all-button {
        background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
    }

    .all-button.active {
        box-shadow: 0 0 5px rgba(9, 132, 227, 0.6), 0 0 10px rgba(9, 132, 227, 0.4);
        transform: scale(1.05);
    }
</style>

<script>
export default {
    name: 'Filters',

    data() {
        return {
            filterBy: 'all'
        };
    },

    computed: {
        isActiveAll() {
            return this.filterBy === 'all';
        },

        isActiveIncomplete() {
            return this.filterBy === 'incomplete';
        },

        isActiveCompleted() {
            return this.filterBy === 'completed';
        }
    },

    methods: {
        filterIncomplete() {
            this.filterBy = 'incomplete';
            this.$emit('filter', this.filterBy);
        },

        filterCompleted() {
            this.filterBy = 'completed';
            this.$emit('filter', this.filterBy);
        },

        showAll() {
            this.filterBy = 'all';
            this.$emit('filter', this.filterBy);
        }
    }
}
</script>
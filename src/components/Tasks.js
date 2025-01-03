import Router from "./Router.js";
import generateID from "../utilities/generateID.js"

class Tasks {
    today = new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60000)).toISOString().split("T")[0];
    data = [
        {
            id: 1,
            title: "Task 1",
            description: "Description 1",
            date: this.today,
            important: false,
            done: false,
        },
        {
            id: 2,
            title: "Task 2",
            description: "Description 2",
            date: "2025-01-05",
            important: true,
            done: true,
        },
    ]

    addTask(task) {
        if(!task.title) return
        if(!task.date) task.date = this.today;
        if(!task.important) task.important = false;

        this.data.push({ id: generateID(), ...task });
        Router.renderView();
    }

    editTask(id, task) {
        this.data = this.data.map(t => t.id === id ? { ...t, ...task } : t);
        Router.renderView();
    }

    deleteTask(id) {
        this.data = this.data.filter(task => task.id !== id);
        Router.renderView();
    }

    getTodayTasks() {
        return this.data.filter(task => task.date === this.today);
    }

    getPlannedTasks() {
        return this.data.filter(task => task.date > this.today);
    }

    getImportantTasks() {
        return this.data.filter(task => task.important);
    }
}

export default new Tasks();
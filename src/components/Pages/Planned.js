import Tasks from '../Tasks.js'

export default class Planned {
    getView() {
        const plannedTasks = Tasks.getPlannedTasks();
        const view = plannedTasks.map(task => `<div class="task">${task.title} ${task.date} ${task.important}</div>`).join('')
        return view
    }
}
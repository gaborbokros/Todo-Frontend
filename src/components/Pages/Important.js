import Tasks from '../Tasks.js'

export default class Important {
    getView() {
        const importantTasks = Tasks.getImportantTasks();
        const view = importantTasks.map(task => `<div class="task">${task.title} ${task.date} ${task.important}</div>`).join('')
        return view
    }
}
import Tasks from '../Tasks.js'

export default class Today {
    getView() {
        const todayTasks = Tasks.getTodayTasks();
        const view = todayTasks.map(task => `<div class="task">${task.title} ${task.date} ${task.important}</div>`).join('')
        return view
    }
}
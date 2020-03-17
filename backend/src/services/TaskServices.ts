import db from '../sequelize/models';

const { Task } = db;

class TaskServices {

    async findAndCountAll(limit?: number, offset?: number, order?: { orderAcc: string, orderMethodAcc: string }) { 
        const tasks = await Task.findAndCountAll({
            limit,
            offset: (offset - 1) * limit,
            order: [[ order.orderAcc, order.orderMethodAcc]]
        });
        if(tasks) {
            return {
                found: true,
                tasks
            }
        } else {
            return {
                found: false,
                tasks: null
            }
        }
    }

    async findAll() {
        const allTasks = await Task.findAll();
        if(allTasks) {
            return { found: true, allTasks }
        } else {
            return { found: false, allTasks: null }
        }
    }

    async save(task: object) {
        const newTask = await Task.create({
            ...task
        });
        if(newTask) {
            return { saved: true }
        } else {
            return { saved: false }
        }
    }
}

export default TaskServices;

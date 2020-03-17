import { TaskServices } from '../services';

export class TasksController {
    static tasksOps = new TaskServices();

    async getTasks (req, res) {
        const {page, limit, order, orderMethod} = req.query;
        const orderAcc =  (order === 'created' ? 'createdAt': order) || 'createdAt';
        const orderMethodAcc =  orderMethod || 'created';
        if(page || limit) {
            try {
                const results = await TasksController.tasksOps.findAndCountAll(limit, page, { orderAcc, orderMethodAcc })

                return res.status(201).send({
                    success: true,
                    message: results
                });
            } catch (error) {
                return res.status(400).send({
                    success: false,
                    tasks: 'Error fetching task',
                    error: error.message
                }); 
            }
        } else {
            try {
                const allTasks = await TasksController.tasksOps.findAll();
                return res.send({
                    success: true,
                    tasks: JSON.parse(JSON.stringify(allTasks)).allTasks
                })
            } catch (error) {
                return res.status(400).send({
                    success: false,
                    tasks: 'Error fetching task',
                    error: error.message
                }); 
            }
        }
    }

    async postTasks (req, res) {
        try {
            const task = await TasksController.tasksOps.save(req.body);
            if(task.saved) {
                return res.status(200).send({
                    success: true,
                    task
                });
            } else {
                return res.status(422).send({
                    error: {
                        success: false,
                        message: 'You have entered an incorrect password'
                    }
                });
            }
        } catch (error) {
            return res.status(400).send({
                error: {
                    success: false,
                    message: 'Error creating task',
                    error
                }
            });
        }
    }
}
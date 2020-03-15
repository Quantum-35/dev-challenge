export class TasksController {
    async getTasks (req, res) {
        const {page, limit} = req.query;
        if(page || limit) {
            console.log('--->', limit);
            console.log('--->', page);
        }
        return res.send({ success: true })
    }
}
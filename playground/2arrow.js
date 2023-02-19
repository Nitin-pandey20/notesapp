const tasks ={
   tasks : [{
    work :'eat',
    completed: true},
    {
        work :'sleep',
        completed: true},
        {
            work :'code',
            completed: false}
        ],
        gettasktodo(){
            const incomplete =this.tasks.filter((task)=>{
                return task.completed ===false
            })
            return incomplete
        }
    }
    console.log(tasks.gettasktodo())
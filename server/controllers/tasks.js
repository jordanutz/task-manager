module.exports = {
   getTasks: async (req, res) => {
      const db = req.app.get('db');

      // try {
      //    let tasks = await db.get_tasks();
      //    console.log(tasks);
      // }
      // catch (err) {
      //    console.log(err);
      // }
   }, 
   addTask: async (req, res) => {
      console.log('hit')
      console.log(req.body)
   }
}
module.exports = {
   getTasks: async (req, res) => {
      const db = req.app.get('db');

      try {
         let tasks = await db.get_tasks([req.query.date]);
         res.status(200).send(tasks)
      }
      catch (err) {
         console.log(err);
      }
   }, 
   addTask: async (req, res) => {
      const db = req.app.get('db');
      const { title, date, category, priority } = req.body;
      
      try {
         const tasks = await db.add_task([title, category, date, 1, priority]);
         res.status(200).send(tasks)
      } catch (err) {
         console.log(err)
      }
   }
}
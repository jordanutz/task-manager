SELECT * FROM task
JOIN task_status ON task.status_id = task_status.id
JOIN category ON task.category_id = category.id
WHERE date_created = $1;
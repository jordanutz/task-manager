INSERT INTO task 
(title, category_id, date_created, status_id, priority)
VALUES
($1, $2, $3, $4, $5);

SELECT * FROM task WHERE date_created = $3;

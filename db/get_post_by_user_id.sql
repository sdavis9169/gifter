select u.email, g.title
from group_table g
INNER JOIN user_table u
on u.id = g.user_id

select email, title
from user_table, group_table
where user_table.id = group_table.user_id

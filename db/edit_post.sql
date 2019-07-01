UPDATE user_post set 
event_type=$2,
item_name=$3,
picture=$4,
link=$5
where group_id = $1
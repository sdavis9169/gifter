export const setUser = (user) => {
    return {
        type: "set_user",
        payload: user
    }
}

export const setGroup = (group) => {
    return {
        type: "set_group",
        payload: group
    }
}

export const setPosts = (posts) => {
    return{
        type: 'set_post',
        payload: posts
    }
}

export const updateGroup = (group) => {
    return {
        type: 'update_group',
        payload: group
    }
}
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
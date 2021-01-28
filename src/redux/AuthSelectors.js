import {createSelector} from "reselect";

export let getAuthUserId = (state) => state.authStore.id

/**
const getAuthUserIdSelector = createSelector(getAuthUserId, (user) => {
    return user.map(u => true)
})
 */

export let getEmail = (state) => state.authStore.email

export let getLoginName = (state) => state.authStore.email

export let getIsAuth = (state) => state.authStore.email

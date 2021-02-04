import axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'ccaf8add-c2f6-4151-acde-b5e4467764db'}
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}

export const followAPI = {

    unFollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },

    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    }
}



export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
    },

    login(email, password, rememberMe = false) {
        return instance.put(`auth/login`, {email, password, rememberMe});
    },

    logout() {
        return instance.delete(`auth/login`);
    }
}

export const profileAPI = {
    getUserById(userId) {
        return instance.get(`profile/${userId}`)
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },

    savePhoto(file) {
        let formData = new FormData();
        formData.append("image", file);
        return instance.put(`profile/photo`, formData, {
            headers: {"Content-Type" : "multipart/form-data"}
        })
    }
}


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: 1,
            photoUrl: 'https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg',
            followed: true,
            fullName: 'Sergei',
            status: 'I am a junior',
            location: {city: 'Stolin', country: 'Belarus'}
        },
        {
            id: 2,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThnFeuU1_A0gg1GCJOpy2tRoiKAhSW-622iw&usqp=CAU',
            followed: true,
            fullName: 'Dimych',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 3,
            photoUrl: 'http://knach.com/wp-content/uploads/GIMP/107.jpg',
            followed: false,
            fullName: 'Andrei',
            status: 'I am a student',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 4,
            photoUrl: 'https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg',
            followed: true,
            fullName: 'Sergei',
            status: 'I am too',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }

}
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;

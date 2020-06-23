
const USER_PROFILE_URL = 'https://api.github.com/users/supreetsingh247'
const USER_REPOS = 'https://api.github.com/users/supreetsingh247/repos'


export default () =>  (dispatch) => {
    dispatch(fetchUserData())
    dispatch(fetchUserRepo())
}

const fetchUserData = () => (dispatch) => {
    fetch(USER_PROFILE_URL)
    .then(response => response.json())
    .then(data => 
        dispatch({
            type: 'SET_USER_DATA',
            payload: data
        })
    );
}

const fetchUserRepo = () => (dispatch) => {
    fetch(USER_REPOS)
    .then(response => response.json())
    .then(data => {
       
        dispatch({
            type: 'SET_USER_REPOS',
            payload: data
        })
    }
    );
}
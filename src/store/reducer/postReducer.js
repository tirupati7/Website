import { STORE_ALL_POSTS, UPDATE_SINGLE_POST } from '../../constants';


const initialState = {
    posts: []
}

const postsReducer = (state = initialState, action) => {

    switch (action.type) {

        case STORE_ALL_POSTS:
            console.log('STORE_ALL_POSTS on reducer ::' + JSON.stringify(action.data));
            return {
                ...state, posts: action.data,
            };

        case UPDATE_SINGLE_POST:
            console.log('UPDATE_SINGLE_POST on reducer ' + JSON.stringify(action.data) );
            return {
                ...state, detailedPost: action.data,
            };

        default: return state;
    }
};

export default postsReducer;
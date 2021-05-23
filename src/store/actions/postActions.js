import { UPDATE_SINGLE_POST, STORE_ALL_POSTS } from '../../constants';

export const storeAllPosts = (posts) => {
    console.log('storeAllPosts action is called');
    return {
        type: STORE_ALL_POSTS,
        data: posts
    };
};

export const updateSinglePost = (post) => {
    return {
        type: UPDATE_SINGLE_POST,
        data: post
    }
}
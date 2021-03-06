const SET_POST_BY_ID = (state, payload) => {

    const post = state.posts.find(post => {
        if (post._id === payload.postId) return post
    })

    Object.assign(state.post, post)
}

const TOGGLE_MENU = (state, payload) => {
    Object.assign(state.menu, { status: payload.status })
}

const SET_DATA_VIEW = (state, payload) => {
    state.postsView = payload.postsView
}

const COUNT_VIEW = (state, payload) => {

    const posts = state.posts.map(post => {
        if (post._id === payload.postId) post.views = post.views + 1
        return post
    })

    state.posts = posts
}

const SET_MOST_READ = (state, payload) => {
    state.mostRead = [...payload.positions]
}

const ADD_TO_HISTORY = (state, payload) => {

    const post = state.posts.find(post => {
        if (post && post._id === payload.postId) return post
    })

    if (post) {
        post.time = payload.time
        state.history.push(post)
    }


}

export default {
    SET_POST_BY_ID,
    TOGGLE_MENU,
    SET_DATA_VIEW,
    COUNT_VIEW,
    SET_MOST_READ,
    ADD_TO_HISTORY
}
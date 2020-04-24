import { setScope, createComponent, getState, watch, mapActions, render } from 'r9x_js'

import HTML from './appPosts.template'
import CSS from './appPosts.styles'

export default () => {

    watch(['SET_DATA_VIEW'], () => [rerender])

    setScope(() => [
        name,
        template,
        children,
        hooks,
        listeners,
        methods
    ])


    const name = () => 'app-posts'

    const template = () => {
        return { HTML, CSS }
    }

    const children = () => []

    const hooks = () => [
        beforeOnRender,
        afterOnRender
    ]

    const listeners = () => []

    const methods = () => [
        ...mapActions(),
    ]

    const beforeOnRender = () => [setPostView]
    const afterOnRender = () => []

    const setPostView = () => {
        const state = getState()
        const [, , setDataView] = mapActions()
        const [, , category] = window.location.hash.split('/')
        const postsView = getPostByCategory(category)

        if (Array.isArray(postsView) && postsView.length) {
            setDataView({ postsView })
            return
        }

        setDataView({ postsView: state.posts })

    }

    const getPostByCategory = (category) => {
        const state = getState()
        return state.posts.filter(post => {
            if (hasCategory(category, post.categories)) return post
        })
    }

    const hasCategory = (category, categories) => {
        return categories.some(cat => {
            return category === cat
        })
    }

    const rerender = () => {
        render('app-posts', getState())
    }

    return createComponent()
}
import { setScope, createComponent, getState, watch, mapActions, render } from 'r9x_js'

import HTML from './appMostRead.template'
import CSS from './appMostRead.styles'

export default () => {

    watch(['SET_MOST_READ'], () => [rerender])

    setScope(() => [
        name,
        template,
        children,
        hooks,
        listeners,
        methods
    ])


    const name = () => 'app-most-read'

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

    const beforeOnRender = () => [calcMostRead]
    const afterOnRender = () => []

    const calcMostRead = () => {
        const state = getState()
        const [, , , , setMostRead] = mapActions()
        const [positionA, positionB, positionC, positionD] = state.posts.sort((prevPost, nextPost) => {
            if (prevPost.views > nextPost.views) return 1
            if (prevPost.views < nextPost.views) return -1
            return 0;
        }).reverse()

        setMostRead({ positions: [positionA, positionB, positionC, positionD] })

    }

    const rerender = () => {
        render('app-most-read', getState())
    }

    return createComponent()
}
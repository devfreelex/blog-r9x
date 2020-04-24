import { setScope, createComponent, getState, watch, mapActions, render } from 'r9x_js'

import HTML from './appMostRead.template'
import CSS from './appMostRead.styles'

export default () => {

    watch([], () => [])

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

    const beforeOnRender = () => []
    const afterOnRender = () => []

    const rerender = () => {
        render('app-most-read', getState())
    }

    return createComponent()
}
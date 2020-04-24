import { setScope, createComponent, getState, watch, mapActions, render } from 'r9x_js'

import HTML from './appHistory.template'
import CSS from './appHistory.styles'

export default () => {

    watch(['TOGGLE_MENU'], () => [rerender])

    setScope(() => [
        name,
        template,
        children,
        hooks,
        listeners,
        methods
    ])


    const name = () => 'app-history'

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
        render('app-history', getState())
    }

    return createComponent()
}
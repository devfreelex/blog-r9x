import { setScope, createComponent, getState, watch, mapActions } from 'r9x_js'

import HTML from './appCategory.template'
import CSS from './appCategory.styles'

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


    const name = () => 'app-category'

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
        render('app-category', getState())
    }

    return createComponent()
}
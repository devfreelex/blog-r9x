import { setScope, createComponent, getState, watch, mapActions } from 'r9x_js'

import HTML from './appHelloWorld.template'
import CSS from './appHelloWorld.styles'

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


    const name = () => 'app-hello-world'

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
        render('app-hello-world', getState())
    }

    return createComponent()
}
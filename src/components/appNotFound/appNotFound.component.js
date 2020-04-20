import { setScope, createComponent, getState, watch, mapActions } from 'r9x_js'

import HTML from './appNotFound.template'
import CSS from './appNotFound.styles'

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


    const name = () => 'app-not-found'

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

    const renderDelivery = () => {
        render('app-not-found', getState())
    }

    return createComponent()
}
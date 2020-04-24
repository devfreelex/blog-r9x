import { setScope, createComponent, getState, watch, mapActions } from 'r9x_js'

import HTML from './appHeader.template'
import CSS from './appHeader.styles'

import appMenu from '../appMenu/appMenu.component'

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


    const name = () => 'app-header'

    const template = () => {
        return { HTML, CSS }
    }

    const children = () => [appMenu]

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
        render('app-header', getState())
    }

    return createComponent()
}
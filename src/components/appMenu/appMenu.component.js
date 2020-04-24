import { setScope, createComponent, getState, watch, mapActions, render } from 'r9x_js'

import HTML from './appMenu.template'
import CSS from './appMenu.styles'

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


    const name = () => 'app-menu'

    const template = () => {
        return { HTML, CSS }
    }

    const children = () => []

    const hooks = () => [
        beforeOnRender,
        afterOnRender
    ]

    const listeners = () => [onClickMenuButton, onClickMenuItem]

    const methods = () => [
        ...mapActions(),
    ]

    const beforeOnRender = () => []
    const afterOnRender = () => []

    const onClickMenuButton = ({ elm, on, query }, { toggleMenu }) => {
        const buttonMenu = query('.menu-button', elm)
        on('click', buttonMenu, (e) => {
            const { menu } = getState()
            toggleMenu({ status: !menu.status })
        })
    }

    const onClickMenuItem = ({ elm, on, query }, { toggleMenu }) => {
        const menuItem = query('.menu-item', elm)
        on('click', menuItem, (e) => toggleMenu({ status: false }))
    }

    const rerender = () => {
        render('app-menu', getState())
    }

    return createComponent()
}
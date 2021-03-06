import { setScope, createComponent, getState, watch, mapActions } from 'r9x_js'

import '../../assets/reset.css'
import '../../assets/styles.css'

import appHeader from '../appHeader/appHeader.component'
import appCategory from '../appCategory/appCategory.component'

import HTML from './appMain.template'
import CSS from './appMain.styles'


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


    const name = () => 'app-main'

    const template = () => {
        return { HTML, CSS }
    }

    const children = () => [appHeader, appCategory]

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
        render('app-main', getState())
    }

    return createComponent()
}
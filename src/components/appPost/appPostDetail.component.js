import { setScope, createComponent, getState, watch, mapActions, render } from 'r9x_js'
import moment from 'moment'
import 'moment/locale/pt-br';

import HTML from './appPostDetail.template'
import CSS from './appPostDetail.styles'


export default () => {

    watch(['SET_POST_BY_ID'], () => [rerender])

    setScope(() => [
        name,
        template,
        children,
        hooks,
        listeners,
        methods
    ])


    const name = () => 'app-post'

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

    const beforeOnRender = () => [getPostById]
    const afterOnRender = () => []

    const getPostById = () => {
        const hash = window.location.hash
        const [, , postId] = hash.split('/')
        const [setPostById, , , countView, , addToHistory] = mapActions()
        const time = moment(time).locale('pt-br').format('llll')
        setPostById({ postId })
        countView({ postId })
        addToHistory({ postId, time })
    }

    const rerender = () => {
        render('app-post', getState())
    }

    return createComponent()
}
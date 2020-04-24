import { dispatch } from 'r9x_js'

const setPostById = (payload) => {
    dispatch('SET_POST_BY_ID', payload)
}

const toggleMenu = (payload) => {
    dispatch('TOGGLE_MENU', payload)
}

const setDataView = (payload) => {
    dispatch('SET_DATA_VIEW', payload)
}

const countView = (payload) => {
    dispatch('COUNT_VIEW', payload)
}

export default {
    setPostById,
    toggleMenu,
    setDataView,
    countView
}
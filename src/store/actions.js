import { dispatch } from 'r9x_js'


const toggleMenu = (payload) => {
    dispatch('TOGGLE_MENU', payload)
}

export default {
    toggleMenu,
}
const TOGGLE_MENU = (state, payload) => {
    state.menu.isVisible = !payload.menu.isVisible
}

export default {
    TOGGLE_MENU
}
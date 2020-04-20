import { setStore } from 'r9x_js'
import state from './state'
import actions from './actions'
import mutations from './mutations'

const storeFactory = () => {

    const init = () => {
        setStore({
            state,
            actions,
            mutations
        })
    }

    return {
        init
    }
}

export default storeFactory()
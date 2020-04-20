import { appFactory } from 'r9x_js'

import appMain from './components/appMain/appMain.component'
import routesModule from './routes/routes.module'
import storeModule from './store/store.module'

const App = appFactory()

App
    .use('components', { appMain })
    .use('routes', routesModule)
    .use('store', storeModule)
    .init()
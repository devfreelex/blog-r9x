import appHelloWorld from '../components/appHelloWolrd/appHelloWorld.component'
import appNotFound from '../components/appNotFound/appNotFound.component'

export default [
    { title: 'Home', hashExp: /(#\/home)$/, component: appHelloWorld },
    // { title: 'Produto', hashExp: /(#\/produto\/\w+)$/, component: appDetailProduct },
    // { title: 'entrega', hashExp: /(#\/entrega)$/, component: appDelivery },
    // { title: 'Cart', hashExp: /(#\/cesta)$/, component: appCart },
    { title: 'Not Found', hashExp: /^[#\/404]$/, component: appNotFound }
]
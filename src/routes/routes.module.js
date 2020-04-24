import appNotFound from '../components/appNotFound/appNotFound.component'
import appPosts from '../components/appPosts/appPosts.component'
import appPostDetail from '../components/appPost/appPostDetail.component'
import appMostRead from '../components/appMostRead/appMostRead.component'
import appHistory from '../components/appHistory/appHistory.component'

export default [
    { title: 'Home', hashExp: /(#\/home)$/, component: appPosts },
    { title: 'Post', hashExp: /(#\/post\/\w+)$/, component: appPostDetail },
    { title: 'Category', hashExp: /(#\/categories\/\w+)$/, component: appPosts },
    { title: 'Cart', hashExp: /(#\/most-read)$/, component: appMostRead },
    { title: 'Cart', hashExp: /(#\/history)$/, component: appHistory },
    // { title: 'Cart', hashExp: /(#\/cesta)$/, component: appCart },
    { title: 'Not Found', hashExp: /^[#\/404]$/, component: appNotFound }
]
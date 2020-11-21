import {lazy} from 'react'
import {
    PicLeftOutlined,
    UnorderedListOutlined,
    EnvironmentOutlined,
    SafetyCertificateOutlined,
    SwapRightOutlined,
    RadiusBottomleftOutlined,
    PicCenterOutlined,
    SettingOutlined,
    HomeOutlined
    
} from  '@ant-design/icons'


const menu = [
    {
        path:'/home',
        title:'系统首页',
        icon:<HomeOutlined />,
        component:lazy(() =>import('./../views/home/Index')),
    },
    {
        path:'/bannermanager',
        title:'轮播图管理',
        icon:<PicLeftOutlined />,
        redirect:'/bannermanager/list',
        children:[
            {
                path:'/bannermanager/list',
                title:'轮播图列表',
                icon:<UnorderedListOutlined />,
                component:lazy(() =>import('./../views/banner/Index'))
            }
        ]
    },
    {
        path:'/navigatormanager',
        title:'快捷导航管理',
        icon:<PicLeftOutlined />,
        redirect:'/navigatormanager/list',
        children:[
            {
                path:'/navigatormanager/list',
                title:'导航列表',
                icon:<EnvironmentOutlined />,
                component:lazy(()=>import('../views/navigator/List'))
                
            },
            {
                path:'/navigatormanager/category',
                title:'导航分类',
                icon:<SafetyCertificateOutlined />,
                component:lazy(()=>import('../views/navigator/Category'))
            },
            {
                path:'/navigatormanager/hlist',
                title:'首页导航',
                icon:<SwapRightOutlined />,
                component:lazy(()=>import('../views/navigator/HomeList'))
            },
        ]
    },
    {
        path:'/seckillmanager',
        title:'秒杀管理',
        icon:<PicLeftOutlined />,
        redirect:'/seckillmanager/list',
        children:[
            {
                path:'/seckillmanager/list',
                title:'首页秒杀列表',
                icon:<RadiusBottomleftOutlined />,
                component:lazy(() =>import('../views/seckill/List'))
            },
        ]
    },
    {
        path:'/usermanager',
        title:'用户管理',
        icon:<PicLeftOutlined />,
        redirect:'/usermanager/list',
        children:[
            {
                path:'/usermanager/list',
                title:'用户列表',
                icon:<PicCenterOutlined />,
                component:lazy(()=>import('../views/user/List'))
            }
        ]
    },
    {
        path:'/setting',
        title:'设置',
        icon:<SettingOutlined />,
        component:lazy(()=>import('../views/setting/Index'))
    }
]


export default menu
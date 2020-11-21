import React,{useState, useEffect} from 'react'
import {NavLink,withRouter,useLocation} from 'react-router-dom'
import {Menu} from 'antd'
import menu from '../router/menu'
const {SubMenu} = Menu


const SideMenu = (props) => {
    let {pathname} = useLocation()
    const path = `/${pathname.split('/')[1]}`
    pathname=pathname==='/'?'/home':pathname

    
    const rootSubmenuKeys = menu.map(item=>(item.path))
    const [openKeys, setOpenKeys] = useState([path]);
    const [selectedKeys,setSelectedKeys] = useState([pathname])
    useEffect(()=>{
        setSelectedKeys([pathname])
    },[pathname])
    const onOpenChange = keys => {
        //设置单开
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          setOpenKeys(keys);
        } else {
          setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
        //设置selectedKeys保持住选中状态
       
    };
    const clickHandler = ({ key })=>{
        setSelectedKeys([key])
       
       
    }
    const renderMenu = (menu)=>{
        
        return menu.map((item,index)=>{
           if(item.children){
                return item.meta&&item.meta.hidden?'':(
              <SubMenu title={item.title}  icon={item.icon} key={item.path} theme="dark" >
                        {
                            item.children.map((value,index)=>{
                                    if(value.children){
                                        return renderMenu(item.children)
                                    }
                                    else{
                                        return (<Menu.Item  key={value.path} icon={value.icon} >
                                            <NavLink to={value.path}>{value.title}</NavLink>                                          >
                                        </Menu.Item>)
                                    }
                                }
                            )      
                        }
                    </SubMenu>                  
                )
            }
            else{
                return item.meta&&item.meta.hidden?'':(<Menu.Item  key={item.path} icon={item.icon} >
                            <NavLink to={item.path} key={item.path}>{item.title}</NavLink>
                        </Menu.Item>)
            }
        })
    }
    return (
            <Menu 
            theme="dark" 
            mode="inline" 
            style={{fontSize:'12px'}} 
            openKeys={openKeys}
            selectedKeys={selectedKeys}
            onOpenChange={onOpenChange} 
            onClick={clickHandler}
            >
                {
                    renderMenu(menu)  
                } 
            </Menu>
    )
}

export default withRouter(SideMenu) 

import React from 'react'
import { Layout} from 'antd'
import {connect} from 'react-redux'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  } from '@ant-design/icons'
import BreadCrumb from './BreadCrumb'
import {toggle} from '../store/actionCreator'
const {Header} = Layout

const mapStateToProps = state=>({
    collapsed:state.collapsed
})

const mapDispatchToProps={toggle}

function MainHeader(props) {
    const toggleColla = ()=>{
        props.toggle()
    }
    return (
        <>  
            <Header className="site-layout-background" style={{ padding: 0,display:"flex",alignItems:"center"}}>
                {props.collapsed ? 
               <MenuUnfoldOutlined style={{ fontSize: '24px'}} className="trigger" /> : 
               <MenuFoldOutlined style={{ fontSize: '24px' }} className="trigger" onClick={toggleColla}/>}
                
                <div style={{flex:1,marginLeft:'20px'}}><BreadCrumb /></div>
                
            </Header>
           
        </>

    )
}



export default connect(mapStateToProps,mapDispatchToProps)(MainHeader)

import React from 'react'
import { Layout} from 'antd'
import {connect} from 'react-redux'
import actionCreators  from '../store/actionCreator'
import RouterView from '../router/RouterView'


import SideMenu from '../components/SideMenu'
import MainHeader from '../components/MainHeader'
import logo from '../logo.svg'
import '../css/index.css'

const {Sider, Content } = Layout;
const mapStateToProps = (state)=>(
  {
    collapsed:state.getIn(['sider_reducer','collapsed'])
  }
)
const mapDispatchToProps = actionCreators

@connect(mapStateToProps,mapDispatchToProps)
class Home extends React.Component {
  toggle = ()=>{
    this.props.toggle()
  }
  render() {
    return (
      <Layout >
        <Sider trigger={null} collapsible collapsed={this.props.collapsed} >
          <div className="logo"><img src={logo} alt="" style={{width:30,height:30,marginRight:this.props.collapsed?0:20 }}/>{this.props.collapsed?'':'jd_admin'}</div>
          <SideMenu />
        </Sider>
        <Layout className="site-layout">
          {/* <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header> */}
          <MainHeader />
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
           
              <RouterView />
           
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Home
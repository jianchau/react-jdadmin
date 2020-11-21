import { Link, withRouter } from 'react-router-dom';
import { Breadcrumb} from 'antd';

import menu from '../router/menu'
const breadcrumbNameMap = {}

const renderBreadcrumbNameMap = (menu)=>{
    menu.forEach(item=>{
        if(item.children){
            breadcrumbNameMap[item.path] = item.title
            renderBreadcrumbNameMap(item.children)
        }
        else{
            breadcrumbNameMap[item.path] = item.title
        }
    })
}

renderBreadcrumbNameMap(menu)


const BreadCrumb = withRouter(props => {

  const { location } = props;
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">首页</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  return (
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
  )
})

export default BreadCrumb
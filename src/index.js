import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {ConfigProvider} from 'antd'
import zhCN from 'antd/lib/locale/zh_CN';

import App from './App'
import store from './store'
ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>,
  document.getElementById('root')
);
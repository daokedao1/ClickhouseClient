import React, { Component } from 'react';
import Routes from './routes';
import DocumentTitle from 'react-document-title';
import SiderCustom from './components/SiderCustom';
import HeaderCustom from './components/HeaderCustom';
import { Layout } from 'antd';


const { Content, Footer } = Layout;

class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
          collapsed: false,
          title: '',
      };
    }
    componentWillMount() {

        this.getClientWidth();
        window.onresize = () => {
            console.log('屏幕变化了');
            this.getClientWidth();
        };
    }
    componentDidMount() {

    }
    getClientWidth = () => {
        // 获取当前浏览器宽度并设置responsive管理响应式
        // const { setAlitaState } = this.props;
        const clientWidth = window.innerWidth;

        // setAlitaState({ stateName: 'responsive', data: { isMobile: clientWidth <= 992 } });
        // receiveData({isMobile: clientWidth <= 992}, 'responsive');
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        const { title } = this.state;
        const { auth = { data: {} }, responsive = { data: {} } } = this.props;

        return (
            <DocumentTitle title={title}>
                <Layout>
                    <Layout style={{ flexDirection: 'column' }}>
                        <HeaderCustom
                            toggle={this.toggle}
                            collapsed={this.state.collapsed}
                            user={auth.data || {}}
                        />
                        <Content style={{ margin: '0 0px', overflow: 'initial', flex: '1 1 0' }}>
                            <Routes auth={auth} />
                        </Content>
                        {/* <Footer style={{ textAlign: 'center' }}>
                          
                        </Footer> */}
                    </Layout>
                </Layout>
            </DocumentTitle>
        );
    }
}

export default App;

import React from 'react';
import { Tree,Input,Tabs,Icon,Modal,Button} from 'antd';
import {db_query} from '../../axios';
import './index.less';
import Acedi from './ace';
const { TabPane } = Tabs;
const { Search } = Input;
const { TreeNode } = Tree;
const panes = [
    { title: 'student@ca', content: 'Content of Tab 1', key: '1' },
    { title: 'user@ca', content: 'Content of Tab 2', key: '2' },
    {
        title: 'Tab 3',
        content: 'Content of Tab 3',
        key: '3',
        closable: false
    }
];
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'default',
            password:'5hc1Zd24',
            treeData: [
                { title: '数据库1', key: '0' },
                { title: '数据库2', key: '1' },
                { title: '数据库3', key: '2', isLeaf: true }
            ],
            activeKey: panes[0].key,
            panes,
            clientHeight:window.innerHeight-65,
            newClckModalVisible:false
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


        let param={
            user: 'default',
            add_http_cors_header: 1,
            log_queries: 1,
            output_format_json_quote_64bit_integers: 1,
            database: '',
            result_overflow_mode: 'throw',
            readonly: 1,
            password: '5hc1Zd24',
            query:'SHOW DATABASES'
        };
        db_query(param).then((res)=>{
            console.log(res);

        });
    }
    getClientWidth = () => {
        // 获取当前浏览器宽度并设置responsive管理响应式
        // const { setAlitaState } = this.props;
        const clientWidth = window.innerWidth;
        const clientHeight = window.innerHeight-65;
        this.setState({
            clientHeight:clientHeight
        });

    };
    onLoadData = treeNode =>
        new Promise(resolve => {
            if (treeNode.props.children) {
                resolve();
                return;
            }
            setTimeout(() => {
                treeNode.props.dataRef.children = [
                    { title: 'Child Node', key: `${treeNode.props.eventKey}-0` },
                    { title: 'Child Node', key: `${treeNode.props.eventKey}-1` }
                ];
                this.setState({
                    treeData: [...this.state.treeData]
                });
                resolve();
            }, 1000);
        });
    renderTreeNodes = data =>
        data.map(item => {
            if (item.children) {
                return (
                    <TreeNode title={item.title} key={item.key} dataRef={item} icon={ <Icon type="container" style={{color:'#52c41a'}} /> }>
                        {this.renderTreeNodes(item.children)}
                    </TreeNode>
                );
            }
            return <TreeNode key={item.key} {...item} dataRef={item} icon={ <Icon type="container" />}/>;
        });
    onChange = activeKey => {
        this.setState({ activeKey });
    };
    complete(editor){

    }
    onChange(v){
        console.log(v);
    }
    onChangeNewClickVisible(){
        this.setState({
            newClckModalVisible:!this.state.newClckModalVisible
        });
    }
    onSaveDBUserInfo(){
        console.log(2);

    }
    render(){

        return (
            <div className="box" style={{height:this.state.clientHeight}}>

                <div className="left">
                    <div className='left-wrap'>
                        <Search
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                            style={{ width: 170 }}
                        />
                        <Tree showIcon loadData={this.onLoadData}>
                            {this.renderTreeNodes(this.state.treeData)}
                        </Tree>
                    </div>

                </div>
                <div className="content">
                    <Tabs
                        activeKey={this.state.activeKey}
                        style={{width:'100%'}}
                        type="editable-card"
                        hideAdd
                        onChange={this.onChange}
                    >
                        {this.state.panes.map(pane => (
                            <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                                <Acedi style={{height:this.state.clientHeight}} title={pane.title}/>
                            </TabPane>
                        ))}
                    </Tabs>
                </div>
                <div className="right">
                    <div>

                    </div>
                </div>
                <Modal
                    visible={this.state.newClckModalVisible}
                    title="Title"
                    onOk={this.onSaveDBUserInfo.bind(this)}
                    onCancel={this.onChangeNewClickVisible.bind(this)}

                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        );
    }
}

export default Main;

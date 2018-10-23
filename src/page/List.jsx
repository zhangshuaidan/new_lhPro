import React, { Component } from 'react';
import { NavBar, Icon, Tabs } from 'antd-mobile';
import More from '../component/more';
// import Myimg from "../img_icon.png";
import Star from "../icon_star.png";
import axios from "axios";
import { get } from "../util/storage";
const tabs = [
    { title: '大家都说好' },
    { title: <div className="cennter_title"><span className="line"></span><div>享受低额利息</div> <span className="line"></span></div> },
    { title: '高额度产品' },
];
class List extends Component {

    state = {
        type1:[],
        type2:[],
        type3:[]
    }

    goNextPage = (id,url)=>{
        axios.post('http://47.94.20.95:8081/product/nickProductUrl',
         { "productId" :id, 'uuid': get('uuid')}).then(data=>{
            window.location.href=url
         })
    
    }


    componentDidMount(){
        // axios.post('http://47.93.220.206:8082/product/getProductInfoList')
        axios.post('http://47.94.20.95:8081/product/getProductInfoList')
        .then(res=> { 
            if (res.data.messages === 'success') {
               const { data } = res.data
                const { type1List, type2List, type3List } =data;
                this.setState({
                    type1: type1List,
                    type2: type2List,
                    type3: type3List
                })
            }
        })
    }


    renderStar=(v)=>{
        let arr =[];
        for (let i=0;i<v;i++){
            arr.push(<img src={Star} alt="star"  key = {i}/>)
        }
        return arr;
    }
    render() {
        // console.log(this.state)
        return (
            <div className="main_wrapper">
                <div className="nav_wrapper">
                    <NavBar
                        mode="light"
                        // icon={<Icon type="left" style={{ 'color': '#000000' }} />}
                        // onLeftClick={() => this.props.history.goBack()  }
                    >51飞借</NavBar>
                </div>
                <div className="tab_wrapper">
                    <Tabs tabs={tabs}
                        initialPage={0}
                        // onChange={(tab, index) => { console.log('onChange', index, tab); }}
                        // onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                        {/* 大家都说好 */}
                        <div style={{backgroundColor: '#fff' }}>
                            {
                                this.state.type1.map((v,i)=>(
                                    <div className="list_main" key={v.id} >
                                        <div className="list_content">

                                            <div className="list_top">
                                                <div>
                                                    <img src={v.logo} alt="icon" />
                                                    <div className="title">{v.name}
                                                        {this.renderStar(v.star)}
                                                    </div>
                                                </div>
                                                <div className="count">申请人数:{v.applyNum}</div>
                                            </div>
                                            
                                            <div className="list_detail">
                                                <div className="left">
                                                    <div className="title">可贷额度</div>
                                                    <div className="account">{v.low}-{v.up}</div>
                                                </div>
                                                <div className="center">
                                                    <div className="title">{v.dRate ? '日利率' : (v.mRate ? '月利率' : '年利率')}</div>
                                                    <div className="account">{v.dRate ? v.dRate : (v.mRate ? v.mRate : v.yRate)}</div>
                                                </div>
                                                <div className="apply_action">

                                                    <div onClick={() => this.goNextPage(v.id, v.url)}> 立即申请 </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="list_line"></div>
                                        <div className="footer_txt">{v.desc}</div>
                                    </div>
                                ))
                            }
                        </div>

                        {/* 享受低额利息 */}
                        <div style={{ backgroundColor: '#fff' }}>
                            {
                                this.state.type2.map((v, i) => (
                                    <div className="list_main" key={v.id} >
                                        <div className="list_content">

                                            <div className="list_top">
                                                <div>
                                                    <img src={v.logo} alt="icon" />
                                                    <div className="title">{v.name}
                                                        {this.renderStar(v.star)}
                                                    </div>
                                                </div>
                                                <div className="count">申请人数:{v.applyNum}</div>
                                            </div>

                                            <div className="list_detail">
                                                <div className="left">
                                                    <div className="title">可贷额度</div>
                                                    <div className="account">{v.low}-{v.up}</div>
                                                </div>
                                                <div className="center">
                                                    <div className="title">{v.dRate ? '日利率' : (v.mRate ? '月利率' : '年利率')}</div>
                                                    <div className="account">{v.dRate ? v.dRate : (v.mRate ? v.mRate : v.yRate)}</div>
                                                </div>
                                                <div className="apply_action">

                                                    <div onClick={() => this.goNextPage(v.id, v.url)}> 立即申请 </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="list_line"></div>
                                        <div className="footer_txt">{v.desc}</div>
                                    </div>
                                ))
                            }
                        </div>

                        {/* 高额度产品 */}
                        <div style={{ backgroundColor: '#fff' }}>
                            {
                                this.state.type3.map((v, i) => (
                                    <div className="list_main" key={v.id} >
                                        <div className="list_content">

                                            <div className="list_top">
                                                <div>
                                                    <img src={v.logo} alt="icon" />
                                                    <div className="title">{v.name}
                                                        {this.renderStar(v.star)}
                                                    </div>
                                                </div>
                                                <div className="count">申请人数:{v.applyNum}</div>
                                            </div>

                                            <div className="list_detail">
                                                <div className="left">
                                                    <div className="title">可贷额度</div>
                                                    <div className="account">{v.low}-{v.up}</div>
                                                </div>
                                                <div className="center">
                                                    <div className="title">{v.dRate ? '日利率' : (v.mRate ? '月利率' : '年利率')}</div>
                                                    <div className="account">{v.dRate ? v.dRate : (v.mRate ? v.mRate : v.yRate)}</div>
                                                </div>
                                                <div className="apply_action">

                                                    <div onClick={() => this.goNextPage(v.id, v.url)}> 立即申请 </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="list_line"></div>
                                        <div className="footer_txt">{v.desc}</div>
                                    </div>
                                    
                                ))
                            }
                        </div>
                    </Tabs>
                </div>
                    <More more={false} />
            </div>
        );
    }
}

export default List;

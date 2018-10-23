import React, { Component } from 'react';
import { NavBar, Icon, Toast } from 'antd-mobile';
import More from '../component/more';
class Home extends Component {
     state = {
    iFrameHeight: 0
    }


    componentDidMount(){
        Toast.loading('Loading...', 0);
        this.setState({
            iFrameHeight: document.documentElement.clientHeight || document.body.clientHeight
        })
        
    }

    render() {
        return (
            <div className="main_wrapper">
                <div className="nav_wrapper">
                    <NavBar
                        mode="light"
                        // icon={<Icon type="left" style={{ 'color': '#000000' }} />}
                        // onLeftClick={() => console.log('onLeftClick')}
                    >叮当白卡</NavBar>
                </div>
        
                {/* 这里是Home */}
                <iframe src="http://reg.realzea.cn/?aid=457" 
                    frameBorder="0"
                    //  scrolling="no"
                    scrolling="auto"
                    onLoad={() => {
                        // this.setState({
                        //     iFrameHeight: window.screen.height-102  + 'px'
                        // });
                        Toast.hide()
                    }}
                    // height={this.state.iFrameHeight} 
                     width="100%"
                    height={this.state.iFrameHeight+'px'}
                    frameBorder="0" />
                <More more={ true }/>
            </div>
        );
    }
}

export default Home;

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
                        icon={<Icon type="left" style={{ 'color': '#000000' }} />}
                        onLeftClick={() => console.log('onLeftClick')}
                    >宝贝借呗</NavBar>
                </div>
        
                {/* 这里是Home */}
                <iframe src="https://tui.weidaibaobei1.com/#/spread?bcode=Go5Vff7vpqx" 
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

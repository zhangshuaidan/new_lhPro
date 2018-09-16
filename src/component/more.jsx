import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import { Modal, Toast } from 'antd-mobile';
import copy from 'copy-to-clipboard';

function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}
class More extends Component {
    state = {
        modal1: false,
        modal2: false,
    }
    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
        });
    }
    onClose = key => () => {
        this.setState({
            [key]: false,
        });
        this.copyName();
    }
    onCloseOnly = key => () => {
        this.setState({
            [key]: false,
        });
    }
    copyName = () =>{
        copy('飞司令')
      
        Toast.success('复制成功,快去粘贴!!!', 2);
    }

    onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
            e.preventDefault();
        }
    }
    render() {
        return (
            <div className="more_wrapper"> 
                <Modal
                    visible={this.state.modal1}
                    transparent
                    maskClosable={true}
                    onClose={this.onCloseOnly('modal1')}
                    footer={[{ text: '复制公众号名称', onPress: () => {  this.onClose('modal1')(); } }]}
                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                >
                    <div>
                        <div className="more_title">
                            关注微信公众号：飞司令      可以获得更多产品和帮助
                        </div>

                        <div className="focus_me">
                            关注我,不迷路
                        </div>
                    </div>
                </Modal>
            {
                    this.props.more && (<div>
                        <Link to="List" >
                            查看更多产品
                   </Link>
                    </div>)
            }
                
              
                <div onClick={this.showModal('modal1')}>快速咨询</div>
            </div>
        );
    }
}

export default More;

import React, { Component } from 'react';
import styles from './index.less';

interface SnowProps {
  isShow?: boolean;
}

interface SnowState {}

class Index extends Component<SnowProps, SnowState> {
  private static defaultProps = {
    isShow: true,
  };

  constructor(props: any, context: any) {
    super(props, context);
  }

  componentDidMount() {
    let { isShow } = this.props;
    if (isShow) {
      this.getOrCreateSnowContainer();
      this.loadScript('//libs.baidu.com/jquery/2.0.0/jquery.min.js', () =>
        this.loadScript('//cdn.hocgin.top/snowy.js'),
      );
    }
  }

  getOrCreateSnowContainer() {
    let sc = document.querySelector('.snow-container');
    if (sc != null) {
      return sc;
    }
    let divEl = document.createElement('div');
    divEl.className += 'snow-container';
    divEl.style.position = 'fixed';
    divEl.style.top = '0';
    divEl.style.left = '0';
    divEl.style.width = '100vw';
    divEl.style.height = '100vh';
    divEl.style.pointerEvents = 'none';
    divEl.style.zIndex = '100001';
    document.body.appendChild(divEl);
    return divEl;
  }

  loadScript(url: string, onload?: any) {
    let script = document.createElement('script');
    script.async = true;
    script.onload = onload;
    script.src = url;
    document.head.appendChild(script);
  }

  render() {
    let { children } = this.props;
    return <>{children}</>;
  }
}

export default Index;

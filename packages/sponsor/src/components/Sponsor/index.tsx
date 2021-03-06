import React from 'react';
import classnames from 'classnames';
import styles from './index.less';

const QrCode = (props: any) => {
  let { url, text = '' } = props;

  return (
    <div className={styles.qrcode}>
      <img className={styles.img} src={url} alt={text} />
      <span>{text}</span>
    </div>
  );
};

const HeartFilled = (props: any) => {
  return (
    <div className={props.className}>
      <svg
        role="img"
        viewBox="0 0 1205 1024"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M602.435622 1023.943683C598.795944 1023.943683 595.131449 1022.95075 591.903993 1020.929079 47.519856 679.58468 5.380932 420.335577 2.465054 371.820963 0.82582 358.316528 0 345.270684 0 333.126883 0 149.439827 148.111451 0 330.140841 0 439.560038 0 541.067068 54.667767 602.306026 144.623896 663.56015 54.669143 765.093376 0 874.486378 0 1056.541963 0 1204.639627 149.439827 1204.639627 333.126883 1204.639627 344.838258 1203.955807 356.834703 1202.549572 369.803423 1200.340946 419.61257 1160.861473 675.83054 613.01826 1020.901537 609.792181 1022.938357 606.127689 1023.943683 602.435622 1023.943683ZM327.191473 242.513144 327.191473 236.782124C327.191473 211.325797 311.27445 189.453118 288.817787 180.695944 219.824883 195.615991 165.502589 249.936508 150.579953 318.928447 159.321083 341.343772 181.136255 357.308937 206.664661 357.308937L210.040872 357.308937C222.388624 302.009319 268.071576 257.714282 327.191473 242.513144L327.191473 242.513144Z"
        />
      </svg>
    </div>
  );
};

interface SponsorProps {
  alipay?: string;
  wechat?: string;
}

interface SponsorState {
  open: boolean;
}

class Index extends React.Component<SponsorProps, SponsorState> {
  private static defaultProps = {
    alipay: 'https://via.placeholder.com/125',
    wechat: 'https://via.placeholder.com/125',
  };

  state = {
    open: false,
  };

  render() {
    let { wechat, alipay } = this.props;
    let { open } = this.state;
    return (
      <div className={styles.sponsor}>
        {!open && (
          <div className={styles.sponsorBtn} onClick={this.onClick}>
            <HeartFilled className={styles.heart} /> <span>赞助</span>
          </div>
        )}
        {open && (
          <div>
            <QrCode url={alipay} text="支付宝" />
            <QrCode url={wechat} text="微信" />
          </div>
        )}
      </div>
    );
  }

  onClick = () => {
    this.setState(({ open }) => ({ open: !open }));
  };
}

export default Index;

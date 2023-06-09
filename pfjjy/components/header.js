

export default function Header() {
    return (
        <div className="header">
            <div className="inner">
                <div>
                    <a href="#" className="h_btn" data-value="0">
                            <img src="/img/logo.png" alt="logo" className="logo h_btn" data-value="0" loading="lazy"/>
                    </a>
                </div>
                <ul>
                <li>
                    <a href="#home" className="h_btn" data-value="0">홈</a>
                    <div className="hr_d1"></div>
                </li>
                <li>
                    <a href="#introduce" className="h_btn" data-value="14775">자기소개</a>
                    <div className="hr_d2"></div>
                    <div className="hr_d3"></div>
                    <div className="hr_d4"></div>
                    <div className="hr_d5"></div>
                </li>
                <li>
                    <a href="#portfolio" className="h_btn" data-value="63996">포트폴리오</a>
                    <div className="hr_d6"></div>
                    <div className="hr_d7"></div>
                    <div className="hr_d8"></div>
                    <div className="hr_d9"></div>
                    <div className="hr_d10"></div>
                </li>
                <li>
                    <a href="#contact" className="h_btn" data-value="218740">컨텍트</a>
                    <div className="hr_d11"></div>
                    <div className="hr_d12"></div>
                    <div className="hr_d13"></div>
                    <div className="hr_d14"></div>
                </li>
            </ul>
            </div>
        </div>
    )
}

import { useEffect } from 'react';

export default function Header() {
    useEffect(() => {
        const headerLinks = document.querySelectorAll('.h_btn');

        const scrollToSection = (event) => {
            const targetValue = event.currentTarget.getAttribute('data-value');

            console.log("targetValue: "+targetValue);

            if (targetValue) {
                window.scrollTo({
                    top: targetValue,
                });
            }
        };

        if (headerLinks) {
            headerLinks.forEach(link => {
                link.addEventListener('click', scrollToSection);
            });

            return () => {
                headerLinks.forEach(link => {
                    link.removeEventListener('click', scrollToSection);
                });
            };
        }
    }, []);

    return (
        <div className="header">
            <div className="inner">
                <div>
                    <a className="h_btn" data-value="0">
                        <img src="/img/logo.png" alt="logo" className="logo h_btn" data-value="0" loading="lazy" />
                    </a>
                </div>
                <ul>
                    <li>
                        <a className="h_btn" data-value="0">홈</a>
                        <div className="hr_d1"></div>
                    </li>
                    <li>
                        <a className="h_btn" data-value="11186">자기소개</a>
                        <div className="hr_d2"></div>
                        <div className="hr_d3"></div>
                        <div className="hr_d4"></div>
                        <div className="hr_d5"></div>
                    </li>
                    <li>
                        <a className="h_btn" data-value="17899">포트폴리오</a>
                        <div className="hr_d6"></div>
                        <div className="hr_d7"></div>
                        <div className="hr_d8"></div>
                        <div className="hr_d9"></div>
                        <div className="hr_d10"></div>
                    </li>
                    <li>
                        <a className="h_btn" data-value="34736">컨텍트</a>
                        <div className="hr_d11"></div>
                        <div className="hr_d12"></div>
                        <div className="hr_d13"></div>
                        <div className="hr_d14"></div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

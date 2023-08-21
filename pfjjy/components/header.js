import { useEffect, useState } from 'react';
import styled from 'styled-components';

// Styled component to control visibility with dynamic styles
const HiddenDiv = styled.div`
    display: ${props => props.visible ? 'block' : 'none'};
`;


export default function Header() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const headerLinks = document.querySelectorAll('.h_btn');

        const scrollToSection = (event) => {
            const targetValue = event.currentTarget.getAttribute('data-value');
            if (targetValue) {
                window.scrollTo({
                    top: targetValue,
                });
            }
        };

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        if (headerLinks) {
            headerLinks.forEach(link => {
                link.addEventListener('click', scrollToSection);
            });

            window.addEventListener('scroll', handleScroll);

            return () => {
                headerLinks.forEach(link => {
                    link.removeEventListener('click', scrollToSection);
                });

                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    const isBetween = (value, start, end) => value >= start && value <= end;

    const isHomeVisible = isBetween(scrollY, 0, 10940);
    const isIntroductionVisible = isBetween(scrollY, 11186, 16937);
    const isPortfolioVisible = isBetween(scrollY, 17899, 34380);
    const isContactVisible = isBetween(scrollY, 34736, 45334);

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
                        <a className={`h_btn ${isHomeVisible ? 'active' : ''}`} data-value="0">홈</a>
                        <HiddenDiv visible={isHomeVisible} className="hr_d1"></HiddenDiv>
                    </li>
                    <li>
                        <a className={`h_btn ${isIntroductionVisible ? 'active' : ''}`} data-value="11186">자기소개</a>
                        <HiddenDiv visible={isIntroductionVisible} className="hr_d2"></HiddenDiv>
                        <HiddenDiv visible={isIntroductionVisible} className="hr_d3"></HiddenDiv>
                        <HiddenDiv visible={isIntroductionVisible} className="hr_d4"></HiddenDiv>
                        <HiddenDiv visible={isIntroductionVisible} className="hr_d5"></HiddenDiv>
                    </li>
                    <li>
                        <a className={`h_btn ${isPortfolioVisible ? 'active' : ''}`} data-value="17899">포트폴리오</a>
                        <HiddenDiv visible={isPortfolioVisible} className="hr_d6"></HiddenDiv>
                        <HiddenDiv visible={isPortfolioVisible} className="hr_d7"></HiddenDiv>
                        <HiddenDiv visible={isPortfolioVisible} className="hr_d8"></HiddenDiv>
                        <HiddenDiv visible={isPortfolioVisible} className="hr_d9"></HiddenDiv>
                        <HiddenDiv visible={isPortfolioVisible} className="hr_d10"></HiddenDiv>
                    </li>
                    <li>
                        <a className={`h_btn ${isContactVisible ? 'active' : ''}`} data-value="34736">컨텍트</a>
                        <HiddenDiv visible={isContactVisible} className="hr_d11"></HiddenDiv>
                        <HiddenDiv visible={isContactVisible} className="hr_d12"></HiddenDiv>
                        <HiddenDiv visible={isContactVisible} className="hr_d13"></HiddenDiv>
                        <HiddenDiv visible={isContactVisible} className="hr_d14"></HiddenDiv>
                    </li>
                </ul>
            </div>
        </div>
    );
}
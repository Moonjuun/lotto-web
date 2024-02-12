import React, { useEffect, useState } from 'react';
import { getLottoLastNumber } from '../../api/lotto';
import styled from 'styled-components';
import { useTheme } from 'next-themes';
import { formatThousandsCommas } from '@/libs/utils';

interface LottoData {
    bnusNo: number;
    drwNo: number;
    drwNoDate: string;
    drwtNo1: number;
    drwtNo2: number;
    drwtNo3: number;
    drwtNo4: number;
    drwtNo5: number;
    drwtNo6: number;
    firstAccumamnt: number;
    firstPrzwnerCo: number;
    firstWinamnt: number;
    totSellamnt: number;
}

export default function CurrentLotto() {
    const [currentLottoData, setCurrentLottoData] = useState<LottoData | null>(
        null,
    );
    const { theme, setTheme } = useTheme(); // 테마 관리 훅 사용

    useEffect(() => {
        const fetchLottoData = async () => {
            const data = await getLottoLastNumber();
            setCurrentLottoData(data);
            console.log(currentLottoData);
            console.log(data);
        };
        fetchLottoData();
    }, []);

    return (
        <Layout>
            <CurrentLottoSection>
                <LottoTitle>
                    {currentLottoData?.drwNo}회차 ({currentLottoData?.drwNoDate}
                    )
                </LottoTitle>
                <NumberPlate>
                    <NumberRound number={currentLottoData?.drwtNo1 ?? 0}>
                        {currentLottoData?.drwtNo1}
                    </NumberRound>
                    <NumberRound number={currentLottoData?.drwtNo2 ?? 0}>
                        {currentLottoData?.drwtNo2}
                    </NumberRound>
                    <NumberRound number={currentLottoData?.drwtNo3 ?? 0}>
                        {currentLottoData?.drwtNo3}
                    </NumberRound>
                    <NumberRound number={currentLottoData?.drwtNo4 ?? 0}>
                        {currentLottoData?.drwtNo4}
                    </NumberRound>
                    <NumberRound number={currentLottoData?.drwtNo5 ?? 0}>
                        {currentLottoData?.drwtNo5}
                    </NumberRound>
                    <NumberRound number={currentLottoData?.drwtNo6 ?? 0}>
                        {currentLottoData?.drwtNo6}
                    </NumberRound>
                    <PlusSpan>+</PlusSpan>
                    <NumberRound number={currentLottoData?.bnusNo ?? 0}>
                        {currentLottoData?.bnusNo}
                    </NumberRound>
                </NumberPlate>
                <WinnerTitle>
                    {currentLottoData?.firstWinamnt !== undefined
                        ? `1등 당첨금 ${formatThousandsCommas(currentLottoData.firstWinamnt)}원`
                        : '0'}{' '}
                    (당첨 복권수{currentLottoData?.firstPrzwnerCo}개)
                </WinnerTitle>
            </CurrentLottoSection>
        </Layout>
    );
}

const Layout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
`;

const CurrentLottoSection = styled.div`
    gap: 10px;
`;

const LottoTitle = styled.div`
    width: 100%;
    font-size: 30px;
    font-weight: bold;
    padding-top: 10px;
    padding-left: 10px;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

const NumberPlate = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

const PlusSpan = styled.span`
    width: 40px;
    height: 40px;
    font-size: 26px;
    text-align: center;

    @media (max-width: 768px) {
        /* 모바일 화면 크기 */
        width: 30px;
        height: 30px;
        font-size: 18px;
    }
`;

const NumberRound = styled.div<{ number: number }>`
    width: 40px;
    height: 40px;
    border: 1px solid;
    margin: 10px 10px;
    text-align: center;
    font-size: 26px;
    border-radius: 50%;
    color: white; /* 텍스트 색상 */

    background-color: ${({ number }) => {
        if (number >= 1 && number <= 9) return '#f2b720';
        else if (number >= 10 && number <= 19) return '#69c8f2';
        else if (number >= 20 && number <= 29) return '#ff7272';
        else if (number >= 30 && number <= 39) return '#aaa';
        else return '#13be4b';
    }};

    @media (max-width: 768px) {
        /* 모바일 화면 크기 */
        width: 30px;
        height: 30px;
        font-size: 18px;
        margin: 5px 5px;
    }
`;

const WinnerTitle = styled.div`
    width: 100%;
    font-size: 24px;
    padding-top: 10px;
    padding-left: 10px;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

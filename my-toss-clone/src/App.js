import "./App.css";

function App() {
    return (
        <div className="app-container">
            {/* 계좌 카드 */}
            <div className="card">
                <div className="title">토스뱅크 통장</div>
                <div className="amount-row">
                    <img
                        src="/assets/toss.png"
                        alt="토스뱅크"
                        className="bank-icon"
                    />
                    <div
                        style={{
                            flex: 1,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <div className="amount">150,009원</div>
                        <button className="btn-small">송금</button>
                    </div>
                </div>

                <div className="title" style={{ marginTop: 20 }}>
                    달려라라2030통장
                </div>
                <div className="amount-row">
                    <img
                        src="/assets/kb.png"
                        alt="달려라통장"
                        className="bank-icon"
                    />
                    <div
                        style={{
                            flex: 1,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <div className="amount">73,820원</div>
                        <button className="btn-small">송금</button>
                    </div>
                </div>

                <div className="title" style={{ marginTop: 20 }}>
                    투자 모아보기 · 8개
                </div>
                <div className="amount-row">
                    <img
                        src="/assets/samsung.png"
                        alt="삼성"
                        className="bank-icon"
                    />
                    <div
                        style={{
                            flex: 1,
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <div className="amount">90,000,000원</div>
                        <div className="subtext" style={{ marginLeft: 8 }}>
                            +12.5%
                        </div>
                    </div>
                </div>
            </div>

            {/* 소비 카드 */}
            <div className="card">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <div>
                        <div className="title">이번 달 소비</div>
                        <div className="amount">125,000원</div>
                    </div>
                    <button className="btn-small">새 내역 1건</button>
                </div>
            </div>

            {/* 카드값 */}
            <div className="card">
                <div className="title">3월 25일 낼 카드값</div>
                <div className="amount">921,000원</div>
            </div>

            {/* 기능 버튼 (아이콘 없이 텍스트만) */}
            <div
                className="card"
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    textAlign: "center",
                }}
            >
                <div className="feature-button">계좌개설</div>
                <div className="feature-button">카드발급</div>
                <div className="feature-button">대출받기</div>
            </div>

            {/* 하단 네비게이션바 (홈 제외) */}
            <div className="bottom-nav">
                <div className="nav-item">
                    <span>혜택</span>
                </div>
                <div className="nav-item">
                    <span>토스페이</span>
                </div>
                <div className="nav-item">
                    <span>주식</span>
                </div>
                <div className="nav-item">
                    <span>전체</span>
                </div>
            </div>
        </div>
    );
}

export default App;

import './SpendingCard.css';

function SpendingCard({amount, percent}) {
    return (
        <div className="spending-card">
            <div className="spending-title">이번 달 총 소비</div>
            <div className="spending-amount">{amount.toLocaleString()}원</div>
            <div className="spending-change">지난달보다 {percent}% 증가했어요</div>
        </div>
    );
}
export default SpendingCard;

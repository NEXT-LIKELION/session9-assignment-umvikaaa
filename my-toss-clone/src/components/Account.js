function Account({ title, amount }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{amount.toLocaleString()}원</p>
        </div>
    );
}

export default Account;

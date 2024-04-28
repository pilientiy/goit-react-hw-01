import css from "./TransactionHistoryItem.module.css"
export default function TransactionHistoryItem({ transactions }) {
    return (
        <>
            {transactions.map(({ id, type, amount, currency }) => (
                <tr className={css.tr} key={id}>
                    <td className={css.td}>{type}</td>
                    <td className={css.td}>{amount}</td>
                    <td className={css.td}>{currency}</td>
                </tr>
            ))}
        </>
    );
}
import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem";
import css from "./TransactionHistory.module.css"
export default function TransactionHistory({ items }) {
    return (
        <table className={css.table}>
  <thead>
    <tr>
      <th className={css.th}>Type</th>
      <th className={css.th}>Amount</th>
      <th className={css.th}>Currency</th>
    </tr>
  </thead>

            <tbody>
                <TransactionHistoryItem transactions={items} />
                    
  </tbody>
</table>

    )
}
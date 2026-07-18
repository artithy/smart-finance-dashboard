
export default function TransactionsTable({ transactions }) {
    return (
        <>
            <div className="rounded-xl bg-white p-6 shadow">
                <h2 className="mb-5 text-xl font-semibold">
                    Transaction History
                </h2>

                {
                    transactions.length === 0 ? (
                        <p className="text-gray-500">
                            No transactions found
                        </p>
                    ) : (

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b">
                                        <th className="py-3 text-left">
                                            Title
                                        </th>

                                        <th className="py-3 text-left">
                                            Category
                                        </th>
                                        <th className="py-3 text-left">
                                            Type
                                        </th>
                                        <th className="py-3 text-left">
                                            Amount
                                        </th>
                                        <th className="py-3 text-left">
                                            Date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transactions.map((transaction) => (
                                        <tr key={transaction.id} className="border-b">
                                            <td className="py-3">
                                                {transaction.title}
                                            </td>
                                            <td>{transaction.category}</td>
                                            <td>{transaction.type}</td>
                                            <td>${transaction.amount}</td>
                                            <td>{transaction.date}</td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>
                    )
                }
            </div >
        </>
    );
}
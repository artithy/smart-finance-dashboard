import { ArrowDownLeft, Wallet } from "lucide-react";

export default function RecentTransactions({ transactions }) {
    return (
        <>
            <div className="rounded-xl mt-8 border border-gray-200 bg-white p-6 shadow">
                <h2 className="mb-5 text-xl font-semibold">
                    Recent Transaction
                </h2>

                {transactions.slice().reverse().slice(0, 5).map((transaction) => (
                    <div
                        key={transaction.id}
                        className="mb-4 flex items-center justify-between rounded-lg border border-gray-100 p-4"
                    >
                        <div className="flex items-center gap-4">
                            <div className="rounded-full bg-gray-100 p-3">
                                {transaction.type === "Income" ? (
                                    <Wallet size={18} />
                                ) : (<ArrowDownLeft size={18} />)}
                            </div>
                            <div >
                                <h2>{transaction.title}</h2>
                                <p className="text-sm text-gray-500">
                                    {transaction.date}
                                </p>
                            </div>
                        </div>


                        <p className={
                            transaction.type === "Income"
                                ? "text-green-500 font-semibold"
                                : "text-red-500 font-semibold"
                        }>
                            {transaction.type === "Income" ? "+" : "-"}
                        </p>

                    </div>
                ))}
            </div >

        </>
    );
}
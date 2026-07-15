import { ArrowDownLeft, ArrowUpRight, ShoppingBag, Wallet } from "lucide-react";

const transactions = [
    {
        id: 1,
        title: "Monthly Salary",
        date: "15 Jul 2026",
        amount: "+$8,000",
        income: true,
        icon: <Wallet size={18} />,
    },

    {
        id: 2,
        title: "Grocery Shopping",
        date: "14 Jul 2026",
        amount: "-$120",
        income: false,
        icon: <ShoppingBag size={18} />,
    },

    {
        id: 3,
        title: "Freelance Payment",
        date: "13 Jul 2026",
        amount: "+$950",
        income: true,
        icon: <ArrowUpRight size={18} />,
    },


    {
        id: 4,
        title: "Electricity Bill",
        date: "12 Jul 2026",
        amount: "-$75",
        income: false,
        icon: <ArrowDownLeft size={18} />,
    }
];

export default function RecentTransactions() {
    return (
        <>
            <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Recent Transaction</h2>
                </div>
                <button className="text-sm font-medium text-blue-600 hover:underline">
                    View Al
                </button>
            </div>

            <div className="space-y-4">
                {
                    transactions.map((transaction) => (
                        <div key={transaction.id}
                            className="flex items-center justify-between rounded-lg border border-gray-100 p-4 transition hover:bg-gray-50"
                        >
                            <div className="flex items-center gap-4">
                                <div className="rounded-full bg-gray-100 p-3">
                                    {transaction.icon}
                                </div>

                                <div>
                                    <h3 className="font-medium">{transaction.title}</h3>
                                    <p className="text-sm ">
                                        {transaction.date}
                                    </p>
                                </div>
                            </div>

                            <span className={
                                `font-semibold ${transaction.income ? "text-green-500" : "text-red-500"
                                }`
                            }>
                                {transaction.amount}
                            </span>

                        </div>
                    ))
                }
            </div>
        </>
    );
}
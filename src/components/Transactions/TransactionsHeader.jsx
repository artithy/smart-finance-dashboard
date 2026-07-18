export default function TransactionsHeader({ onAddTransaction }) {
    return (
        <>
            <div className="flex items-center justify-between">
                <div >
                    <h1 className="text-3xl font-bold text-gray-800">
                        Transactions
                    </h1>
                    <p className="mt-1 text-gray-500">
                        Manage your income and expense transactions.
                    </p>

                    <button onClick={onAddTransaction} className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
                        + Add Transaction
                    </button>

                </div>
            </div>
        </>
    );
}
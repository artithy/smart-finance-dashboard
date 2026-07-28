import SearchBar from "@/components/SearchBar/Searchbar";

export default function TransactionsHeader({ onAddTransaction, search,
    setSearch, }) {
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
                    <div className="mt-5 flex items-end gap-3">
                        <div className="w-72">
                            <SearchBar
                                search={search}
                                setSearch={setSearch}
                            />
                        </div>

                        <button
                            onClick={onAddTransaction}
                            className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
                        >
                            + Add Transaction
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
import Searchbar from "@/components/Searchbar/Searchbar";
import Filterbar from "@/components/Filterbar/Filterbar";
import Sortbar from "@/components/Sortbar/Sortbar";
export default function TransactionsHeader({ onAddTransaction, search,
    setSearch, typeFilter,
    setTypeFilter, sortOption, setSortOption }) {
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
                            <Searchbar
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
                        <div className="">

                        </div>

                        <div className="mt-4 flex gap-3">
                            <Filterbar
                                typeFilter={typeFilter}
                                setTypeFilter={setTypeFilter}
                            />

                            <Sortbar
                                sortOption={sortOption}
                                setSortOption={setSortOption}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
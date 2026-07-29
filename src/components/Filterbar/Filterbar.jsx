export default function Filterbar({ typeFilter, setTypeFilter }) {
    return (
        <>
            <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="rounded-lg border border-gray-300 px-4 py-2 outline-none"
            >
                <option value="all">All</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>

            </select>
        </>
    );
}
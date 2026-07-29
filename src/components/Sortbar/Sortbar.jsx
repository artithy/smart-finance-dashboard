export default function Sortbar({ sortOption, setSortOption }) {
    return (
        <>
            <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="rounded-lg border border-gray-300 px-4 py-2 outline-none"
            >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="highest">Highest Amount</option>
                <option value="lowest">Lowest Amount</option>
                <option value="a-z">A → Z</option>
                <option value="z-a">Z → A</option>


            </select>
        </>
    );
}
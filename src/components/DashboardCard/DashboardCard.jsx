export default function DashboardCard({ title, amount }) {
    return (
        <>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-gray-500 text-sm ">
                    {title}
                </h3>
                <h2 className="mt-2 text-3xl font-bold">
                    {amount}
                </h2>
            </div>
        </>
    );
}
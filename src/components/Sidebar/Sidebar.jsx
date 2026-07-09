import Link from "next/link";
import {
    LayoutDashboard,
    ReceiptText,
    ChartColumn,
    Wallet,
    Settings,
} from "lucide-react";


export default function Sidebar() {
    return (
        <aside className="w-full md:w-64 min-h-screen bg-white border-r border-gray-200 p-4 md:p-6 flex flex-col">
            <div className="mb-10">
                <h1 className="text-xl md:text-2xl font-bold text-blue-500">
                    Finance
                </h1>
            </div>

            <nav>
                <ul className="space-y-3">
                    <li>
                        <Link href="/dashboard"
                            className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-gray-200">
                            <LayoutDashboard size={20} />
                            <span>Dashboard</span>
                        </Link>
                    </li>

                    <li>
                        <Link href="/transactions"
                            className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-gray-200">
                            <ReceiptText size={20} />
                            <span>Transactions</span>
                        </Link>
                    </li>

                    <li>
                        <Link href="/statistics"
                            className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-gray-200">
                            <ChartColumn size={20} />
                            <span>Statistics</span>
                        </Link>
                    </li>

                    <li>
                        <Link href="/budget"
                            className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-gray-200">
                            <Wallet size={20} />
                            <span>Budget</span>
                        </Link>
                    </li>

                    <li>
                        <Link href="/settings"
                            className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-gray-200">
                            <Settings size={20} />
                            <span>Settings</span>
                        </Link>
                    </li>

                </ul>
            </nav>

        </aside >
    )
}
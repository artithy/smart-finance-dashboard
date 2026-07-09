import { Bell, Moon, Search } from "lucide-icon";
export default function Navbar() {
    return (
        <>
            <header className="flex flex-col gap-4 border-b border-gray-200 bg-white p-4 md:flex-row md:items-center md:justify-between md:px-6 md:py-4">
                <div className="relative w-full md:max-w-md">
                    <Search
                        size={18}
                        className="absolute left-3 top-1/2 -translaye-y-1/2 text-gray-400"
                    />

                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 outline-none focus:bord"
                    />
                </div>

                <div className="flex items-center justify-end gap-4">
                    <button className="rounded-lg border border-gray-300 p-2 transition hover:bg-gray-100">
                        <Moon size={20} />
                    </button>

                    <button className="rounded-lg border border-gray-300 p-2 transition hover:bg-gray-100">
                        <Bell size={20} />
                    </button>

                    <img
                        src="https://i.pravatar.cc/40"
                        alt="Profile"
                        className="h-10 w-10 rounded-full object-cover"
                    />
                </div>
            </header>
        </>
    );
}
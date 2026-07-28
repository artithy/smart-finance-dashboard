"use client";

import { Search } from "lucide-react";

export default function Searchbar({ search, setSearch }) {
    return (
        <div className="relative ">
            <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
                type="text"
                placeholder="Search transaction..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 outline-none focus:border-blue-500"
            />
        </div>
    );
}
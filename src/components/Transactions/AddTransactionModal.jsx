"use client";
import { useState } from "react";

export default function AddTransactionModal({ isOpen, onClose, setTransactions, }) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [type, setType] = useState("Expense");
    const [date, setDate] = useState("");

    if (!isOpen) { return null; }
    const handleSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Date.now(),
            title,
            amount,
            category,
            type,
            date,
        };

        setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
        setTitle("");
        setAmount("");
        setCategory("");
        setType("Expense");
        setDate("");
        onClose();
    };

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Add Transaction
                        </h2>
                        <p className="mt-1 text-sm text-gray-500">
                            Fill in the details below.
                        </p>
                    </div>


                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                            required
                        />

                        <input
                            type="number"
                            placeholder="Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                            required
                        />

                        <input
                            type="text"
                            placeholder="Category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                            required
                        />

                        <select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                        >
                            <option>Income</option>
                            <option>Expense</option>
                        </select>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                            required
                        />

                        <div className="flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={onClose}
                                className="rounded-xl border border-gray-300 px-5 py-2 font-medium hover:bg-gray-100"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="rounded-xl bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
                            >
                                Save
                            </button>
                        </div>

                    </form>
                </div>
            </div>

        </>
    );
}
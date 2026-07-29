"use client";

import { useState, useEffect } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import TransactionsHeader from "@/components/Transactions/TransactionsHeader";
import TransactionsTable from "@/components/Transactions/TransactionsTable";
import AddTransactionModal from "@/components/Transactions/AddTransactionModal";

export default function TransactionsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [typeFilter, setTypeFilter] = useState("all");

    const [isLoaded, setIsLoaded] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const [editingTransaction, setEditingTransaction] = useState(null);
    const [search, setSearch] = useState("");
    const [sortOption, setSortOption] = useState("newest");
    useEffect(() => {
        const savedTransactions = localStorage.getItem("transactions");

        console.log("READ:", savedTransactions);

        if (savedTransactions) {
            setTransactions(JSON.parse(savedTransactions));
        }

        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (!isLoaded) return;

        localStorage.setItem(
            "transactions",
            JSON.stringify(transactions)
        );
    }, [transactions, isLoaded]);

    const filteredTransactions = transactions.filter((transaction) => {
        const matchesSearch = transaction.title.toLowerCase().includes(search.toLowerCase());
        const matchesType = typeFilter === "all" || transaction.type.toLowerCase() === typeFilter;
        return matchesSearch && matchesType;
    });

    const sortTransactions = [...filteredTransactions].sort((a, b) => {
        if (sortOption === "newest") {
            return new Date(b.date) - new Date(a.date);
        }
        if (sortOption === "oldest") {
            return new Date(a.date) - new Date(b.date);
        }
        if (sortOption === "highest") {
            return new Number(b.amount) - new Number(a.amount);
        }
        if (sortOption === "lowest") {
            return new Number(a.amount) - new Number(b.amount);
        }
        if (sortOption === "a-z") {
            return a.title.localeCompare(b.title);
        }
        if (sortOption === "z-a") {
            return b.title.localeCompare(a.title);
        }

        return 0;
    })

    console.log("Search:", search);
    console.log("Transactions:", transactions);
    console.log("Filtered:", filteredTransactions);
    const handleAddTransaction = () => {
        setIsModalOpen(true);
    };

    const handleDeleteTransaction = (id) => {
        setTransactions(
            transactions.filter((transaction) => transaction.id != id)
        );
    }

    const handleEditTransaction = (transaction) => {
        setEditingTransaction(transaction);
        setIsModalOpen(true);
    }
    console.log("Transactions State:", transactions);
    return (
        <>
            <DashboardLayout>
                <div className="space-y-6">
                    <TransactionsHeader
                        onAddTransaction={handleAddTransaction}
                        search={search}
                        setSearch={setSearch}
                        typeFilter={typeFilter}
                        setTypeFilter={setTypeFilter}
                        sortOption={sortOption}
                        setSortOption={setSortOption}
                    />
                    <TransactionsTable
                        transactions={sortTransactions}
                        onDelete={handleDeleteTransaction}
                        onEdit={handleEditTransaction} />
                    <AddTransactionModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        setTransactions={setTransactions}
                        editingTransaction={editingTransaction}
                    />
                </div>
            </DashboardLayout>
        </>
    );
}
"use client";

import { useState, useEffect } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import TransactionsHeader from "@/components/Transactions/TransactionsHeader";
import TransactionsTable from "@/components/Transactions/TransactionsTable";
import AddTransactionModal from "@/components/Transactions/AddTransactionModal";

export default function TransactionsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isLoaded, setIsLoaded] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const [editingTransaction, setEditingTransaction] = useState(null);
    const [search, setSearch] = useState("");
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

    const filteredTransactions = transactions.filter((transaction) =>
        transaction.title.toLowerCase().includes(search.toLowerCase())
    );
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
                    />
                    <TransactionsTable
                        transactions={filteredTransactions}
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
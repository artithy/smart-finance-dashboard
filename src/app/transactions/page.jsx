"use client";

import { useState, useEffect } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import TransactionsHeader from "@/components/Transactions/TransactionsHeader";
import TransactionsTable from "@/components/Transactions/TransactionsTable";
import AddTransactionModal from "@/components/Transactions/AddTransactionModal";

export default function TransactionsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);


    const [transactions, setTransactions] = useState([]);
    const [editingTransaction, setEditingTransaction] = useState(null);


    useEffect(() => {
        const savedTransactions = localStorage.getItem("transactions");

        if (savedTransactions) {
            setTransactions(JSON.parse(savedTransactions));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem(
            "transactions",
            JSON.stringify(transactions)
        );
    }, [transactions]);


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
                    <TransactionsHeader onAddTransaction={handleAddTransaction} />
                    <TransactionsTable transactions={transactions} onDelete={handleDeleteTransaction} onEdit={handleEditTransaction} />
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
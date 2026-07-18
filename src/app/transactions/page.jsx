"use client";

import { useState, useEffect } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import TransactionsHeader from "@/components/Transactions/TransactionsHeader";
import TransactionsTable from "@/components/Transactions/TransactionsTable";
import AddTransactionModal from "@/components/Transactions/AddTransactionModal";

export default function TransactionsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);


    const [transactions, setTransactions] = useState(() => {
        if (typeof window !== "undefined") {
            const savedTransactions = localStorage.getItem("transactions");
            return savedTransactions ? JSON.parse(savedTransactions) : [];
        }
        return [];
    });

    useEffect(() => {
        localStorage.setItem(
            "transactions",
            JSON.stringify(transactions)
        );
    }, [transactions]);


    const handleAddTransaction = () => {
        setIsModalOpen(true);
    };
    console.log("Transactions State:", transactions);
    return (
        <>
            <DashboardLayout>
                <div className="space-y-6">
                    <TransactionsHeader onAddTransaction={handleAddTransaction} />
                    <TransactionsTable transactions={transactions} />
                    <AddTransactionModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        setTransactions={setTransactions}
                    />
                </div>
            </DashboardLayout>
        </>
    );
}
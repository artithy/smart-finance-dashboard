"use client";


import { useState, useEffect } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import DashboardCard from "@/components/DashboardCard/DashboardCard";
import RecentTransactions from "@/components/RecentTransactions/RecentTransactions";

export default function DashboardPage() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const savedTransactions = localStorage.getItem("transactions");
        if (savedTransactions) {
            setTransactions(JSON.parse(savedTransactions));
        }
    }, []);

    const totalIncome = transactions.reduce((total, transaction) => {
        if (transaction.type === "Income") {
            return total + Number(transaction.amount);
        }
        return total;
    }, 0);

    const totalExpense = transactions.reduce((total, transaction) => {
        if (transaction.type === "Expense") {
            return total + Number(transaction.amount);
        }
        return total;
    }, 0);

    const totalBalance = totalIncome - totalExpense;
    return (
        <DashboardLayout>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                <DashboardCard title="Total Balance" amount={`$${totalBalance}`} />
                <DashboardCard title="Income" amount={`$${totalIncome}`} />
                <DashboardCard title="Expense" amount={`$${totalExpense}`} />
                <DashboardCard title="Savings" amount={`$${totalBalance}`} />
            </div>
            <RecentTransactions transactions={transactions} />
        </DashboardLayout>
    );
}
"use client";

import { Chart } from "primereact/chart";
import { useMemo } from "react";

export default function IncomeExpenseChart({
    totalIncome,
    totalExpense,
}) {
    const chartData = useMemo(() => {
        return {
            labels: ["Income", "Expense"],
            datasets: [
                {
                    data: [totalIncome, totalExpense],
                    backgroundColor: ["#22c55e", "#ef4444"],
                    hoverBackgroundColor: ["#16a34a", "#dc2626"],
                },
            ],
        };
    }, [totalIncome, totalExpense]);

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom",
            },
        },
    };

    return (
        <div className="mt-6 rounded-xl bg-white p-6">
            <h2 className="mb-4 text-xl font-semibold">
                Income vs Expense
            </h2>

            <div className="h-[300px]">
                <Chart
                    key={`${totalIncome}-${totalExpense}`}
                    type="doughnut"
                    data={chartData}
                    options={chartOptions}
                />
            </div>
        </div>
    );
}
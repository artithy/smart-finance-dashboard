import DashboardLayout from "@/layouts/DashboardLayout";
import DashboardCard from "@/components/DashboardCard/DashboardCard";
import RecentTransactions from "@/components/RecentTransactions/RecentTransactions";

export default function DashboardPage() {
    return (
        <DashboardLayout>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                <DashboardCard title="Total Balance" amount="$24,500" />
                <DashboardCard title="Income" amount="$8,000" />
                <DashboardCard title="Expense" amount="$3,500" />
                <DashboardCard title="Savings" amount="$21,000" />
            </div>
            <RecentTransactions />
        </DashboardLayout>
    );
}
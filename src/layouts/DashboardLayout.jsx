import Sidebar from "@/components/Sidebar/Sidebar";
import Navbar from "@/components/Navbar/Navbar";

export default function DashboardLayout({ children }) {
    return (
        <>
            <div className="flex min-h-screen">
                <Sidebar />
                <div className="flex flex-1 flex-col">
                    <Navbar />
                    <main className="flex-1 bg-gray-100 p-4 md:p-6">
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
}
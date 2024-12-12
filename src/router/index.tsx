import {Navigate, useRoutes} from "react-router-dom";
import MainTheme from "../themes";
import Calendar from "../pages/apps/Calendar";
import StocksPage from "../pages/apps/Batches";
import ReportsPage from "../pages/apps/Reports";
import UsersPage from "../pages/apps/Users";
import AuthLayout from "../components/layouts/AuthLayout";
import LoginPage from "../pages/auth/Login";
import DashboardPage from "../pages/apps/Dashboard";
import AuditLogsPage from "../pages/apps/AuditLogs";
import SettingsPage from "../pages/apps/Settings";
import UserDetailsPage from "../pages/apps/UserDetails";
import StocksDetailsPage from "../pages/apps/StockDetails";
import TasksPage from "../pages/apps/Tasks";
import AlertsPage from "../pages/apps/Alerts";
import InventoryPage from "../pages/apps/Inventory";
import FinancePage from "../pages/apps/Finances";
import CustomerManagementPage from "../pages/apps/CustomersManagement";
import CustomersPage from "../pages/apps/CustomersManagement/Customers";
import TransactionsPage from "../pages/apps/Transactions";
import HomePage from "../pages/apps/Home";
import SiteLayout from "../components/layouts/SiteLayout";

function Router() {
    const routes = [
        {
            path: "/admin",
            element: <MainTheme/>,
            children: [
                {
                    path: "",
                    element: <Navigate to="/admin/dashboards" replace/>,
                },
                {
                    path: "dashboards/*",
                    element: <DashboardPage/>
                },
                {
                    path: "applications/*",
                    element: <StocksPage/>
                },
                {
                    path: "transactions/*",
                    element: <TransactionsPage/>
                },

                {
                    path: "users",
                    element: <UsersPage/>
                },
                {
                    path: "users/:id",
                    element: <UserDetailsPage/>
                },
                {
                    path: "audit-logs",
                    element: <AuditLogsPage/>
                },
                {
                    path: "profile",
                    element: <Calendar/>
                },
                {
                    path: "reports",
                    element: <ReportsPage/>
                },
                {
                    path: "reports/stock/:stockId",
                    element: <StocksDetailsPage/>
                },
                {
                    path: "notifications",
                    element: <AlertsPage/>
                }, {
                    path: "inventory",
                    element: <InventoryPage/>
                }, {
                    path: "expenditures",
                    element: <FinancePage/>
                },
                {
                    path: "tasks",
                    element: <TasksPage/>
                },
                {
                    path: "customer-management",
                    element: <CustomerManagementPage/>
                },
                {
                    path: "customer-management/customer/:customerId",
                    element: <CustomersPage/>
                },
                {
                    path: "settings",
                    element: <SettingsPage/>
                },
            ]
        },
        {
            path: "/auth",
            element: <AuthLayout/>,
            children: [
                {
                    path: "/auth/login",
                    element: <LoginPage/>
                },
            ]
        },
        {
            path: "/",
            element: <SiteLayout/>,
            children: [
                {
                    path: "",
                    element: <HomePage/>
                },

            ]
        }
    ]

    return useRoutes(routes);
}

export default Router
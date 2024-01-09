import React, { useState } from 'react';
import { AuthLayout } from '../components';

function Admin() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            {/* <nav className="bg-blue-500 p-4 flex items-center justify-between">
                <div>
                    <h1 className="text-white text-xl font-semibold">SALUD 360</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="text-white">Bienvenido</span>
                    <i className="fas fa-user-circle text-white text-2xl"></i>
                </div>
            </nav>

            <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
                <nav>
                    <ul className="space-y-2">
                        <li className="opcion-con-desplegable">
                            <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                                <div className="flex items-center">
                                    <i className="fas fa-calendar-alt mr-2"></i>
                                    <span>Agenda</span>
                                </div>
                                <i className="fas fa-chevron-down text-xs"></i>
                            </div>
                            <ul className="desplegable ml-4 hidden">
                                <li>
                                    <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                                        <i className="fas fa-chevron-right mr-2 text-xs"></i>
                                        Gestion de citas
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                                        <i className="fas fa-chevron-right mr-2 text-xs"></i>
                                        Polizas
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="opcion-con-desplegable">
                            <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                                <div className="flex items-center">
                                    <i className="fas fa-money-bill-wave mr-2"></i>
                                    <span>Contabilidad</span>
                                </div>
                                <i className="fas fa-chevron-down text-xs"></i>
                            </div>
                            <ul className="desplegable ml-4 hidden">
                                <li>
                                    <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                                        <i className="fas fa-chevron-right mr-2 text-xs"></i>
                                        Tratamientos
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                                        <i className="fas fa-chevron-right mr-2 text-xs"></i>
                                        Gastos
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                                        <i className="fas fa-chevron-right mr-2 text-xs"></i>
                                        Facturas
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="opcion-con-desplegable">
                            <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                                <div className="flex items-center">
                                    <i className="fas fa-chart-bar mr-2"></i>
                                    <span>Informes</span>
                                </div>
                                <i className="fas fa-chevron-down text-xs"></i>
                            </div>
                            <ul className="desplegable ml-4 hidden">
                                <li>
                                    <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                                        <i className="fas fa-chevron-right mr-2 text-xs"></i>
                                        Presupuestos
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                                        <i className="fas fa-chevron-right mr-2 text-xs"></i>
                                        Informe médico
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="opcion-con-desplegable">
                            <div className="flex items-center justify-between p-2 hover:bg-gray-700">
                                <div className="flex items-center">
                                    <i className="fas fa-file-alt mr-2"></i>
                                    <span>Documentación</span>
                                </div>
                                <i className="fas fa-chevron-down text-xs"></i>
                            </div>
                            <ul className="desplegable ml-4 hidden">
                                <li>
                                    <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                                        <i className="fas fa-chevron-right mr-2 text-xs"></i>
                                        Firmas pendientes
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                                        <i className="fas fa-chevron-right mr-2 text-xs"></i>
                                        Documentos
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </aside>

            <main className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">¡Bienvenido al CRM de Mi Empresa!</h1>
                <p>En esta sección encontrarás todo lo que necesitas para administrar tus clientes y ventas de manera eficiente.</p>
            </main> */}



            <div className="flex h-screen">
                {/* Sidebar */}
                <div
                    className={`${isSidebarOpen && 'translate-x-0'}
                    -translate-x-full lg:translate-x-0
                    opacity-[.5]
                    bg-gray-800 text-white w-64 fixed top-0 left-0 bottom-0 z-50 transition-transform ease-in-out duration-300`}
                >
                    {/* Your sidebar content goes here */}
                    Sidebar
                </div>

                {/* Overlay */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-50 z-40"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                )}

                {/* Main Content */}
                <div className="flex flex-col flex-1">
                    {/* Fixed Top Header */}
                    <header className="bg-blue-600 text-white py-4 px-6">
                        {/* Burger Menu Button */}
                        <button
                            className="block lg:hidden"
                            onClick={toggleSidebar}
                        >
                            {/* You can use an icon or text for the button */}
                            &#9776; {/* Burger menu icon */}
                        </button>
                        {/* Your header content goes here */}
                        Header
                    </header>

                    {/* Content Area */}
                    <main className="flex-1 overflow-y-auto p-6 bg-gray-100">

                        Admin Page

                    </main>
                </div>
            </div>

        </>
    )
}

export default Admin
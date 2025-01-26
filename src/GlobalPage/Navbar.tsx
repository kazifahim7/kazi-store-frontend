import { useState } from 'react';
import {
    Dialog,
    DialogPanel,
    PopoverGroup,
} from '@headlessui/react';
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import { Link, NavLink } from 'react-router-dom';

import { TiShoppingCart } from "react-icons/ti";





export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const role ="admin"

    return (
        <header className="bg-white">
            <nav
                aria-label="Global"
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
            >
                <div className="flex lg:flex-1">
                    <NavLink to={'/'} className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            alt=""
                            src="https://nokshi-2.myshopify.com/cdn/shop/files/booken-logo_150x.png?v=1615364709"
                            className="h-8 w-auto"
                        />
                    </NavLink>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold ${isActive ? "text-orange-500" : "text-gray-900"
                            } hover:bg-gray-50`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="about"
                        className={({ isActive }) =>
                            `-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold ${isActive ? "text-orange-500" : "text-gray-900"
                            } hover:bg-gray-50`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="contact"
                        className={({ isActive }) =>
                            `-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold ${isActive ? "text-orange-500" : "text-gray-900"
                            } hover:bg-gray-50`
                        }
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        to="all-product"
                        className={({ isActive }) =>
                            `-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold ${isActive ? "text-orange-500" : "text-gray-900"
                            } hover:bg-gray-50`
                        }
                    >
                        AllProduct
                    </NavLink>
                   {
                        role === "admin" && <NavLink
                            to="/dashBoard/manageUser"
                            className={({ isActive }) =>
                                `-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold ${isActive ? "text-orange-500" : "text-gray-900"
                                } hover:bg-gray-50`
                            }
                        >
                            DashBoard
                        </NavLink>
                   }
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-5">

                    <div>
                       
                        <Link to={"cart"} className='text-xl font-bold'>
                            <TiShoppingCart></TiShoppingCart>
                        </Link>
                    </div>

                   
                   



                    <NavLink to={'/login'} className="text-xl font-semibold text-gray-900">
                        LogIn <span aria-hidden="true">&rarr;</span>
                    </NavLink>
                </div>
            </nav>

           
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="https://nokshi-2.myshopify.com/cdn/shop/files/booken-logo_150x.png?v=1615364709"
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold ${isActive ? "text-orange-500" : "text-gray-900"
                                        } hover:bg-gray-50`
                                    }
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="about"
                                    className={({ isActive }) =>
                                        `-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold ${isActive ? "text-orange-500" : "text-gray-900"
                                        } hover:bg-gray-50`
                                    }
                                >
                                    About
                                </NavLink>
                                <NavLink
                                    to="contact"
                                    className={({ isActive }) =>
                                        `-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold ${isActive ? "text-orange-500" : "text-gray-900"
                                        } hover:bg-gray-50`
                                    }
                                >
                                   Contact
                                </NavLink>
                                <NavLink
                                    to="all-product"
                                    className={({ isActive }) =>
                                        `-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold ${isActive ? "text-orange-500" : "text-gray-900"
                                        } hover:bg-gray-50`
                                    }
                                >
                                    AllProduct
                                </NavLink>
                                {
                                    role === "admin" && <NavLink
                                        to="/dashBoard/manageUser"
                                        className={({ isActive }) =>
                                            `-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold ${isActive ? "text-orange-500" : "text-gray-900"
                                            } hover:bg-gray-50`
                                        }
                                    >
                                        DashBoard
                                    </NavLink>
                                }
                               
                            </div>
                            <div className="py-6">
                                <div className='mb-4'>
                                    <Link to={"cart"} className='text-xl font-bold'>
                                        <TiShoppingCart></TiShoppingCart>
                                    </Link>
                                </div>
                                <NavLink to={'/login'} className="text-xl font-semibold text-gray-900">
                                    LogIn <span aria-hidden="true">&rarr;</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}

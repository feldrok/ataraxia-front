import AdminOrders from '../components/AdminOrders.jsx'
import AdminProducts from '../components/AdminProducts.jsx'
import React from 'react'
import { Tab } from '@headlessui/react'

function AdminTabs() {
    return (
        <>
            <Tab.Group>
                <Tab.List className={'flex gap-2 p-4'}>
                    <Tab
                        className={
                            'px-4 py-2 text-xl font-bold outline-none duration-200 ui-selected:border-b-2 ui-selected:border-primary-500 ui-selected:text-primary-500 ui-not-selected:text-gray-500'
                        }
                    >
                        Pedidos
                    </Tab>
                    <Tab
                        className={
                            'px-4 py-2 text-xl font-bold outline-none duration-200 ui-selected:border-b-2 ui-selected:border-primary-500 ui-selected:text-primary-500 ui-not-selected:text-gray-500'
                        }
                    >
                        Productos
                    </Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>
                        <AdminOrders />
                    </Tab.Panel>
                    <Tab.Panel>
                        <AdminProducts />
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </>
    )
}

export default AdminTabs

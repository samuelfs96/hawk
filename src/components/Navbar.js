import Logo from '../img/logo-hawk.svg'
import { ShoppingBagIcon, Bars3Icon } from '@heroicons/react/24/outline'

const Navbar = () => {
  return (
    <>
        <div className="container flex justify-between">
            <div className='p-4'>
                <img src={Logo} alt='logo'/>
            </div>
            <ul className='flex font-semibold uppercase text-sm'>
                <li className='p-4 cursor-pointer flex items-center'>Inicio</li>
                <li className='p-4 cursor-pointer flex items-center'>Nosotros</li>
                <li className='p-4 cursor-pointer flex items-center'>Contacto</li>
                <li className='p-4 cursor-pointer flex items-center'>Cuenta</li>
                <li className='p-4 cursor-pointer flex items-center'>
                    <ShoppingBagIcon className='w-10'/>
                </li>
            </ul>
        </div>
        <div className='bg-black'>
            <ul className='container uppercase flex gap-4 font-semibold text-white text-xs'>
                <li className='p-2 cursor-pointer flex items-center'><Bars3Icon className='w-8'/></li>
                <li className='p-2 cursor-pointer flex items-center'>Todas las categorías</li>
                <li className='p-2 cursor-pointer flex items-center'>Ofertas del día</li>
                <li className='p-2 cursor-pointer flex items-center'>Nuevos diseños</li>
            </ul>
        </div>
    </>
  )
}

export default Navbar
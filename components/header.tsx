import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { title: 'Dashboard', href: '/dashboard', as: '/dashboard' },
  { title: 'Schedule', href: '/schedule', as: '/schedule' },
  { title: 'Analytics', href: '/analytics', as: '/analytics' },
  { title: 'Settings', href: '/settings', as: '/settings' },
];

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="m-0 bg-purple-700 shadow-lg w-72 md:m-6 md:rounded-xl">
      <div className={'flex-col flex text-sm w-full items-center justify-center'}>
        <h1 className={'text-2xl font-bold my-6'}>Project</h1>
        {navItems.map((navigationItem) => (
          <Link
            key={navigationItem.title}
            href={navigationItem.href}
            as={navigationItem.as}
            passHref={true}
          >
            <a className="block w-3/4 p-4 my-1 font-thin text-center text-white rounded-full cursor-pointer hover:bg-white hover:text-black">
              {navigationItem.title}
            </a>
          </Link>
        ))}
      </div>
    </header>
  );
}

export default Header;

import { useState } from 'react';

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="m-0 bg-purple-700 shadow-lg w-72 md:m-6 md:rounded-xl">
      <div className={'flex-col mt-16 flex text-sm w-full items-center justify-center'}>
        {[
          { title: 'GitHub', route: 'https://github.com/sdkayy' },
          { title: 'Angel', route: 'https://angel.co/u/austin-quinn' },
          { title: 'LinkedIn', route: 'https://linkedin.com/in/sdkayy' },
          { title: 'Mail', route: 'mailto:sdkay@sdkay.pw' },
        ].map((navigationItem) => (
          <a
            className="block w-1/2 p-4 my-1 font-thin text-center text-white rounded-full cursor-pointer hover:bg-white hover:text-black"
            key={navigationItem.title}
            href={navigationItem.route}
          >
            {navigationItem.title}
          </a>
        ))}
      </div>
    </header>
  );
}

export default Header;

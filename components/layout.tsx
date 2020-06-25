import Header from './header';

function Layout(props) {
  return (
    <div
      className="flex flex-row min-h-screen text-white"
      style={{ backgroundColor: 'rgb(63, 60, 85)' }}
    >
      <Header />
      <main className="flex-1 w-full p-4 mx-auto md:px-8 md:py-16">{props.children}</main>
    </div>
  );
}

export default Layout;

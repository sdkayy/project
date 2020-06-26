import Header from './header';

function Layout(props) {
  return (
    <div
      className="flex flex-row max-h-screen min-h-screen text-white"
      style={{ backgroundColor: 'rgb(63, 60, 85)' }}
    >
      <Header />
      <main className="flex-1 w-full p-4 mx-auto overflow-auto md:mx-4 md:my-8">
        {props.children}
      </main>
    </div>
  );
}

export default Layout;

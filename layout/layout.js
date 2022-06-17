const Layout = ({ children }) => {
  return (
    <>
      <h1>Header</h1>
      <main>{children}</main>
      <h1>Footer</h1>
    </>
  );
};

export default Layout;

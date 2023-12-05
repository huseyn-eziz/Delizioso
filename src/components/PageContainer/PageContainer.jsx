import Header from "../Header/Header";

const PageContainer = ({children}) => {
  return (
    <>
      <Header />
      <main className="container max-w-[1200px] mx-auto">{children}</main>
    </>
  );
};

export default PageContainer;

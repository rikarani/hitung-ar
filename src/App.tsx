import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Main from "@/components/Main";

export default function App(): React.JSX.Element {
  return (
    <Layout>
      <Header />
      <Main />
    </Layout>
  );
}

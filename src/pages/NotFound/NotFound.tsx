import { Link } from "react-router-dom";

import Layout from "../../components/Layout/Layout";
import Title from "../../components/Title/Title";

export default function NotFound() {
  return (
    <Layout isHeader={false}>
      <Title text="Page not found | 404" />
      <Link to="/">Go to home</Link>
    </Layout>
  );
}

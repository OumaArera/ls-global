import { Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Companies from '@/pages/Companies';
import CompanyDetail from '@/pages/CompanyDetail';
import Leadership from '@/pages/Leadership';
import PersonDetail from '@/pages/PersonDetail';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="companies" element={<Companies />} />
        <Route path="companies/:slug" element={<CompanyDetail />} />
        <Route path="leadership" element={<Leadership />} />
        <Route path="leadership/:slug" element={<PersonDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

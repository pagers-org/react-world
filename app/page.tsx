import ArticleList from '@/components/article/ArticleList';
import Banner from '@/components/layouts/Banner';
import SideBar from '@/components/layouts/SideBar';
import { container } from '@/styles/layout.css';

export default function Page() {
  return (
    <>
      <Banner />
      <main className={container}>
        <div>
          <ArticleList />
          <SideBar />
        </div>
      </main>
    </>
  );
}

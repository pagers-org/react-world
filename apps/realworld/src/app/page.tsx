import { PopularTags } from '@/widgets/tags';
import { FeedToggle } from '@/widgets/tab';
import { ArticleList } from '@/widgets/article';
import { responsiveWidth } from '@/shared/css/responsive-width';

export default function Home() {
  return (
    <div className="home-page">
      <div className="p-32 mb-32 text-white bg-green600">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-[3.5rem] [text-shadow:_0_1px_3px_rgb(0_0_0_/0.3)]">conduit</h1>
          <p className="font-light text-[1.5rem]">A place to share your knowledge.</p>
        </div>
      </div>

      <div className={`w-[calc(100%_-_30px)] mx-auto ${responsiveWidth}`}>
        <div className="flex gap-30">
          <div className="flex-[0_0_75%]">
            <FeedToggle />

            <ArticleList />
          </div>

          <div className="flex-[0_0_25%]">
            <div className="px-10 pt-5 pb-5 bg-gray500 rounded-[4px] flex flex-col gap-4">
              <p>Popular Tags</p>
              <PopularTags />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

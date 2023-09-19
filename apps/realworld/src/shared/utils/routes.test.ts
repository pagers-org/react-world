import { PathBuilder } from './routes';

const context = describe;

describe('PathBuilder에서', () => {
  context('home path를 빌드할 때', () => {
    it('/ 경로가 생성된다.', () => {
      const homePath = PathBuilder.buildHome().getPath();

      expect(homePath).toEqual('/');
    });

    it('addPage로 경로가 생성된다.', () => {
      const page = 2;
      const homePathWithPageParam = PathBuilder.buildHome().addPage(page).getPath();

      expect(homePathWithPageParam).toEqual(`/?page=${page}`);
    });
  });

  context('register path를 빌드할 때 ', () => {
    it('/register 경로가 생성된다.', () => {
      const buildedPath = PathBuilder.buildRegister().getPath();

      expect(buildedPath).toEqual('/register');
    });
  });

  context('login path를 빌드할 때 ', () => {
    it('/login 경로가 생성된다.', () => {
      const buildedPath = PathBuilder.buildLogin().getPath();

      expect(buildedPath).toEqual('/login');
    });
  });

  context('article path를 빌드할 때', () => {
    it('addSlug로 경로가 생성된다.', () => {
      const slug = 'this is slug';
      const path = PathBuilder.buildArticle().addSlug(slug).getPath();

      expect(path).toEqual(`/article/${slug}`);
    });

    it('addSlug가 호출되지 않으면 에러가 발생한다.', () => {
      try {
        PathBuilder.buildArticle().getPath();
        expect(true).toBe(false);
      } catch (e) {
        expect(e).toBeInstanceOf(Error);
      }
    });

    it('addSlug가 호출되지 않으면 에러가 발생한다.', () => {
      try {
        PathBuilder.buildArticle().addSlug('1').addSlug('2').getPath();
        expect(true).toBe(false);
      } catch (e) {
        expect(e).toBeInstanceOf(Error);
      }
    });
  });
});

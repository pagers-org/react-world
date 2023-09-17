export class PathBuilder {
  private path: string;

  private constructor(path: string) {
    this.path = path;
  }

  static buildHome(): HomePathBuilder {
    return new HomePathBuilder('/');
  }

  static buildRegister(): PathBuilder {
    return new PathBuilder('/register');
  }

  static buildLogin(): PathBuilder {
    return new PathBuilder('/login');
  }

  static buildArticle(): ArticlePathBuilder {
    return new ArticlePathBuilder('/article');
  }
  getPath(): string {
    return this.path;
  }
}

class HomePathBuilder {
  private path: string;
  private params: string;
  constructor(path: '/') {
    this.path = path;
    this.params = '?';
  }

  private getParamsString() {
    if (this.params === '?') {
      return '';
    }
    return this.params;
  }

  addPage(page: number) {
    this.params += `page=${page}`;
    return this;
  }

  getPath() {
    return this.path + this.getParamsString();
  }
}

class ArticlePathBuilder {
  private path: string;
  private count: number;

  constructor(path: '/article') {
    this.path = path;
    this.count = 0;
  }

  addSlug(slug: string): ArticlePathBuilder {
    this.path += `/${slug}`;
    this.count += 1;
    return this;
  }

  getPath(): string {
    if (this.count !== 1) {
      throw new Error('article path must have slug or only once');
    }
    return this.path;
  }
}

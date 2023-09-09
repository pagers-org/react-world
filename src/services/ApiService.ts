import ky from 'ky';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export class ApiService {
  protected readonly instance;

  constructor() {
    this.instance = ky.create({ prefixUrl: API_BASE_URL });
  }
}

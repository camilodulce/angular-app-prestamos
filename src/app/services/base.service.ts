import { environment } from 'src/environments/environment';

export class BaseService {

    public apiUrl = environment.API_ENDPOINT;

    constructor() {
    }
}

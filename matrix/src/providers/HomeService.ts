
import { UtilitiesService } from './UtilitiesService';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
    constructor(private utilitiesService : UtilitiesService)
    {

    }

    GetHomeData(url)
    {
        return this.utilitiesService.Get(url);
    }
}

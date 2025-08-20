import { Inject, Injectable } from '@nestjs/common';
import type { IStrategyRepository } from './repository/strategy-repository.interface';

@Injectable()
export class UserStrategiesService {
    constructor(
        @Inject("StrategyRepository") private strategyRepository: IStrategyRepository
    ) { }

}

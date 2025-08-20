import { Module } from '@nestjs/common';
import { UserStrategiesService } from './user-strategies.service';
import StrategyRepository from './repository/strategy.repository';

@Module({
  providers: [
    UserStrategiesService,
    {
      provide: "StrategyRepository",
      useClass: StrategyRepository
    }
  ],
  exports: [UserStrategiesService, "StrategyRepository"]
})
export class UserStrategiesModule { }

import { CreateStrategyDto } from "../dto/create-strategy.dto";
import { Strategies } from "@/common/enums/strategies.enum";
import { UserStrategyEntity } from "../user-strategy.entity";

export interface IStrategyRepository {
    create(s: CreateStrategyDto): Promise<UserStrategyEntity>
    findByStrategy(s: { strategy: Strategies, strategyId: string }): Promise<UserStrategyEntity | null>
}

export type StrategyRepositoryParams = {
    [K in keyof IStrategyRepository]: Parameters<IStrategyRepository[K]>[0]
}
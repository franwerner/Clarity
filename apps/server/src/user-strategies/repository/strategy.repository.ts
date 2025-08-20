import { DatabaseService } from "@/database/database.service";
import { Injectable } from "@nestjs/common";
import { IStrategyRepository, StrategyRepositoryParams } from "./strategy-repository.interface";

@Injectable()
class StrategyRepository implements IStrategyRepository {
    constructor(private db: DatabaseService) { }

    create(s: StrategyRepositoryParams["create"]) {
        return this.db.userStrategy.create({ data: s })
    }

    findByStrategy(s: StrategyRepositoryParams["findByStrategy"]) {
        return this.db.userStrategy.findUnique({ where: { strategy_strategyId: s } })
    }
}

export default StrategyRepository
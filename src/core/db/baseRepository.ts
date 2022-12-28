import { AggregateRoot } from "../domain/aggregateRoot";
import { IBaseRepository } from "./iBaseRepository";
import { Mapper } from "../infra/mapper";

export abstract class BaseRepository<Aggregate extends AggregateRoot<any>>
  implements IBaseRepository<Aggregate>
{
  protected constructor(protected readonly mapper: Mapper<Aggregate>) {}

  async insert(entity: Aggregate): Promise<void> {
    const record = this.mapper.toPersistence(entity);
    return {} as any;
  }

  insertMany() {}

  delete(entity: Aggregate): Promise<boolean> {
    return {} as any;
  }

  findAll(): Promise<Aggregate[]> {
    return {} as any;
  }

  async findOneById(id: string): Promise<Aggregate> {
    return {} as any;
  }

  transaction<T>(handler: () => Promise<T>): Promise<T> {
    return {} as any;
  }
}

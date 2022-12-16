import { AggregateRoot } from "../domain/AggregateRoot";
import { BaseRepositoryPort } from "./BaseRepositoryPort";

export abstract class BaseRepository<Aggregate extends AggregateRoot<any>>
  implements BaseRepositoryPort<Aggregate>
{
  create(entity: Aggregate): Promise<void> {}

  delete(entity: Aggregate): Promise<boolean> {}

  findAll(): Promise<Aggregate[]> {}

  findOneById(id: string): Promise<Aggregate> {}

  transaction<T>(handler: () => Promise<T>): Promise<T> {}
}
export interface IBaseRepository<Aggregate> {
  findOneById(id: string): Promise<Aggregate>;
  findAll(): Promise<Aggregate[]>;
  insert(aggregate: Aggregate): Promise<void>;
  delete(aggregate: Aggregate): Promise<boolean>;
  transaction<T>(handler: () => Promise<T>): Promise<T>;
}

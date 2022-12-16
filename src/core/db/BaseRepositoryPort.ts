export interface BaseRepositoryPort<Entity> {
  create(entity: Entity): Promise<void>;
  findOneById(id: string): Promise<Entity>;
  findAll(): Promise<Entity[]>;
  delete(entity: Entity): Promise<boolean>;
  transaction<T>(handler: () => Promise<T>): Promise<T>;
}

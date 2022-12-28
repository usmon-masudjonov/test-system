import { Entity } from "./entity";

export interface Mapper<DomainEntity extends Entity<any>, DbRecord, Response> {
  toPersistance(entity: DomainEntity) {}

  toDomain(record: any) {}

  toDTO(entity: DomainEntity) {}
}

import { Entity } from "../domain/entity";

export interface Mapper<DomainEntity extends Entity<any>, Response = any> {
  toPersistence(entity: DomainEntity): any;
  toDomain(record: any): DomainEntity;
  toResponse(entity: DomainEntity): Response;
}

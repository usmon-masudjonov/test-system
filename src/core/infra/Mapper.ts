export abstract class Mapper<DomainEntityOrValueObject> {
  public abstract toDomain(raw: any): DomainEntityOrValueObject;
  public abstract toPersistence(
    domainEntityOrValueObject: DomainEntityOrValueObject
  ): any;
}

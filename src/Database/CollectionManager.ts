import { Inject } from '@nestjs/common';
import { DocumentClient } from './DocumentClient';

export class CollectionManager<T> {
  constructor(
    @Inject('DocumentClient')
    private readonly documentClient: DocumentClient<T>,
  ) {}

  public getAll(): T {
    return this.documentClient.getAll();
  }
}

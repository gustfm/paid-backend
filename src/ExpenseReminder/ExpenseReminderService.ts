import { Injectable } from '@nestjs/common';
import { CollectionManager } from 'Database/CollectionManager';
import { ExpenseReminder } from './ExpenseReminder';

@Injectable()
export class ExpenseReminderService {
  private collectionManager: CollectionManager<ExpenseReminder[]>;

  constructor(collectionManager: CollectionManager<ExpenseReminder[]>) {
    this.collectionManager = collectionManager;
}

  public getAll(): ExpenseReminder[] {
    return this.collectionManager.getAll();
  }
}

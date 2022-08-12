import { Injectable } from '@nestjs/common';
import { CollectionManager } from 'Database/CollectionManager';
import { ExpenseReminder } from './ExpenseReminder';

@Injectable()
export class ExpenseReminderService {
  private collectionManager: CollectionManager<ExpenseReminder[]>;

  constructor(collectionManager: CollectionManager<ExpenseReminder[]>) {
    this.collectionManager = collectionManager;
  }

  public getAllRemindersSettings(): ExpenseReminder[] {
    const items: ExpenseReminder[] = this.collectionManager.getAll();
    return items.map((i) => {
      delete i.bills;
      return i;
    });
  }

  public getLastReminder(): ExpenseReminder {
    return;
  }

  public createNextReminder(): ExpenseReminder {

  }
}

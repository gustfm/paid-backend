import { Module } from '@nestjs/common';
import { CollectionManager } from 'Database/CollectionManager';

import { ExpenseReminderController } from './ExpenseReminderController';
import { ExpenseReminderService } from './ExpenseReminderService';

@Module({
  controllers: [ExpenseReminderController],
  providers: [ExpenseReminderService, CollectionManager],
  exports: [ExpenseReminderService],
})
export class ExpenseReminderModule {}

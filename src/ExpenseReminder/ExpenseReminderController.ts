import { Controller, Get, Post } from '@nestjs/common';
import { ExpenseReminder } from './ExpenseReminder';

import { ExpenseReminderService } from './ExpenseReminderService';

@Controller('/expense-reminder')
export class ExpenseReminderController {
  constructor(
    private readonly expenseReminderService: ExpenseReminderService,
  ) {}

  @Get()
  getAllRemindersSettings(): ExpenseReminder[] {
    return this.expenseReminderService.getAllRemindersSettings();
  }

  @Post()
  next(): ExpenseReminder {
    return this.expenseReminderService.createNextReminder();
  }
}

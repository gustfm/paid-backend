import { Controller, Get } from '@nestjs/common';
import { ExpenseReminder } from './ExpenseReminder';

import { ExpenseReminderService } from './ExpenseReminderService';

@Controller('/expense-reminder')
export class ExpenseReminderController {
  constructor(
    private readonly expenseReminderService: ExpenseReminderService,
  ) {}

  @Get()
  getAll(): ExpenseReminder[] {
    return this.expenseReminderService.getAll();
  }
}

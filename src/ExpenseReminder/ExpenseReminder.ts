import { PaymentBill } from './PaymentBill';

export class ExpenseReminder {
  public day: number;
  public startMonth: number;
  public endMonth: number;
  public bills: PaymentBill[];
}

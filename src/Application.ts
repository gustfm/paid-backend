import { Module } from '@nestjs/common';
import { ModuleMetadata } from '@nestjs/common/interfaces';
import { ApplicationConfigurationModule } from './Configuration/ApplicationConfigurationModule';
import { CollectionManagerModule } from './Database/CollectionManagerModule';
import { ExpenseReminderModule } from './ExpenseReminder/ExpenseReminderModule';

@Module(
  Application.moduleConfig({
    imports: [ApplicationConfigurationModule],
    controllers: [],
  }),
)
export class Application {
  static moduleConfig(additionalConfiguration: ModuleMetadata): ModuleMetadata {
    return {
      imports: [
        ExpenseReminderModule,
        CollectionManagerModule,
        ...additionalConfiguration.imports,
      ],
      controllers: [...additionalConfiguration.controllers],
    };
  }
}

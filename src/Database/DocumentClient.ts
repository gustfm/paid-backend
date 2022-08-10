import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class DocumentClient<T> {
  private raw: string = null;

  public readCollections(): void {
    this.raw = fs.readFileSync(
      `${process.cwd()}\\src\\Database\\db.json`,
      'utf-8',
    );
  }

  public getAll(): T {
    return JSON.parse(this.raw);
  }
}

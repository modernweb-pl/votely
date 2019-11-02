import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';
import { existsSync } from 'fs';
import { Config } from './config.interface';
import { environment } from './environment';

@Injectable()
export class ConfigService {
  private readonly config: Config;

  constructor(path: string) {
    const out = config({ path });

    if (out.error) {
      throw out.error;
    }

    this.config = {
      MONGO_URI: out.parsed.MONGO_URI,
    };
  }

  static factory(): ConfigService {
    const path = existsSync('.env') ? '.env' : `.env.${environment}`;

    return new ConfigService(path);
  }

  get(key: keyof Config): string {
    return this.config[key];
  }
}

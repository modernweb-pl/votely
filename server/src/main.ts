import { NestFactory } from '@nestjs/core';
import { getConnectionToken } from '@nestjs/mongoose';
import connectMongo from 'connect-mongo';
import session from 'express-session';
import { Connection } from 'mongoose';
import { AppModule } from './app.module';
import { ConfigService } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    credentials: true,
    origin: true,
  });

  const configService: ConfigService = app.get(ConfigService);

  const connection: Connection = app.get(getConnectionToken());
  const MongoStore = connectMongo(session);
  const sessionStore = new MongoStore({ mongooseConnection: connection });

  app.use(
    session({
      secret: String(configService.get('SESSION_SECRET')),
      resave: false,
      saveUninitialized: true,
      store: sessionStore,
    }),
  );

  await app.listen(configService.get('PORT'));
}

bootstrap();

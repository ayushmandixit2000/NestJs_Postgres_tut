import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'postgres',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
}
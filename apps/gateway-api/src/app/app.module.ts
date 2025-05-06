import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TaxReportModule } from './tax-report/tax-report.module';

const isProduction = process.env.NODE_ENV === 'production';
const playground = !isProduction;
const autoSchemaFile = isProduction ? true : 'graphql/gateway-api/schema.gql';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile,
      sortSchema: true,
      playground,
    }),
    TaxReportModule,
  ],
})
export class AppModule {}

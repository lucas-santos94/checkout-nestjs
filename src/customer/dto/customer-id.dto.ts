import { IsMongoId } from 'class-validator';

export class CustomerIdDto {
  @IsMongoId()
  customerId: string;
}

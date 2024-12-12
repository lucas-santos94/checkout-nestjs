import { IsOptional, IsString, Matches } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  street: string;

  @IsOptional()
  @IsString()
  number: string;

  @IsOptional()
  @IsString()
  complement?: string;

  @IsString()
  province: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  @Matches(/^[0-9]{8}$/, { message: 'postalCode must have exactly 8 digits' })
  postalCode: string;
}

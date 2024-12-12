import {
  IsString,
  IsOptional,
  IsBoolean,
  Length,
  IsEmail,
  IsPhoneNumber,
  Matches,
  IsObject,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateAddressDto } from '../../address/dto/create-address.dto';

export class CreateCustomerDto {
  @IsString()
  @Length(3, 100, { message: 'O nome deve conter de 3 a 100 dígitos' })
  name: string;

  @IsEmail({}, { message: 'Email inválido' })
  email: string;

  @IsPhoneNumber('BR', { message: 'Formato de telefone inválido' })
  phone: string;

  @Matches(/^\d{11}$/, { message: 'CPF deve conter exatamente 11 digitos' })
  cpf: string;

  @IsOptional()
  @IsBoolean()
  notificationDisabled: boolean;

  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}

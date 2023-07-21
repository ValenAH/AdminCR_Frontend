import { IdentificationType } from './identificationType.model';
export interface Customer {
  id: number
  identificationType : IdentificationType,
  identificationNumber: string,
  name: string,
  telephone: string,
  address: string
}

import argentina from '@vtex/phone/countries/ARG'

import { getPhoneFields } from '../modules/phone'
import regexValidation, { regexEmail } from '../modules/regexValidation'
import initialize from './initializeCountryPhone'
import { isPastDate } from '../utils/dateRules'

const phoneCountryCode = initialize(argentina)

export default {
  country: 'ARG',
  personalFields: [
    {
      name: 'firstName',
      maxLength: 100,
      label: 'firstName',
      required: true,
    },
    {
      name: 'lastName',
      maxLength: 100,
      label: 'lastName',
      required: true,
    },
    {
      name: 'email',
      maxLength: 100,
      label: 'email',
      required: true,
      validate: regexValidation(regexEmail),
    },
    {
      name: 'document',
      maxLength: 50,
      label: 'ARG_dni',
      required: true,
      validate: regexValidation(/^[A-z]?\d{6,8}$/),
    },
    {
      name: 'homePhone',
      maxLength: 30,
      label: 'homePhone',
      required: true,
      ...getPhoneFields(phoneCountryCode),
    },
    {
      name: 'gender',
      maxLength: 30,
      label: 'gender',
    },
    {
      name: 'birthDate',
      maxLength: 30,
      label: 'birthDate',
      type: 'date',
      validate: isPastDate,
    },
  ],
  businessFields: [
    {
      name: 'corporateName',
      maxLength: 100,
      label: 'corporateName',
      required: true,
    },
    {
      name: 'tradeName',
      maxLength: 100,
      label: 'tradeName',
      required: true,
    },
    {
      name: 'corporateDocument',
      maxLength: 30,
      label: 'ARG_cuit',
      required: true,
      validate: regexValidation(/^([\d]{2})?([\d]{8})?([\d]{1})$/),
    },
    {
      name: 'stateRegistration',
      maxLength: 50,
      label: 'stateRegistration',
      required: true,
    },
    {
      name: 'businessPhone',
      maxLength: 30,
      label: 'businessPhone',
      ...getPhoneFields(phoneCountryCode),
    },
  ],
}

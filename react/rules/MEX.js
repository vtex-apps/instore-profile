import mexico from '@vtex/phone/countries/MEX'

import { getPhoneFields } from '../modules/phone'
import regexValidation, { regexEmail } from '../modules/regexValidation'
import initialize from './initializeCountryPhone'
import { isPastDate } from '../utils/dateRules'

const phoneCountryCode = initialize(mexico)

export default {
  country: 'MEX',
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
      name: 'homePhone',
      maxLength: 30,
      label: 'homePhone',
      required: true,
      ...getPhoneFields(phoneCountryCode),
    },
    {
      name: 'document',
      maxLength: 50,
      label: 'MEX_rfc',
      validate: regexValidation(/^[a-zA-Z]{4}[0-9]{6}(?:[a-zA-Z0-9]{3}|)$/),
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
      name: 'document',
      maxLength: 50,
      label: 'MEX_rfc',
      required: true,
      validate: regexValidation(/^[a-zA-Z]{4}[0-9]{6}(?:[a-zA-Z0-9]{3}|)$/),
    },
    {
      name: 'corporateDocument',
      maxLength: 30,
      label: 'MEX_rfc_corporate',
      required: true,
      validate: regexValidation(/^[a-zA-Z]{3}[0-9]{6}[a-zA-Z0-9]{3}$/),
    },
    {
      name: 'tradeName',
      maxLength: 100,
      label: 'tradeName',
      required: true,
    },
    {
      name: 'businessPhone',
      maxLength: 30,
      label: 'businessPhone',
      ...getPhoneFields(phoneCountryCode),
    },
    {
      name: 'stateRegistration',
      maxLength: 50,
      label: 'stateRegistration',
      required: true,
    },
  ],
}

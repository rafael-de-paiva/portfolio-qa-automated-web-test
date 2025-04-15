import { faker } from '@faker-js/faker';

export default function gerarUsuario() {
  const gender = Math.random() < 0.5 ? 'male' : 'female';
  const countries = ['India', 'United States', 'Canada', 'Australia', 'Israel', 'New Zealand', 'Singapore'];
  
  return {
    email: faker.internet.email(),
    password: faker.internet.password(),
    username: faker.internet.username(),
    gender,
    firstName: faker.person.firstName(gender),
    lastName: faker.person.lastName(),
    day: String(Math.floor(Math.random() * 31) + 1),
    month: String(Math.floor(Math.random() * 12) + 1),
    year: String(Math.floor(Math.random() * (2021 - 1900 + 1)) + 1900),
    company: faker.company.name(),
    address1: faker.location.streetAddress(),
    address2: faker.location.city(),
    country: countries[Math.floor(Math.random() * countries.length)],
    state: faker.location.state(),
    city: faker.location.city(),
    zip: faker.location.zipCode(),
    number: faker.phone.number()
  };
}
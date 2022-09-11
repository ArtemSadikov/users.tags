import * as bcrypt from 'bcrypt';

export async function encodePassword(value: string) {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hash(value, salt);
}

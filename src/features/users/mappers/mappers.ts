import { WithId } from 'mongodb';
import {
  UsersRepoViewModel,
  UsersViewModel,
} from '../models/output/UsersViewModel';
import { UserDBType } from '../../../db/schemes/users.schemes';

export const userMapper = (userDb: any): UsersViewModel => {
  return {
    id: userDb.id,
    login: userDb.login,
    email: userDb.email,
    createdAt: userDb.createdAt,
  };
};

export const userDBMapper = (
  userDb: WithId<UserDBType>,
): UsersRepoViewModel => {
  return {
    id: userDb._id.toString(),
    accountData: {
      login: userDb.accountData.login,
      email: userDb.accountData.email,
      createdAt: userDb.accountData.createdAt,
      passwordHash: userDb.accountData.passwordHash,
      passwordSalt: userDb.accountData.passwordSalt,
    },
  };
};

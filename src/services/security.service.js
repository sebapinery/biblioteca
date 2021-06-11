import jwt from 'jwt-simple';
import moment from 'moment';

export const createToken = (user) => {
  const payload = {
    email: user.email,
    createdAt: moment().unix(),
    expiredAt: moment().add(60, 'minutes').unix(),
  };
  return jwt.encode(payload, process.env.JWT_ENCODE);
};

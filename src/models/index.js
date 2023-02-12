// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Memo, Note } = initSchema(schema);

export {
  Memo,
  Note
};
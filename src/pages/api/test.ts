import type { NextApiRequest, NextApiResponse } from 'next';
import { appRouter } from '~/server/api/root';
import {  createTRPCContext } from '~/server/api/trpc'

const TestEndpoint = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const context = createTRPCContext({ req, res });
  const caller = appRouter.createCaller(context);

  const data = await caller.setDomainOwner({
    domain: 'asd.com',
    owner: '0x15e59698A92F844f24ce2AFe8F0b494CeBc836f3',
  });

  res.status(200).json(data);
};

export default TestEndpoint
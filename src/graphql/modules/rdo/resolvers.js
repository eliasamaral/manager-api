import RDO from "../../../models/RDO";

export default {
  Query: {
    getRDOS: async () => await RDO.find(),

  },
  Mutation: {
    createRDO: (_, { data }) => RDO.create(data),
  },
};

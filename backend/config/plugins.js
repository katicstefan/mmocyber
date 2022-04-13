module.exports = {
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 9,
      defaultLimit: 10,
      apolloServer: {
        tracing: false,
      },
    },
  },
};

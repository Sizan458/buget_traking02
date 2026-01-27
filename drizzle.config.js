
/** @type { import("drizzle-kit").Config } */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    schema: "./ulits/Schema.jsx",
    dialect: 'postgresql',
    dbCredentials: {
      url:process.env.DATA_BASE,
    }
  } 

  
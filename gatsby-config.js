require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      // The name of the plugin
      resolve: 'gatsby-source-mongodb',
      options: {
        // Name of the database and collection where are books reside
        dbName: 'test',
        collection: 'products',
        server: {
          address: 'twopointoh.0lxmxaq.mongodb.net',
          port: 27017
        },
        auth: {
          user: '',
          password: ''
        },
        extraParams: {
          replicaSet: 'twopointoh',
          ssl: true,
          authSource: 'admin',
          retryWrites: true,
          w: 'majority',
        }
      }
    },
  ],
};
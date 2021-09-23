/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

function SiteMetadata ({
  description = '',
  lang = 'en',
  meta = [],
  keywords = [],
  title,
  indexed = false
}) {
  const defaultMetadata = {}
  const metaDescription = description || defaultMetadata.description
  const seoImage = `${process.env.GATSBY_SITE_URL}/${defaultMetadata.image}`
  const twitterImage = `${process.env.GATSBY_SITE_URL}/${defaultMetadata.twitter}`

  return (
    <Helmet
      defer={false}
      htmlAttributes={{ lang }}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:image`,
          content: seoImage
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`
        },
        {
          name: `twitter:site`,
          content: `@xteam`
        },
        {
          name: `twitter:creator`,
          content: defaultMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        },
        {
          name: `image`,
          content: seoImage
        },
        {
          name: `twitter:image`,
          content: twitterImage
        }
      ]
        .concat(
          keywords.length > 0
            ? {
              name: 'keywords',
              content: keywords.join(', ')
            }
            : []
        )
        .concat(
          indexed
            ? []
            : {
              name: 'robots',
              content: 'noindex,nofollow'
            }
        )
        .concat(meta)}
    />
  )
}

SiteMetadata.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  indexed: PropTypes.bool
}

export default SiteMetadata

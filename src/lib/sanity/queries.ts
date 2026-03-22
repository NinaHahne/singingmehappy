export const concertsQuery = `
  *[_type == "concert"] | order(date asc) {
    _id,
    date,
    timeLabel,
    title,
    description,
    location,
    mapsUrl,
    links[]{
      label,
      url
    },
    flyerImage{
      alt,
      asset,
      crop,
      hotspot
    }
  }
`;

export const choirMembersQuery = `
  *[_type == "choirMember"] | order(voiceType asc, sortOrder asc) {
    _id,
    name,
    voiceType,
    subtitle,
    text,
    sortOrder,
    image {
      asset,
      alt
    }
  }
`;

export const newsQuery = `
  *[_id == "news"][0]{
    _id,
    title,
    content[]{
      ...,
      markDefs[]{
        ...
      }
    },
    _updatedAt
  }
`;

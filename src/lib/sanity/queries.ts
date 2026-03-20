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

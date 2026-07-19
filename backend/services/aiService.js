const generateDescription = async (name, location, amenities) => {
  return `
🏡 ${name} – Your Perfect Mountain Escape

Nestled in ${location}, ${name} offers a peaceful retreat with ${amenities}. Guests can enjoy breathtaking views, modern comforts, and a relaxing atmosphere. Whether you're planning a family vacation, a romantic getaway, or a solo trip, this homestay provides a memorable experience with exceptional hospitality and cozy accommodation.
`;
};

module.exports = {
  generateDescription,
};
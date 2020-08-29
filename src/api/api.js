const rootUrl = process.env.REACT_APP_API_URL;


async function getImages(searchString, startIndex) {
  const url = new URL(rootUrl);
  url.searchParams.append('q', searchString);
  url.searchParams.append('start', startIndex);

  let result;

  try {
    const response = await fetch(url.href);
    const body = await response.json();;
    const { status, ok } = response;

    const items = body.items.map(i => {
      return {
        title: i.title,
        imgLink: i.link,
        contextLink: i.image.contextLink,
      };
    });

    result = {
      ok,
      status,
      items,
    };
  } catch(e) {
    console.error(e)
    throw new Error('Error getting images');
  }
  
  return result;
}


export {
  getImages,
};
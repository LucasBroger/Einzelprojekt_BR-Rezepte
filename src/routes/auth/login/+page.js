/** @type {import('./$types').PageLoad} */
export function load({ url }) {
  return {
    registered: url.searchParams.get('registered') === '1'
  };
}
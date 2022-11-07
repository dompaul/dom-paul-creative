export async function getInstaPosts() {
  const url = `https://graph.instagram.com/me/media?fields=id,permalink,media_type,media_url&access_token=${process.env.IG_ACCESS_TOKEN}&limit=18`;
  const result = await fetch(url);
  return result.json();
}

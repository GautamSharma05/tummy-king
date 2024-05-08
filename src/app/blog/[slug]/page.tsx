import Post from "@/components/Post/Post";
import { SanityDocument } from "@sanity/client";
import { client } from "../../../../sanity/lib/client";
import { postPathsQuery, postQuery } from "../../../../sanity/lib/queries";
import { sanityFetch } from "../../../../sanity/lib/fetch";

export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery);
  return posts;
}
export default async function BlogPage({ params }: { params: any }) {
  const post = await sanityFetch<SanityDocument>({ query: postQuery, params });
  return <Post post={post} />;
}

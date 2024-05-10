"use client"
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";

const builder = imageUrlBuilder(client);

const Post = ({ post }: { post: SanityDocument }) => {
  return (
    <main className="container mx-auto prose prose-xl px-4 py-16">
      <h1 className="text-2xl font-semibold mb-4">{post.title}</h1>
      {post?.mainImage ? (
        <Image
        className="mx-auto"
          src={builder.image(post.mainImage).width(300).height(300).url()}
          alt={post?.mainImage?.alt}
          width={500}
          height={300}
        />
      ) : null}

      {post?.body ? <PortableText value={post.body} /> : null}
    </main>
  )
}

export default Post
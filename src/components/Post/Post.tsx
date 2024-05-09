"use client";

import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import Header from "../Header/Header";

const builder = imageUrlBuilder(client);

const Post = ({ post }: { post: SanityDocument }) => {
  return (
    <>
      <Header />
      <main className="container mx-auto prose prose-xl px-4 py-16">
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        {post?.mainImage ? (
          <Image
            src={builder.image(post.mainImage).width(300).height(300).url()}
            alt={post?.mainImage?.alt}
            width={300}
            height={300}
          />
        ) : null}
        {post?.body ? <PortableText value={post.body} /> : null}
      </main>
    </>
  );
};

export default Post;

"use client"
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";

const builder = imageUrlBuilder(client);

const Post = ({ post }: { post: SanityDocument }) => {
  console.log(post);
  
  return (
    <main className="container mx-auto prose prose-xl px-4 py-3">
      <h1 className="text-2xl font-semibold mb-4">{post.title}</h1>
      {post?.mainImage ? (
        <div className="mx-auto mb-5 relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
        <Image
          className="object-cover object-left lg:object-center"
          src={builder.image(post.mainImage).width(600).height(600).url()}
          alt={post?.mainImage?.alt}
          fill
        />
        </div>
      ) : null}

      {post?.body ? <PortableText value={post.body}/> : null}
    </main>
  )
}
const components = {
  list: {
    
  },
  block: {
    h1: ({children}: {children: React.ReactNode}) => <h1 className="text-2xl">{children}</h1>,
    blockquote: ({children}: {children: React.ReactNode}) => <blockquote className="border-l-purple-500">{children}</blockquote>,

    customHeading: ({children}: {children: React.ReactNode}) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },
}
export default Post
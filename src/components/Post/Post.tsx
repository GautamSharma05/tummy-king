"use client";
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { PortableTextBlock } from "sanity";
import { PortableTextComponents } from "next-sanity";
import Link from "next/link";

type CustomComponents = {
  block: {
    h1: PortableTextBlock;
    h2: PortableTextBlock;
    h3: PortableTextBlock;
    h4: PortableTextBlock;
    blockquote: PortableTextBlock;
  };
  // Add other types as needed
};

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

      {post?.body ? (
        <PortableText value={post.body} components={components} />
      ) : null}
    </main>
  );
};
const components: PortableTextComponents = {
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-2 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-3 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-3 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl py-3 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-3 font-bold">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),
  },
  marks: {
    em: ({ children }: any) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),
    strong: ({ children }: any) => (
      <strong className="text-xl py-4 font-bold">{children}</strong>
    ),
    link: ({ value, children }: any) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      const rel = (value?.href || "").startsWith("http")
        ? "noopener noreferrer"
        : undefined;
      return (
        <Link
          className="underline decoration-primary text-primary hover:decoration-black"
          href={value?.href}
          target={target}
          rel={rel}
        >
          {children}
        </Link>
      );
    },
  },
};

export default Post;

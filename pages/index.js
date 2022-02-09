import Link from "next/link";
import Image from "next/image";
import { getFeaturedProducts } from "../lib/notion";

export default function Home({ products }) {
  return (
    <>
      <div
        className="py-48 flex flex-col items-center justify-center text-gray-800 space-y-5"
        style={{
          backgroundColor: "#faf5ff",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%239C92AC' fill-opacity='0.26'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <h1 className="text-4xl font-medium">Welcome to Foxy Store</h1>
        <p className="max-w-2xl mx-6 text-center text-gray-800">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, ipsa.
        </p>
        <Link href="/products">
          <a className="py-3 px-8 bg-gray-800 rounded text-gray-50 hover:bg-opacity-90">
            Shop Now
          </a>
        </Link>
      </div>

      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          New Arrivals
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link
              key={product.Slug.rich_text[0].plain_text}
              href={`/products/${product.Slug.rich_text[0].plain_text}`}
            >
              <a>
                <div className="group w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <Image
                    src={
                      product["Image URL"].url
                        ? product["Image URL"].url
                        : product.Image.files[0].file.url
                    }
                    alt={product.Name.title[0].plain_text}
                    layout="fill"
                    className="object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">
                  {product.Name.title[0].plain_text}
                </h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  ${product.Price.number}
                </p>
              </a>
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
        <div
          className="py-40 flex flex-col items-center justify-center text-gray-800 space-y-5 rounded-lg"
          style={{
            backgroundColor: "#faf5ff",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%239C92AC' fill-opacity='0.26'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        >
          <h1 className="text-4xl font-medium">About Us</h1>
          <p className="max-w-2xl mx-6 text-center text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
            doloribus fugit! Cumque nisi eligendi blanditiis perspiciatis! Nisi
            iusto eligendi non nostrum reprehenderit, aliquam incidunt at, ipsam
            beatae accusamus ab fugit.
          </p>
          <Link href="/about">
            <a className="py-3 px-8 bg-gray-800 rounded text-gray-50 hover:bg-opacity-90">
              Learn more
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const products = await getFeaturedProducts();

  return {
    props: {
      products: products.map((product) => product.properties),
    },
  };
};

import Link from "next/link";
import Image from "next/image";
import { getAllProducts } from "../../lib/notion";

export default function Products({ products }) {
  return (
    <>
      <div className="max-w-2xl mx-auto py-6 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-medium">Shop All</h2>

        <div className="mt-16 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
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
    </>
  );
}

export const getStaticProps = async () => {
  const products = await getAllProducts();

  return {
    props: {
      products: products.map((product) => product.properties),
    },
  };
};

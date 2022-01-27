import Link from "next/link";
import Image from "next/image";
import {
  getAllProducts,
  getProductBySlug,
  getOtherProducts,
} from "../../lib/notion";

export default function ProductDetails({ product, otherProducts }) {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="lg:grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-16">
        <div className="lg:col-span-4">
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image
              src={product.Image.files[0].file.url}
              alt={product.Name.title[0].plain_text}
              layout="fill"
              className="object-center object-cover"
            />
          </div>
        </div>
        <div className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:col-span-3">
          <div className="flex flex-col-reverse">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                {product.Name.title[0].plain_text}
              </h1>
              <h2 className="mt-2 text-2xl font-medium text-gray-900 sm:text-3xl">
                ${product.Price.number}
              </h2>
            </div>
          </div>
          <p className="text-gray-500 mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi
            omnis beatae. Enim modi, facilis dolores, magni ab neque earum atque
            sed excepturi ad ipsam ratione laborum possimus natus vel!
          </p>

          <form
            action={`https://${process.env.NEXT_PUBLIC_FOXY_SUBDOMAIN}.foxycart.com/cart`}
            method="POST"
            className="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2"
          >
            <input
              type="hidden"
              name="name"
              value={product.Name.title[0].plain_text}
            />
            <input type="hidden" name="price" value={product.Price.number} />
            <input
              type="hidden"
              name="quantity_max"
              value={product.Inventory.number}
            />
            <input
              type="hidden"
              name="image"
              value={product.Image.files[0].file.url}
            />
            <input
              type="hidden"
              name="code"
              value={product.Slug.rich_text[0].plain_text}
            />

            <input
              type="number"
              name="quantity"
              defaultValue="1"
              min="1"
              max={product.Inventory.number}
              placeholder="Quantity"
              className="border rounded-md py-3 px-6"
            />
            <button
              type="submit"
              className="w-full bg-gray-900 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-500"
            >
              Add to Bag
            </button>

            {product.Inventory.number < 5 && (
              <p className="text-red-600">
                Only {product.Inventory.number} left!
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="max-w-2xl mx-auto mt-24 lg:mt-32 lg:max-w-none">
        <div className="flex items-center justify-between space-x-4">
          <h2 className="text-lg font-medium text-gray-900">
            Customers also viewed
          </h2>
          <Link href="/products">
            <a className="whitespace-nowrap text-sm font-medium text-gray-900 hover:text-gray-700">
              View all<span aria-hidden="true"> →</span>
            </a>
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          {otherProducts.map((product) => (
            <div
              className="relative group"
              key={product.Slug.rich_text[0].plain_text}
            >
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={product.Image.files[0].file.url}
                  alt={product.Name.title[0].plain_text}
                  layout="fill"
                  className="object-center object-cover group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8">
                <h3>
                  <Link
                    href={`/products/${product.Slug.rich_text[0].plain_text}`}
                  >
                    <a>
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      {product.Name.title[0].plain_text}
                    </a>
                  </Link>
                </h3>
                <p>${product.Price.number}</p>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                {product.Category.select.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const product = await getProductBySlug(params.slug);
  const otherProducts = await getOtherProducts(params.slug);

  return {
    props: {
      product: product[0].properties,
      otherProducts: otherProducts.map((product) => product.properties),
    },
  };
}

export async function getStaticPaths() {
  const products = await getAllProducts();

  return {
    paths: products.map((product) => ({
      params: { slug: product.properties.Slug.rich_text[0].plain_text },
    })),
    fallback: false,
  };
}

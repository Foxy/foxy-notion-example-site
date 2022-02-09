import * as FoxySDK from "@foxy.io/sdk";

const signer = new FoxySDK.Backend.Signer(process.env.FOXY_STORE_SECRET);

export function getFoxyForm(product) {
  const formHtml = `
    <form
      action="https://${
        process.env.NEXT_PUBLIC_FOXY_SUBDOMAIN
      }.foxycart.com/cart"
      method="POST"
      class="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2"
    >
      <input
        type="hidden"
        name="name"
        value="${product.Name.title[0].plain_text}"
      />
      <input type="hidden" name="price" value="${product.Price.number}" />
      <input
        type="hidden"
        name="quantity_max"
        value="${product.Inventory.number}"
      />
      <input
        type="hidden"
        name="image"
        value="${
          product["Image URL"].url
            ? product["Image URL"].url
            : product.Image.files[0].file.url
        }"
      />
      <input
        type="hidden"
        name="code"
        value="${product.Slug.rich_text[0].plain_text}"
      />

      <input
        type="number"
        name="quantity"
        value=""
        min="1"
        max="${product.Inventory.number}"
        placeholder="Quantity"
        class="border rounded-md py-3 px-6"
      />
      <button
        type="submit"
        class="w-full bg-gray-900 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-500"
      >
        Add to Bag
      </button>
    </form>
  `;

  return process.env.FOXY_STORE_SECRET ? signer.signHtml(formHtml) : formHtml;
}

import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const databaseId = process.env.NOTION_DATABASE_ID;

export const getAllProducts = async () => {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          timestamp: "created_time",
          direction: "ascending",
        },
      ],
    });

    return response.results;
  } catch (error) {
    console.error(error);
  }
};

export const getFeaturedProducts = async () => {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "New Arrival",
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          timestamp: "created_time",
          direction: "ascending",
        },
      ],
    });

    return response.results;
  } catch (error) {
    console.error(error);
  }
};

export const getProductBySlug = async (slug) => {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Slug",
        text: {
          equals: slug,
        },
      },
    });

    return response.results;
  } catch (error) {
    console.error(error);
  }
};

export const getOtherProducts = async (slug) => {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Slug",
        text: {
          does_not_equal: slug,
        },
      },
      sorts: [
        {
          timestamp: "created_time",
          direction: "ascending",
        },
      ],
      page_size: 4,
    });

    return response.results;
  } catch (error) {
    console.error(error);
  }
};

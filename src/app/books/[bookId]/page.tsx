import client from "@/lib/wix";

export default async function BookPage({
    params,
}: {
    params: { bookId: string };
}) {
     const {data: book } = await client.dataItems.queryDataItems(params, bookId);
//   const result = await client.dataItems.queryDataItems({
//     dataCollectionId: "Books",
//   }).find();

//   const bookItems = result.items;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20">
      <h1 className="text-2xl font-bold">Books</h1>
      {/* <pre>{JSON.stringify(bookItems, null, 2)}</pre> */}
    </div>
  );
}

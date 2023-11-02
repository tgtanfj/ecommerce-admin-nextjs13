import prismadb from "@/lib/prismadb";
import CategoryForm from "./_components/category-form";
import BillboardForm from "./_components/category-form";

const CategoryIdPage = async ({
  params,
}: {
  params: { categoryId: string; storeId: string };
}) => {
  const category = await prismadb.category.findUnique({
    where: {
      id: params.categoryId,
    },
  });

  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm billboards={billboards} initialData={category} />
      </div>
    </div>
  );
};

export default CategoryIdPage;

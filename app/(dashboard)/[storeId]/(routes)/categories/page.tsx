import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import { CategoryColumn } from "./_components/columns";
import CategoryClient from "./_components/client";

const CategoryPage = async ({ params }: { params: { storeId: string } }) => {
  const Categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      billboard: true
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formatedCategories: CategoryColumn[] = Categories.map((item) => ({
    id: item.id,
    name: item.name,
    billboardLabel: item.billboard.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy")
  }));

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <CategoryClient data={formatedCategories} />
    </div>
  );
};

export default CategoryPage;

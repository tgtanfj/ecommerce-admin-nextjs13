import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import { SizeColumn } from "./_components/columns";
import SizeClient from "./_components/client";

const SizesPage = async ({ params }: { params: { storeId: string } }) => {
  const sizes = await prismadb.size.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formatedSizes: SizeColumn[] = sizes.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(item.createdAt, "MMMM do, yyyy")
  }));

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <SizeClient data={formatedSizes} />
    </div>
  );
};

export default SizesPage;

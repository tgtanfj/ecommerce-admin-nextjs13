"use client";

import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { useParams, useRouter } from "next/navigation";
import { OrdersColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

interface OrderClientProps {
  data: OrdersColumn[];
}

const OrderClient = ({ data }: OrderClientProps) => {

  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage orders for you store"
      />
      <Separator />
      <DataTable columns={columns} data={data} searchKey="product" />
    </>
  );
};

export default OrderClient;

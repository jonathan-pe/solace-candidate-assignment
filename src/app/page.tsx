"use client";

import { useCallback, useEffect, useState } from "react";
import AdvocateTable from "@/app/_components/AdvocateTable";
import { Advocate } from "@/types/advocates";
import { TableProps } from "antd";
import { FilterValue } from "antd/es/table/interface";

export default function Home() {
  const [advocates, setAdvocates] = useState([]);

  const fetchAdvocates = useCallback(
    async (
      pagination?: any,
      filters?: Record<string, FilterValue | null>,
      sorter?: any
    ) => {
      console.log("Fetching advocates", { pagination, filters, sorter });

      // Here you would typically make an API call to fetch pages of filtered advocates
      // For now, we'll just simulate it with the existing data
      const response = await fetch("/api/advocates");
      const json = await response.json();
      setAdvocates(json.data);
    },
    []
  );

  useEffect(() => {
    fetchAdvocates();
  }, [fetchAdvocates]);

  const onChange: TableProps<Advocate>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("Table changed:", { pagination, filters, sorter, extra });

    // refetch API data with new filters or pagination here
    fetchAdvocates(pagination, filters, sorter);
  };

  return (
    <main className="flex flex-col p-8 gap-4">
      <h1 className="text-2xl font-bold">Solace Advocates</h1>

      <AdvocateTable advocates={advocates} onChange={onChange} />
    </main>
  );
}

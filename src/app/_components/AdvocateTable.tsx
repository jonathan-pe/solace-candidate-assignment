"use client";

import NumberFilterDropdown from "@/app/_components/NumberFilterDropdown";
import StringFilterDropdown from "@/app/_components/StringFilterDropdown";
import { Advocate } from "@/types/advocates";
import { Table, TableColumnsType, TableProps } from "antd";

const columns: TableColumnsType<Advocate> = [
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
    onFilter: (value, record) =>
      record.firstName.toLowerCase().includes((value as string).toLowerCase()),
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) =>
      StringFilterDropdown(setSelectedKeys, selectedKeys, confirm),
    sorter: (a, b) => a.firstName.localeCompare(b.firstName),
    width: 1,
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
    onFilter: (value, record) =>
      record.lastName.toLowerCase().includes((value as string).toLowerCase()),
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) =>
      StringFilterDropdown(setSelectedKeys, selectedKeys, confirm),
    sorter: (a, b) => a.lastName.localeCompare(b.lastName),
    width: 1,
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
    onFilter: (value, record) =>
      record.city.toLowerCase().includes((value as string).toLowerCase()),
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) =>
      StringFilterDropdown(setSelectedKeys, selectedKeys, confirm),
    sorter: (a, b) => a.city.localeCompare(b.city),
    width: 1,
  },
  {
    title: "Degree",
    dataIndex: "degree",
    key: "degree",
    onFilter: (value, record) =>
      record.degree.toLowerCase().includes((value as string).toLowerCase()),
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) =>
      StringFilterDropdown(setSelectedKeys, selectedKeys, confirm),
    sorter: (a, b) => a.degree.localeCompare(b.degree),
    width: 1,
  },
  {
    title: "Specialties",
    dataIndex: "specialties",
    key: "specialties",
    onFilter: (value, record) =>
      record.specialties
        .join(",")
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) =>
      StringFilterDropdown(setSelectedKeys, selectedKeys, confirm),
    render: (specialties) => specialties.join(", "),
    width: 700,
  },
  {
    title: "Years of Experience",
    dataIndex: "yearsOfExperience",
    key: "yearsOfExperience",
    onFilter: (value, record) => record.yearsOfExperience >= (value as number),
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) =>
      NumberFilterDropdown(setSelectedKeys, selectedKeys, confirm, "Min Years"),
    sorter: (a, b) => a.yearsOfExperience - b.yearsOfExperience,
    width: 1,
  },
  {
    title: "Phone Number",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
    width: 1,
  },
];

const AdvocateTable = ({
  advocates,
  onChange,
}: {
  advocates: Advocate[];
  onChange: TableProps<Advocate>["onChange"];
}) => {
  return (
    <Table
      bordered
      columns={columns}
      dataSource={advocates}
      onChange={onChange}
      pagination={{ position: ["topRight"] }}
      rowKey={(record) =>
        record.firstName + record.lastName + record.phoneNumber
      }
    />
  );
};

export default AdvocateTable;

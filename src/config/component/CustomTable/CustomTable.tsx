import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Tooltip,
  Badge,
  Link,
} from "@chakra-ui/react";

interface Column {
  field: string;
  title: string;
  sortable?: boolean;
  filterable?: boolean;
  badge?: boolean;
  tooltip?: boolean;
  link?: boolean;
  badgeColor?: string;
  action?: (row: any) => void;
}

interface Props {
  data: any[];
  columns: Column[];
}

const CustomTable: React.FC<Props> = ({ data, columns }) => {
  const [sortConfig, setSortConfig] = useState<{
    field: string;
    direction: string;
  }>({ field: "", direction: "" });
  const [filterValues, setFilterValues] = useState<{ [field: string]: string }>(
    {}
  );

  const handleSort = (field: string) => {
    if (sortConfig.field === field) {
      setSortConfig({
        field,
        direction: sortConfig.direction === "asc" ? "desc" : "asc",
      });
    } else {
      setSortConfig({ field, direction: "asc" });
    }
  };

  const handleFilterChange = (field: string, value: string) => {
    setFilterValues((prevValues) => ({ ...prevValues, [field]: value }));
  };

  const getSortedData = () => {
    if (sortConfig.field) {
      const sortedData = [...data].sort((a, b) => {
        const valueA = a[sortConfig.field];
        const valueB = b[sortConfig.field];

        if (valueA < valueB) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (valueA > valueB) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });

      return sortedData;
    }

    return data;
  };

  const getFilteredData = () => {
    const filteredData = getSortedData().filter((row) => {
      for (const field in filterValues) {
        const filterValue = filterValues[field];
        const cellValue = row[field];

        if (
          filterValue &&
          cellValue &&
          !cellValue.toString().includes(filterValue)
        ) {
          return false;
        }
      }
      return true;
    });

    return filteredData;
  };

  const sortedAndFilteredData = getFilteredData();

  return (
    <Table>
      <Thead>
        <Tr>
          {columns.map((column) => (
            <Th key={column.field}>
              {column.title}
              {column.sortable && (
                <Tooltip
                  label={
                    sortConfig.field === column.field
                      ? sortConfig.direction === "asc"
                        ? "Sorted in ascending order"
                        : "Sorted in descending order"
                      : "Sort"
                  }
                  placement="top"
                >
                  <span onClick={() => handleSort(column.field)}>
                    Sort Icon
                  </span>
                </Tooltip>
              )}
              {column.filterable && (
                <input
                  type="text"
                  placeholder="Filter"
                  value={filterValues[column.field] || ""}
                  onChange={(e) =>
                    handleFilterChange(column.field, e.target.value)
                  }
                />
              )}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {sortedAndFilteredData.map((row) => (
          <tr>
            {columns.map((column) => {
              const field = row[column.field];
              let content = field;
              if (
                column.link &&
                column.badge &&
                column.action &&
                column.tooltip
              ) {
                content = (
                  <Tooltip label={field}>
                    <Badge colorScheme={column.badgeColor}>
                      <Link href={field} onClick={() => column.action?.(row)}>
                        {content}
                      </Link>
                    </Badge>
                  </Tooltip>
                );
              } else if (column.link && column.badge && column.action) {
                content = (
                  <Badge colorScheme={column.badgeColor}>
                    <Link href={field} onClick={() => column.action?.(row)}>
                      {content}
                    </Link>
                  </Badge>
                );
              } else if (column.link && column.badge && column.tooltip) {
                content = (
                  <Tooltip label={field}>
                    <Badge colorScheme={column.badgeColor}>
                      <Link href={field}>{content}</Link>
                    </Badge>
                  </Tooltip>
                );
              } else if (column.link && column.action && column.tooltip) {
                content = (
                  <Tooltip label={field}>
                    <Link href={field} onClick={() => column.action?.(row)}>
                      {content}
                    </Link>
                  </Tooltip>
                );
              } else if (column.badge && column.action && column.tooltip) {
                content = (
                  <Tooltip label={field}>
                    <Badge colorScheme={column.badgeColor}>
                      <button onClick={() => column.action?.(row)}>
                        {content}
                      </button>
                    </Badge>
                  </Tooltip>
                );
              } else if (column.link && column.badge) {
                content = (
                  <Badge colorScheme={column.badgeColor}>
                    <Link href={field}>{content}</Link>
                  </Badge>
                );
              } else if (column.link && column.action) {
                content = (
                  <Link href={field} onClick={() => column.action?.(row)}>
                    {content}
                  </Link>
                );
              } else if (column.link && column.tooltip) {
                content = (
                  <Tooltip label={field}>
                    <Link href={field}>{content}</Link>
                  </Tooltip>
                );
              } else if (column.badge && column.action) {
                content = (
                  <Badge colorScheme={column.badgeColor}>
                    <button onClick={() => column.action?.(row)}>
                      {content}
                    </button>
                  </Badge>
                );
              } else if (column.badge && column.tooltip) {
                content = (
                  <Tooltip label={field}>
                    <Badge colorScheme={column.badgeColor}>{content}</Badge>
                  </Tooltip>
                );
              } else if (column.action && column.tooltip) {
                content = (
                  <Tooltip label={field}>
                    <button onClick={() => column.action?.(row)}>
                      {content}
                    </button>
                  </Tooltip>
                );
              } else if (column.link) {
                content = <Link href={field}>{content}</Link>;
              } else if (column.badge) {
                content = (
                  <Badge colorScheme={column.badgeColor}>{content}</Badge>
                );
              } else if (column.action) {
                content = (
                  <button onClick={() => column.action?.(row)}>
                    {content}
                  </button>
                );
              } else if (column.tooltip) {
                content = (
                  <Tooltip label={field}>
                    <span>{content}</span>
                  </Tooltip>
                );
              }

              return <Td key={column.field}>{content}</Td>;
            })}
          </tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default CustomTable;

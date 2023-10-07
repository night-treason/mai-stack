<script setup lang="ts">
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from "@tanstack/vue-table";
import {
  FlexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useVueTable,
} from "@tanstack/vue-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { h, ref } from "vue";
import { Product } from "@/interfaces/Product";
import { Button } from "@/components/ui/button";

const props = defineProps<{ products: Product[] }>();
const data = props.products;

console.log(data);

const columns: ColumnDef<Product[]>[] = [
  {
    accessorKey: "id",
    header: "Id",
    cell: ({ row }) => h("div", row.getValue("id")),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => h("div", row.getValue("name")),
  },
  {
    accessorKey: "color",
    header: "Color",
    cell: ({ row }) => h("div", row.getValue("color")),
  },
  {
    accessorKey: "weight",
    header: "Weight",
    cell: ({ row }) => h("div", row.getValue("weight")),
  },
  {
    accessorKey: "width",
    header: "Width",
    cell: ({ row }) => h("div", row.getValue("width")),
  },
  {
    accessorKey: "height",
    header: "Height",
    cell: ({ row }) => h("div", row.getValue("height")),
  },
  {
    accessorKey: "depth",
    header: "Depth",
    cell: ({ row }) => h("div", row.getValue("depth")),
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const price = Number.parseFloat(row.getValue("price"));

      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);

      return h("div", formatted);
    },
  },
  {
    id: "action",
    cell: ({ row }) => h(Button, {class: "bg-green-400 hover:bg-green-600 active:bg-green-900"}, ['Order']),
  },
];

const sorting = ref<SortingState>([]);
const columnFilters = ref<ColumnFiltersState>([]);
const columnVisibility = ref<VisibilityState>({});
const rowSelection = ref({});

const table = useVueTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
});
</script>

<template>
  <Table>
    <TableHeader>
      <TableRow
        v-for="headerGroup in table.getHeaderGroups()"
        :key="headerGroup.id"
      >
        <TableHead v-for="header in headerGroup.headers" :key="header.id">
          <FlexRender
            v-if="!header.isPlaceholder"
            :render="header.column.columnDef.header"
            :props="header.getContext()"
          />
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <template v-if="table.getRowModel().rows?.length">
        <TableRow
          v-for="row in table.getRowModel().rows"
          :key="row.id"
          :data-state="row.getIsSelected() && 'selected'"
        >
          <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
            <FlexRender
              :render="cell.column.columnDef.cell"
              :props="cell.getContext()"
            />
          </TableCell>
        </TableRow>
      </template>

      <TableRow v-else>
        <TableCell col-span="{columns.length}" class="h-24 text-center">
          No results.
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>

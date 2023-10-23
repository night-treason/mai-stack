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
import { DefineComponent, h, ref, render } from "vue";
import { CartProduct, Product } from "@/interfaces/Product";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import {
	FontAwesomeIcon,
	FontAwesomeIconProps,
} from "@fortawesome/vue-fontawesome";
import { Order } from "@/interfaces/Order";

const { orders } = defineProps<{ orders: Order[] }>();
const emit = defineEmits(["order-deleted"]);

const deleteHandler = async (id) => {
	try {
		await axios.delete("http://localhost:3000/orders/" + id);
		emit("order-deleted");
	} catch (error) {
		console.error(error);
	}
};

const columns: ColumnDef<Order, any>[] = [
	{
		accessorKey: "id",
		header: "Id",
		cell: ({ row }) => h("div", row.getValue("id")),
	},
	{
		accessorKey: "total_amount",
		header: "Amount",
		cell: ({ row }) => h("div", row.original.total_amount),
	},
	{
		accessorKey: "total_sum",
		header: "Sum",
		cell: ({ row }) => h("div", row.original.total_sum),
	},
	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => h("div", row.original.status),
	},
	{
		id: "action",
		cell: ({ row }) =>
			h(FontAwesomeIcon, {
				icon: faTrash,
				size: "lg",
				style: { color: "#67778d", cursor: "pointer" },
				onClick: () => deleteHandler(row.original.id),
			}),
	},
];

const sorting = ref<SortingState>([]);
const columnFilters = ref<ColumnFiltersState>([]);
const columnVisibility = ref<VisibilityState>({});
const rowSelection = ref({});

const table = useVueTable({
	data: orders,
	columns,
	initialState: {
		sorting: [{id: 'id', desc: false}]
	},
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

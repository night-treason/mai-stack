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

const { cartProducts } = defineProps<{ cartProducts: CartProduct[] }>();
const emit = defineEmits(["product-deleted", "amount-changed"]);

const deleteHandler = async (id) => {
	try {
		await axios.delete("http://localhost:3000/cart/products/" + id);
		emit("product-deleted");
	} catch (error) {
		console.error(error);
	}
};

const updateAmountHandler = async (
	id: number,
	quantityChange: number
) => {
	const inputData = {
		cart: 1,
		product: id,
		quantity: quantityChange,
	};

	await axios
		.post("http://localhost:3000/cart/products", inputData)
		.then((response) => {
			console.log(response.data);
		})
		.catch((error) => {
			console.error(error);
		});
	emit("amount-changed");
};

const columns: ColumnDef<CartProduct, any>[] = [
	{
		accessorKey: "id",
		header: "Id",
		cell: ({ row }) => h("div", row.getValue("id")),
	},
	{
		accessorKey: "name",
		header: "Name",
		cell: ({ row }) => h("div", row.original.product.name),
	},
	{
		accessorKey: "color",
		header: "Color",
		cell: ({ row }) => h("div", row.original.product.color),
	},
	{
		accessorKey: "weight",
		header: "Weight",
		cell: ({ row }) => h("div", row.original.product.weight),
	},
	{
		accessorKey: "width",
		header: "Width",
		cell: ({ row }) => h("div", row.original.product.width),
	},
	{
		accessorKey: "height",
		header: "Height",
		cell: ({ row }) => h("div", row.original.product.height),
	},
	{
		accessorKey: "depth",
		header: "Depth",
		cell: ({ row }) => h("div", row.original.product.depth),
	},
	{
		accessorKey: "price",
		header: "Price",
		cell: ({ row }) => {
			const price = row.original.product.price;

			const formatted = new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: "USD",
			}).format(price);

			return h("div", formatted);
		},
	},
	{
		accessorKey: "quantity",
		header: "Amount",
		cell: ({ row }) =>
			h("div", [
				h(FontAwesomeIcon, {
					icon: faMinus,
					size: "sm",
					style: { color: "#67778d", cursor: "pointer", paddingRight: "7px" },
					onClick: () => updateAmountHandler(row.original.product.id, -1),
				}),
				h("span", {style: {userSelect: 'none'}}, row.getValue("quantity")),
				h(FontAwesomeIcon, {
					icon: faPlus,
					size: "sm",
					style: { color: "#67778d", cursor: "pointer", paddingLeft: "7px" },
					onClick: () => updateAmountHandler(row.original.product.id, 1),
				}),
			]),
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
	data: cartProducts,
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

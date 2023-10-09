<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ref, onMounted } from "vue";
import axios from "axios";
import { Product } from "@/interfaces/Product";
import AddProduct from "@/components/products/AddProduct.vue";
import { Button } from "@/components/ui/button";
import { useStore } from "vuex";
import DataTable from "@/components/products/table/ProductsTable.vue";

const products = ref<Product[]>([]);

const mockProducts = [
  {
    id: 1,
    name: "Drawer",
    color: "Red",
    weight: 100,
    width: 200,
    height: 250,
    depth: 100,
    price: 2500,
  },
  {
    id: 2,
    name: "Drawer",
    color: "Red",
    weight: 100,
    width: 200,
    height: 250,
    depth: 100,
    price: 3100,
  },
  {
    id: 3,
    name: "Bed",
    color: "Green",
    weight: 100,
    width: 200,
    height: 250,
    depth: 100,
    price: 1990,
  },
  {
    id: 4,
    name: "Box",
    color: "Blue",
    weight: 233,
    width: 2010,
    height: 250,
    depth: 100,
    price: 1200,
  },
];

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:3000/products");
    products.value = response.data.results;
  } catch (error) {
    console.error(error);
  }
});

const store = useStore();

const handleButtonClick = (product) => {
  store.commit("addProduct", product);
};
</script>

<template>
  <!-- <Table>
    <TableCaption>List of products</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead class-name="w-[100px]"> Id </TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Color</TableHead>
        <TableHead>Weight</TableHead>
        <TableHead>Width</TableHead>
        <TableHead>Height</TableHead>
        <TableHead>Depth</TableHead>
        <TableHead>Price</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="product in products" :key="product.id">
        <TableCell class="font-medium">
          {{ product.id }}
        </TableCell>
        <TableCell>{{ product.name }}</TableCell>
        <TableCell>{{ product.color }}</TableCell>
        <TableCell>{{ product.weight }}</TableCell>
        <TableCell>{{ product.width }}</TableCell>
        <TableCell>{{ product.height }}</TableCell>
        <TableCell>{{ product.depth }}</TableCell>
        <TableCell>{{ product.price }}$</TableCell>
        <TableCell
          ><Button
            class="bg-green-400 hover:bg-green-600 active:bg-green-900"
            @click="handleButtonClick(product)"
            >Order</Button
          ></TableCell
        >
      </TableRow>
    </TableBody>
  </Table>
  <AddProduct /> -->

  <DataTable v-if="products.length" :products="products"/>
</template>

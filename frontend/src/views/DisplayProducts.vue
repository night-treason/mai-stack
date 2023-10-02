<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { ref, onMounted } from 'vue'
import axios from 'axios';
import {Product} from '@/interfaces/Product'
import AddProduct from '@/components/products/AddProduct.vue'

const products = ref<Product[]>([])

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/products')
    products.value = response.data
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <Table>
    <TableCaption>List of products</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead class-name="w-[100px]">
          Id
        </TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Color</TableHead>
        <TableHead>Weight</TableHead>
        <TableHead>Width</TableHead>
        <TableHead>Height</TableHead>
        <TableHead>Depth</TableHead>
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
      </TableRow>
    </TableBody>
  </Table>
  <AddProduct />
</template>
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
import { computed  } from 'vue'
import { Button } from '@/components/ui/button';
import { nanoid } from 'nanoid'
import { useStore } from 'vuex';

const store = useStore();

const productData = computed(() => store.state.products);
</script>

<template>
  <Table>
    <TableCaption>List of orders</TableCaption>
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
        <TableHead></TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="product in productData" :key="product.id">
        <TableCell class="font-medium">
          {{ product.id }}
        </TableCell>
        <TableCell>{{ product.name }}</TableCell>
        <TableCell>{{ product.color }}</TableCell>
        <TableCell>{{ product.weight }}</TableCell>
        <TableCell>{{ product.width }}</TableCell>
        <TableCell>{{ product.height }}</TableCell>
        <TableCell>{{ product.depth }}</TableCell>
        <TableCell><Button class="bg-green-400 hover:bg-green-600">Confirm</Button></TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
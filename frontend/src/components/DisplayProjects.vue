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
import {Project} from '@/interfaces/Project'

const projects = ref<Project[]>([])

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/projects')
    projects.value = response.data
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <Table>
    <TableCaption>List of current projects</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead class-name="w-[100px]">
          Id
        </TableHead>
        <TableHead>Name</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="project in projects" :key="project.id">
        <TableCell class="font-medium">
          {{ project.id }}
        </TableCell>
        <TableCell>{{ project.name }}</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
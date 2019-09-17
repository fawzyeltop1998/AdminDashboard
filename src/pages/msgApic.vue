<template>
    <div>
      <div class="row">
        <div class="col-12">
          <card :title="table2.title" :subTitle="table2.subTitle">
              <div class="search">
                  <input v-model="searchFilter" type="text" style="height: 55px; width: 100%; border-radius: 6px; border: 1px solid #DDD; outline: none; padding-left: 20px; font-size: 20px" placeholder="Search about a certain message">
              </div>
            <div slot="raw-content" class="table-responsive">
              <div class="card-body">
            <div class="mb-3" style="border-bottom: 1px solid #DDD; padding-bottom: 5px;" v-for="item in filterItems" :key="item.id">{{item.name}} - {{item.owner}}</div>
           </div>
              <div class="card-footer pb-0 pt-3">
            <jw-pagination :items="exampleItems" @changePage="onChangePage"></jw-pagination>
        </div>
            </div>
          </card>
        </div>
      </div>
    </div>
</template>
<script>
const exampleItems = [...Array(150).keys()].map(i => ({ id: (i+1), name: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy`, owner: 'Ahmed ' + (i + 1) }));

import { PaperTable } from "@/components";
const tableColumns = ["Id", "Name", "Salary", "Country", "City"];
const tableData = [
  {
    id: 1,
    name: "Dakota Rice",
    salary: "$36.738",
    country: "Niger",
    city: "Oud-Turnhout"
  },
  {
    id: 2,
    name: "Minerva Hooper",
    salary: "$23,789",
    country: "Curaçao",
    city: "Sinaai-Waas"
  },
  {
    id: 3,
    name: "Sage Rodriguez",
    salary: "$56,142",
    country: "Netherlands",
    city: "Baileux"
  },
  {
    id: 4,
    name: "Philip Chaney",
    salary: "$38,735",
    country: "Korea, South",
    city: "Overland Park"
  },
  {
    id: 5,
    name: "Doris Greene",
    salary: "$63,542",
    country: "Malawi",
    city: "Feldkirchen in Kärnten"
  },
  {
    id: 6,
    name: "Ahmed Adel",
    salary: "$63,542",
    country: "Malawi",
    city: "Feldkirchen in Kärnten"
  },
  {
    id: 7,
    name: "Abdulrahman Fawzy",
    salary: "$63,542",
    country: "Malawi",
    city: "Feldkirchen in Kärnten"
  },
  {
    id: 8,
    name: "Mohamed Reda",
    salary: "$63,542",
    country: "Malawi",
    city: "Feldkirchen in Kärnten"
  },
  {
    id: 9,
    name: "Mahmoud Bakery",
    salary: "$63,542",
    country: "Malawi",
    city: "Feldkirchen in Kärnten"
  },
  {
    id: 10,
    name: "Salma Ahmed",
    salary: "$63,542",
    country: "Malawi",
    city: "Feldkirchen in Kärnten"
  }
];

export default {
  components: {
    PaperTable
  },
  data() {
    return {
      searchFilter: '',
      table1: {
        title: "The last 10 people who buy a copy of app",
        subTitle: "10 people who by a copy of this app with their id & name",
        columns: [...tableColumns],
        data: [...tableData]
      },
      table2: {
         title: "Sent Messages",
         subTitle: "The Sent messages by users, You can navigate between them and filter them",
      },
       exampleItems,
       pageOfItems: []
    };
  },
  methods: {
     onChangePage(pageOfItems) {
        this.pageOfItems = pageOfItems;
      }
  },
  computed: {
      filterItems() {
          return this.pageOfItems.filter((item) => item.owner.match(this.searchFilter))
      }
  }
};
</script>
<style>
</style>

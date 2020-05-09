<template>
  <div class="itemParams" v-if="Object.keys(itemParams).length">
    <div class="sizeInfo">
      <span>{{itemParams.rule.key}}</span>
      <table v-for="item in itemParams.rule.tables">
        <tr v-for="itemItem in item">
          <td v-for="itemItemItem in itemItem">{{itemItemItem}}</td>
        </tr>
      </table>
    </div>
    <div class="product_info">
      <span>{{itemParams.info.key}}</span>
      <table>
        <tr v-for="item in itemParams.info.set">
          <td>{{item.key}}</td>
          <td class="valueColor">{{item.value}}</td>
        </tr>
      </table>
    </div>
    <div class="addInfo">
      {{itemParams.rule.disclaimer}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "ItemParams",
    props: {
      itemParams: {
        type: Object,
        default: {}
      }
    }
  }
</script>

<style scoped>
  .itemParams {
    padding: 10px;
    font-size: 14px;
    border-bottom: 5px solid #eeeeee;
  }
  .itemParams span {
    display: block;
    font-size: 20px;
    font-weight: bold;
    padding: 5px;
    margin: 5px 0;
  }
  table {
    /*border-bottom: 1px solid #b7b7b7;*/
    width: 100%;
    text-align: center;
    border-collapse: collapse;
  }
  table tr td{
    /*background-color: #ff1b30;*/
    min-width: 50px;
    height: 30px;
    /*padding: 5px;*/
    border-bottom: 1px solid #e8e8e8;
  }
  .valueColor {
    color: var(--color-tint);
  }
  .addInfo {
    margin: 10px 0;
    letter-spacing: 3px;
    border-left: 10px solid var(--color-tint);
    padding: 5px;
  }
</style>

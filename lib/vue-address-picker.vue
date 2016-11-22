<!-- 
组件参数 opts 对象属性表
属性名       描述            类型        默认
noDistrict  是否显示区选项    Boolean   false
-->
<template>
  <div class='address-picker'>
    <label class="province">
      <span class="option_title">所在省</span>
      <select v-model="province" @change="changed">
        <option v-for="item in add">{{item.name}}</option>
      </select>
    </label>
    <label class="city">
      <span class="option_title">所在市</span>
      <select v-model="city" @change="changed">
        <option v-for="item in thisCitys">{{item.name}}</option>
      </select>
    </label>
    <label class="district" v-show="!options.noDistrict">
      <span class="option_title">所在区</span>
      <select v-model="district" @change="changed">
        <option v-for="item in thisDistricts">{{item}}</option>
      </select>
    </label>
  </div>
</template>

<script>
var addressJson = require('./address.js')

module.exports = {
    name: 'addressPicker',
    data() {
        return {
           add: addressJson,
           province: '',
           city: '',
           district: ''
        }
    },
    computed: {
      options: function(){
        return this.opts?this.opts:{}
      },
      thisCitys: function(){
        var thisProvince = this.province
        var thisArr = this.add.filter(function(index) {
          return index.name == thisProvince
        })
        return thisArr[0]?thisArr[0].city:[]
      },
      thisDistricts: function(){
        var thisCity = this.city
        var thisArr = this.thisCitys.filter(function(index) {
          return index.name == thisCity
        })
        return thisArr[0]?thisArr[0].area:[]
      },
      address: function(){
        var province = this.province
        var city = this.city
        var district = this.district
        if(this.options.noDistrict){
          return {
            province,city
          }
        }else {
          return {
            province,city,district
          }
        }
      }
    },
    props: ['opts'],
    methods: {
      changed: function(){
        this.$emit('input',this.address);
      }
    },
    mounted: function(){
      console.log();
    }
}
</script>

<style lang="less" scoped>
.address-picker {
  select {
    min-width: 60px;
  }
}

.address-picker:after {content: ".";display: block;height: 0;clear: both;visibility: hidden;}
</style>


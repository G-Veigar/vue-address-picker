<template>
  <div class='address-picker'>
    <label class="province">
      <span class="option_title" v-if="!options.noLabel">{{t_province}}</span>
      <select v-model="province" @change="changed('province')">
        <option value='请选择' style="display: none">请选择</option>
        <option v-for="item in add">{{item.name}}</option>
      </select>
    </label>
    <label class="city">
      <span class="option_title" v-if="!options.noLabel">{{t_city}}</span>
      <select v-model="city" @change="changed('city')">
        <option value='请选择' style="display: none">请选择</option>
        <option v-for="item in thisCitys">{{item.name}}</option>
      </select>
    </label>
    <label class="district" v-show="!options.noDistrict">
      <span class="option_title" v-if="!options.noLabel">{{t_district}}</span>
      <select v-model="district" @change="changed('district')">
        <option value='请选择' style="display: none">请选择</option>
        <option v-for="item in thisDistricts">{{item}}</option>
      </select>
    </label>
  </div>
</template>

<script>
const addressJson = require('./address.js')

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
      t_province: function(){
      	if((this.opts||{}).label){
      		return this.opts.label.province?this.opts.label.province:'省'
      	}else{
      		return '省'
      	}
      },
      t_city: function(){
      	if((this.opts||{}).label){
      		return this.opts.label.city?this.opts.label.city:'市'
      	}else{
      		return '市'
      	}
      },
      t_district: function(){
      	if((this.opts||{}).label){
      		return this.opts.label.district?this.opts.label.district:'区'
      	}else{
      		return '区'
      	}
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
      changed: function(type){
        if(type == "province") {
          this.city = '请选择'
          this.district = '请选择'
        }else if(type == "city") {
          this.district = '请选择'
        }
        this.$emit('input',this.address);
      },
      init: function(){
        if(this.opts&&this.opts.default&&this.opts.default.province){
          this.province =this.opts.default.province;
          if(this.opts.default.city){
            this.city =  this.opts.default.city;
            if(this.opts.default.district){
              this.district =  this.opts.default.district;
            }else {
              this.district =  '请选择'
            }
          }else {
            this.city = '请选择';
          }
          this.$emit('input',this.address);
        }else {
          this.province = '请选择';
          this.city = '请选择';
          this.district = '请选择';
        }
      }
    },
    watch: {
      opts: {
        handler: function(){
          this.init()
        },
        deep: true
      }
    },
    mounted: function(){
      this.init()
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


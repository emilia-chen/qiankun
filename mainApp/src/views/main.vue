<template>
    <div>
        i am 主基站 
       <div @click='clickApp'>路由加载微应用app1</div>
        <div @click='loadApp'>加载微应用app1</div>
        <div ref='showContent'>显示内容</div>
    </div>
</template>
<script>
import { loadMicroApp } from 'qiankun';
export default {
  name: "App",
  mounted () { 
   console.log('this',this.$refs.showContent)  
  },
  methods: {   // 返回s
    loadApp () {
      console.log('loadApp')  //只是加载了，需要路由跳转才会再显示
       loadMicroApp({     name: "b",
            entry: "//localhost:8091",
         //   activeRule: "/#/app1",
            container:document.getElementById('a'),//this.$refs.showContent,
            //
          props: { name: 'qiankun' },
       });
    },
    clickApp() {  
      this.$router.push({ path:'/app1'
      })
    }
  },

}
</script>
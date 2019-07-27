import Vue from 'vue';

Vue.directive("loadMore",(el,binding)=>{
	el.addEventListener("scroll",()=>{
        console.log(el,binding)
		if(el.scrollTop>500){
			
		}
		else{
			
		}
	})
})

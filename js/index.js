// 轮播图选项卡
window.onload=function(){
	let lis=document.querySelectorAll(".outer");
	let inn=document.querySelectorAll(".bn-choose");
	// console.log(lis);
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseenter=function(){
			for(let j=0;j<inn.length;j++){
				inn[j].style.display="none";
			}
		inn[i].style.display="flex";
		}
		lis[i].onmouseleave=function(){
			inn[i].style.display="none";
		}
	}

	// 导航下拉菜单
	let text=document.querySelectorAll(".hd-text");
	let menu=document.querySelectorAll(".navmenu");
	// console.log(menu);
	for(let i=0;i<text.length;i++){
		text[i].onmouseenter=function(){
			for(let j=0;j<menu.length;j++){
				menu[j].style.height=0;
			}
		menu[i].style.height=229+"px";
		}
		text[i].onmouseleave=function(){
			menu[i].style.height=0;
		}
	}



	//轮播图
	//1.获取所需元素
	    let pic=document.querySelectorAll(".pict");
	    let dots=document.querySelectorAll(".item");
	    let banner=document.querySelectorAll(".bn")[0];
	    let leftBtn=document.querySelectorAll(".leftBtn")[0];
	    let rightBtn=document.querySelectorAll(".rightBtn")[0];
	    console.log(pic,dots,banner,leftBtn,rightBtn);
	    let widthes=parseInt(getComputedStyle(pic[0],null).width);
	    // console.log(widths);
	    
	    // 定义初始值
	    pic[0].style.opacity=1;
	    dots[0].classList.add("active");
	    let num=0;
	    let t=setInterval(move,2000);
	    let now=0;
	    let flag=true;

	    //鼠标点击轮播点
	    for(let i=0;i<dots.length;i++){
	    	dots[i].onclick=function(){
	    		for(let j=0;j<pic.length;j++){
	    			dots[j].classList.remove("active");
	    			pic[j].style.opacity=0;
	    		}
	    		dots[i].classList.add("active");
	    		pic[i].style.opacity=1;
	    		num=i;
	    	}
	    }

	    //自动轮播(向左动)
	    function move(){
	    	num++;
	    	if(num==dots.length){
	    		num=0;
	    	}
	    	for(let j=0;j<pic.length;j++){
	    		pic[j].style.opacity=0;
	    		dots[j].classList.remove("active");
	    	}
	    	pic[num].style.opacity=1;
	    	dots[num].classList.add("active");
	    }

	    //自动轮播(向右动)
	    function moveL(){
	    	num--;
	    	if(num<0){
	    		num=pic.length-1;
	    	}
	    	for(let j=0;j<pic.length;j++){
	    		pic[j].style.opacity=0;
	    		dots[j].classList.remove("active");
	    	}
	    	pic[num].style.opacity=1;
	    	dots[num].classList.add("active");
	    }


	    //移入图片停止轮播
	    banner.onmouseover=function () {
	        clearInterval(t);
	    }
	    banner.onmouseout=function () {
	        t=setInterval(move,2000);
	    }

	    //点击左箭头
	    leftBtn.onclick=function () {
	        moveL();
	    }
	    //点击右箭头
	    rightBtn.onclick=function () {
	        move();
	    }


	   





	//内容轮播图
	//第一个  图书
    let imgs1=document.querySelectorAll(".con-desc1");
    let point1=document.querySelectorAll(".pin1");
    let leftbtn1=document.querySelector(".con-leftBtn1");
    let rightbtn1=document.querySelector(".con-rightBtn1");
    // console.log(imgs,point,leftbtn,rightbtn);
    let widths1=parseInt(getComputedStyle(imgs1[0],null).width);
    // console.log(widths);
    contentBn(imgs1,point1,leftbtn1,rightbtn1,widths1);


    //第二个  MIUI
    let imgs2=document.querySelectorAll(".con-desc2");
    let point2=document.querySelectorAll(".pin2");
    let leftbtn2=document.querySelector(".con-leftBtn2");
    let rightbtn2=document.querySelector(".con-rightBtn2");
    // console.log(imgs,point,leftbtn,rightbtn);
    let widths2=parseInt(getComputedStyle(imgs2[0],null).width);
    // console.log(widths);
    contentBn(imgs2,point2,leftbtn2,rightbtn2,widths2);


     //第三个  游戏
    let imgs3=document.querySelectorAll(".con-desc3");
    let point3=document.querySelectorAll(".pin3");
    let leftbtn3=document.querySelector(".con-leftBtn3");
    let rightbtn3=document.querySelector(".con-rightBtn3");
    // console.log(imgs,point,leftbtn,rightbtn);
    let widths3=parseInt(getComputedStyle(imgs3[0],null).width);
    // console.log(widths);
    contentBn(imgs3,point3,leftbtn3,rightbtn3,widths3);



     //第四个  应用
    let imgs4=document.querySelectorAll(".con-desc4");
    let point4=document.querySelectorAll(".pin4");
    let leftbtn4=document.querySelector(".con-leftBtn4");
    let rightbtn4=document.querySelector(".con-rightBtn4");
    // console.log(imgs,point,leftbtn,rightbtn);
    let widths4=parseInt(getComputedStyle(imgs4[0],null).width);
    // console.log(widths);
    contentBn(imgs4,point4,leftbtn4,rightbtn4,widths4);


    
    //为你推荐平移
    let button=document.querySelectorAll(".rec-btn");
    let miList=document.querySelector(".rec-list");
    let w=parseInt(getComputedStyle(miList,null).width)/3;
    let times=0;

    button[1].classList.add("btn-change");

    //点击左箭头
    button[0].onclick=function(){
    	times--;
    	if(times==-1){
    		times=0;
    	}
    	miList.style.transform=`translate(-${w*times}px)`;
    	button[0].classList.add("btn-change");
    	button[1].classList.add("btn-change");
    	if(times==0){
    		button[0].classList.remove("btn-change");
    	}
    }
    //点击右箭头
    button[1].onclick=function(){
    	times++;
    	if(times==3){
    		times=2;
    	}
    	miList.style.transform=`translate(-${w*times}px)`;
    	button[1].classList.add("btn-change");
    	button[0].classList.add("btn-change");
    	if(times==2){
    		button[1].classList.remove("btn-change");
    	}
    }
    



	//小米闪购平移
	let btn=document.querySelectorAll(".flash-btn");
	let flashList=document.querySelector(".flash-list");
	let wid=parseInt(getComputedStyle(flashList,null).width)/2;
	let count=0;

	//点击左箭头
	btn[0].onclick=function(){
		count--;
		if(count==-1){
			count=0;
		}
		flashList.style.transform=`translate(-${wid*count}px)`;

	}
	//点击右箭头
	btn[1].onclick=function(){
		count++;
		if(count==2){
			count=1;
		}
		flashList.style.transform=`translate(-${wid*count}px)`;

	}
	btn[0].onmousedown=function(){
		btn[1].style.color="#b0b0b0";
		btn[0].style.color="#e0e0e0";
	}
	btn[1].onmousedown=function(){
	 	btn[0].style.color="#b0b0b0";
	 	btn[1].style.color="#e0e0e0";
	}




	//购物车
	let shopping=document.querySelector(".shopping");
	// let spcar=document.querySelector(".sp-car");
	let goods=document.querySelector(".goods");
	console.log(shopping,goods);

	shopping.onmouseenter=function(){
		goods.style.height=98+"px";
	}
	shopping.onmouseleave=function(){
		goods.style.height=0;
	}





	//家电板块选项卡
	let elect=document.querySelectorAll(".elec-list");
	let elecc=document.querySelectorAll(".elec-span");
	// console.log(elect,elecc);
	
	elecc[3].style.display="block";
	elect[3].classList.add("change");
	elect.forEach(function(value,index){
		value.onmouseenter=function(){
			elecc.forEach(function(element,i){
				elect[i].classList.remove("change");
				element.style.display="none";
			})
			value.classList.add("change");
			elecc[index].style.display="block";
		}
	})




	//返回按钮
	let back=document.querySelector(".back");
	//点击返回顶部
	back.onclick=function(){
		animate(document.body,{scrollTop:0});
		animate(document.documentElement,{scrollTop:0});

	}
	//页面滑动到一定高度出现按钮
	let wh=window.innerHeight;
	window.onscroll=function(){
		let bh=document.body.scrollTop||document.documentElement.scrollTop;
		if (wh+bh>=1500) {
			back.style.display="block";
		}else{
			back.style.display="none";
		}
	}
	

	// 倒计时
	let timeN=document.querySelectorAll(".num");
	console.log(timeN);

	setDate();

    setInterval(setDate,1000);

    function setDate() {
        let arr=fn();
        timeN.forEach((value,index)=>{
            value.innerHTML=arr[index];
        })
    }
    //获取数组
    function fn(){
        let arr=[];
        //获取现在的时间
        let now=new Date();
        //获取未来的时间
        let future=new Date(2018,9,1);
        //计算出未来与现在的时间差（/1000表示将毫秒变为秒）
        let times=Math.floor((future.getTime()-now.getTime())/1000);

        
        //得到小时数
        let hour=Math.floor(times%(30*24*60*60)%(24*60*60)/(60*60));
        if(Math.floor(hour/10)==0){
        	arr.push("0"+hour);
        }else{
        	 arr.push(hour);
        }
        //得到分钟数
        let m=Math.floor(times%(30*24*60*60)%(24*60*60)%(60*60)/60);
        if(Math.floor(m/10)==0){
        	arr.push("0"+m);
        }else{
        	arr.push(m);	 
        }
        //得到秒数
        let s=Math.floor(times%(30*24*60*60)%(24*60*60)%(60*60)%60);
        if(Math.floor(s/10)==0){
        	arr.push("0"+s);
        }else{
        	arr.push(s);	 
        }
        


        return arr;
    }


}






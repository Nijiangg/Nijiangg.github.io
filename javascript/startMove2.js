//滑动菜单
		var iSpeed=0;
		var left=0;
		function startMove2(obj,iTarget){
			clearInterval(obj.timer);
			obj.timer=setInterval(function(){
				iSpeed+=(iTarget-obj.offsetLeft)/5;
				iSpeed*=0.7;
				left+=iSpeed;
				if(Math.abs(iSpeed)<1 && Math.abs(left-iTarget)<1){
					clearInterval(obj.timer);
					obj.style.left=iTarget+'px';
				}else{
					obj.style.left=left+'px';
				};
			} ,30);
		};

		function myAddEvent(obj,sEvent,fn){
			if(obj.attachEvent){
				obj.attachEvent('on'+sEvent,fn);
			}else{
				obj.addEventListener(sEvent,fn,false);
			};
		};
	//选项卡
		function TabSwitch(id){
			var oDiv=document.getElementById(id);
			this.aBtn=oDiv.getElementsByTagName('input');
			this.aDiv=oDiv.getElementsByTagName('div');
			var i = 0;
			var athis=this;
			for(i=0;i<this.aBtn.length;i++){
				this.aBtn[i].index=i;
				this.aBtn[i].onclick=function(){
					athis.tab(this);
				};
			};
		};  
		TabSwitch.prototype.tab=function (oBtn){
			for(i=0;i<this.aBtn.length;i++){
				this.aBtn[i].className='';
				this.aDiv[i].style.display='none';
			}
			oBtn.className='active';
			this.aDiv[oBtn.index].style.display='block';
		};  
		function getStyle(obj,attr){
			if(obj.currentStyle){
				return obj.currentStyle[attr];
			}else{
				return getComputedStyle(obj,false)[attr];
			};
		};

		function startMove(obj,json,fn){
			clearInterval(obj.timer);
			obj.timer=setInterval(function(){
				var bStop=true;
				for(var attr in json){
					var iCur=0;
					if(attr=='opacity'){
						iCur=parseInt(parseFloat(getStyle(obj,attr))*100);
					}else{
						iCur=parseInt(getStyle(obj,attr));
					};

					var iSpeed=(json[attr]-iCur)/8;
					iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);

					if(iCur!=json[attr]){
						bStop=false;
					};

					if(attr=='opacity'){
							obj.style.filter=iCur+iSpeed;
							obj.style.opacity=(iCur+iSpeed)/100;
						}else{
							obj.style[attr]=iCur+iSpeed+'px';
						};
				};
				if(bStop){
					clearInterval(obj.timer);
					if(fn){
						fn();
					};
				};
			} ,30)
		};
		//侧边栏
		var timer=null;
		function startMove3(){
			var oDiv8=document.getElementById('div8');
			clearInterval(timer);
			timer=setInterval(function(){
				var iSpeed=10;
				if(oDiv8.offsetLeft==0){
					clearInterval(timer);
				}else{
					oDiv8.style.left=oDiv8.offsetLeft+iSpeed+'px';
				};
			} ,30);
		};
		function startMove4(){
			var oDiv8=document.getElementById('div8');
			clearInterval(timer);
			timer=setInterval(function(){
				var iSpeed=-10;
				if(oDiv8.offsetLeft==-200){
					clearInterval(timer);
				}else{
					oDiv8.style.left=oDiv8.offsetLeft+iSpeed+'px';
				}
			} ,30);
		};

		